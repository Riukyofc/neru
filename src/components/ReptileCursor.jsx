import { useEffect, useRef } from 'react';

/*
 * Reptile Interactive Cursor — Full Background Version
 * High-resolution IK skeleton with detailed bones, ribs, vertebrae,
 * and organic physics. Serves as the primary site background.
 */

class Segment {
    constructor(x, y, len, angle) {
        this.x = x;
        this.y = y;
        this.len = len;
        this.angle = angle || 0;
    }

    follow(tx, ty) {
        const dx = tx - this.x;
        const dy = ty - this.y;
        this.angle = Math.atan2(dy, dx);
        this.x = tx - Math.cos(this.angle) * this.len;
        this.y = ty - Math.sin(this.angle) * this.len;
    }

    endX() { return this.x + Math.cos(this.angle) * this.len; }
    endY() { return this.y + Math.sin(this.angle) * this.len; }
}

export default function ReptileCursor() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        // Hi-DPI support
        let dpr = window.devicePixelRatio || 1;
        let width, height;

        function resize() {
            dpr = window.devicePixelRatio || 1;
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        resize();

        let mouseX = width / 2;
        let mouseY = height / 2;
        let targetX = mouseX;
        let targetY = mouseY;

        // ── Skeleton config ──
        const TOTAL = 80;
        const SEG_LEN = 10;
        const segments = [];
        for (let i = 0; i < TOTAL; i++) {
            segments.push(new Segment(width / 2, height / 2, SEG_LEN, 0));
        }

        // Leg pairs (index, side-length, sub-segments)
        const legPairs = [
            { at: 10, len: 30, segs: 3, side: 1 },
            { at: 10, len: 30, segs: 3, side: -1 },
            { at: 14, len: 28, segs: 3, side: 1 },
            { at: 14, len: 28, segs: 3, side: -1 },
            { at: 50, len: 26, segs: 3, side: 1 },
            { at: 50, len: 26, segs: 3, side: -1 },
            { at: 54, len: 24, segs: 3, side: 1 },
            { at: 54, len: 24, segs: 3, side: -1 },
        ];

        // ── Event handlers ──
        const onMouse = (e) => { targetX = e.clientX; targetY = e.clientY; };
        const onTouch = (e) => {
            if (e.touches.length) { targetX = e.touches[0].clientX; targetY = e.touches[0].clientY; }
        };

        window.addEventListener('mousemove', onMouse);
        window.addEventListener('touchmove', onTouch, { passive: true });
        window.addEventListener('resize', resize);

        let raf;
        let time = 0;

        function draw() {
            time += 0.016;
            ctx.clearRect(0, 0, width, height);

            // Smooth follow
            mouseX += (targetX - mouseX) * 0.12;
            mouseY += (targetY - mouseY) * 0.12;

            // IK solve
            segments[0].follow(mouseX, mouseY);
            for (let i = 1; i < TOTAL; i++) {
                segments[i].follow(segments[i - 1].x, segments[i - 1].y);
            }

            // ── Helper: body width at index ──
            function bodyW(i) {
                const t = i / TOTAL;
                // Head ramp-up, then wide body, then taper to tail
                if (t < 0.06) return 4 + t / 0.06 * 22;            // skull → neck
                if (t < 0.12) return 26;                              // shoulders
                if (t < 0.55) return 26 - (t - 0.12) / 0.43 * 6;    // torso
                return 20 * Math.pow(1 - (t - 0.55) / 0.45, 1.6);   // tail taper
            }

            // ── Draw translucent body membrane ──
            ctx.save();
            ctx.beginPath();
            // top edge
            for (let i = 0; i < TOTAL; i++) {
                const s = segments[i];
                const w = bodyW(i);
                const px = s.x + Math.cos(s.angle + Math.PI / 2) * w;
                const py = s.y + Math.sin(s.angle + Math.PI / 2) * w;
                i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
            }
            // bottom edge (reversed)
            for (let i = TOTAL - 1; i >= 0; i--) {
                const s = segments[i];
                const w = bodyW(i);
                const px = s.x + Math.cos(s.angle - Math.PI / 2) * w;
                const py = s.y + Math.sin(s.angle - Math.PI / 2) * w;
                ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fillStyle = 'rgba(139, 92, 246, 0.03)';
            ctx.fill();
            ctx.restore();

            // ── Draw spine (thick, glowing) ──
            ctx.beginPath();
            ctx.moveTo(segments[0].endX(), segments[0].endY());
            for (let i = 0; i < TOTAL; i++) ctx.lineTo(segments[i].x, segments[i].y);
            ctx.strokeStyle = 'rgba(200, 180, 255, 0.5)';
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();

            // Glow layer on spine
            ctx.beginPath();
            ctx.moveTo(segments[0].endX(), segments[0].endY());
            for (let i = 0; i < TOTAL; i++) ctx.lineTo(segments[i].x, segments[i].y);
            ctx.strokeStyle = 'rgba(139, 92, 246, 0.15)';
            ctx.lineWidth = 10;
            ctx.stroke();

            // ── Draw ribs ──
            const RIB_EVERY = 2;
            for (let i = 2; i < TOTAL; i++) {
                if (i % RIB_EVERY !== 0) continue;
                const t = i / TOTAL;
                const w = bodyW(i) * 0.95;
                if (w < 3) continue;

                const seg = segments[i];
                const perp = seg.angle + Math.PI / 2;

                // Rib curves (slight arc for realism)
                const cx = seg.x;
                const cy = seg.y;
                const r1x = cx + Math.cos(perp) * w;
                const r1y = cy + Math.sin(perp) * w;
                const r2x = cx - Math.cos(perp) * w;
                const r2y = cy - Math.sin(perp) * w;

                // Curved rib using quadratic bezier
                const bulgeFactor = w * 0.25;
                const bulgeAngle = seg.angle;
                const bx = cx + Math.cos(bulgeAngle) * bulgeFactor * (i % 4 < 2 ? -1 : 1);
                const by = cy + Math.sin(bulgeAngle) * bulgeFactor * (i % 4 < 2 ? -1 : 1);

                const alpha = 0.15 + (1 - t) * 0.3;
                ctx.strokeStyle = `rgba(180, 160, 240, ${alpha})`;
                ctx.lineWidth = 1.2 + (1 - t) * 0.8;

                // Left rib
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.quadraticCurveTo(bx + Math.cos(perp) * w * 0.5, by + Math.sin(perp) * w * 0.5, r1x, r1y);
                ctx.stroke();

                // Right rib
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.quadraticCurveTo(bx - Math.cos(perp) * w * 0.5, by - Math.sin(perp) * w * 0.5, r2x, r2y);
                ctx.stroke();

                // Rib tip joints
                const dotR = 1.5 + (1 - t) * 2;
                ctx.beginPath();
                ctx.arc(r1x, r1y, dotR, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(6, 182, 212, ${alpha + 0.15})`;
                ctx.fill();
                ctx.beginPath();
                ctx.arc(r2x, r2y, dotR, 0, Math.PI * 2);
                ctx.fill();
            }

            // ── Draw vertebrae ──
            for (let i = 0; i < TOTAL; i += 2) {
                const t = i / TOTAL;
                const r = 2 + (1 - t) * 2.5;
                const alpha = 0.35 + (1 - t) * 0.5;
                ctx.beginPath();
                ctx.arc(segments[i].x, segments[i].y, r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                ctx.fill();
            }

            // ── Draw legs ──
            legPairs.forEach((leg) => {
                const anchor = segments[leg.at];
                if (!anchor) return;
                const perp = anchor.angle + Math.PI / 2 * leg.side;
                const baseX = anchor.x + Math.cos(perp) * bodyW(leg.at) * 0.7;
                const baseY = anchor.y + Math.sin(perp) * bodyW(leg.at) * 0.7;

                // Simple 3-segment leg with physics-like bend
                const bendPhase = time * 2 + leg.at * 0.3 + leg.side * 1.5;
                const bendAngle = perp + Math.sin(bendPhase) * 0.4;
                const subLen = leg.len / leg.segs;

                let prevX = baseX;
                let prevY = baseY;
                let angle = bendAngle;

                const joints = [{ x: prevX, y: prevY }];
                for (let s = 0; s < leg.segs; s++) {
                    const bendOff = (s === 1 ? 0.6 : 0.2) * Math.sin(bendPhase + s);
                    angle += bendOff;
                    const nx = prevX + Math.cos(angle) * subLen;
                    const ny = prevY + Math.sin(angle) * subLen;
                    joints.push({ x: nx, y: ny });
                    prevX = nx;
                    prevY = ny;
                }

                // Draw leg bones
                ctx.beginPath();
                ctx.moveTo(joints[0].x, joints[0].y);
                for (let j = 1; j < joints.length; j++) {
                    ctx.lineTo(joints[j].x, joints[j].y);
                }
                ctx.strokeStyle = 'rgba(180, 160, 240, 0.35)';
                ctx.lineWidth = 1.5;
                ctx.stroke();

                // Draw leg joints
                joints.forEach((j, idx) => {
                    const r = idx === 0 ? 2.5 : (idx === joints.length - 1 ? 2 : 1.8);
                    ctx.beginPath();
                    ctx.arc(j.x, j.y, r, 0, Math.PI * 2);
                    ctx.fillStyle = idx === joints.length - 1
                        ? 'rgba(6, 182, 212, 0.5)'
                        : 'rgba(255, 255, 255, 0.4)';
                    ctx.fill();
                });
            });

            // ── Head ──
            const head = segments[0];
            const hx = head.endX();
            const hy = head.endY();

            // Skull glow
            const grd = ctx.createRadialGradient(hx, hy, 0, hx, hy, 35);
            grd.addColorStop(0, 'rgba(139, 92, 246, 0.25)');
            grd.addColorStop(0.5, 'rgba(139, 92, 246, 0.06)');
            grd.addColorStop(1, 'rgba(139, 92, 246, 0)');
            ctx.beginPath();
            ctx.arc(hx, hy, 35, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();

            // Skull shape (elongated)
            ctx.save();
            ctx.translate(hx, hy);
            ctx.rotate(head.angle);
            ctx.beginPath();
            ctx.ellipse(0, 0, 10, 7, 0, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(220, 210, 255, 0.7)';
            ctx.fill();
            ctx.strokeStyle = 'rgba(139, 92, 246, 0.5)';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Snout
            ctx.beginPath();
            ctx.ellipse(8, 0, 5, 4, 0, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(200, 190, 240, 0.5)';
            ctx.fill();

            // Jaw line
            ctx.beginPath();
            ctx.moveTo(4, 5);
            ctx.quadraticCurveTo(10, 5, 13, 2);
            ctx.strokeStyle = 'rgba(180, 160, 240, 0.4)';
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(4, -5);
            ctx.quadraticCurveTo(10, -5, 13, -2);
            ctx.stroke();

            // Eyes
            ctx.beginPath();
            ctx.arc(3, -5, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(6, 182, 212, 0.95)';
            ctx.fill();
            ctx.beginPath();
            ctx.arc(3, -5, 1, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.fill();

            ctx.beginPath();
            ctx.arc(3, 5, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(6, 182, 212, 0.95)';
            ctx.fill();
            ctx.beginPath();
            ctx.arc(3, 5, 1, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.fill();

            ctx.restore();

            // ── Tail tip ──
            const tail = segments[TOTAL - 1];
            const tGrd = ctx.createRadialGradient(tail.x, tail.y, 0, tail.x, tail.y, 14);
            tGrd.addColorStop(0, 'rgba(6, 182, 212, 0.2)');
            tGrd.addColorStop(1, 'rgba(6, 182, 212, 0)');
            ctx.beginPath();
            ctx.arc(tail.x, tail.y, 14, 0, Math.PI * 2);
            ctx.fillStyle = tGrd;
            ctx.fill();

            raf = requestAnimationFrame(draw);
        }

        draw();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('mousemove', onMouse);
            window.removeEventListener('touchmove', onTouch);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1,
                background: '#050507',
            }}
        />
    );
}
