import { useEffect, useRef } from 'react';

/*
 * Reptile Interactive Cursor — Optimized
 * Reduced segments (80→44), less frequent ribs, throttled mouse events.
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
        const ctx = canvas.getContext('2d', { alpha: true });

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

        // Reduced skeleton
        const TOTAL = 44;
        const SEG_LEN = 12;
        const segments = [];
        for (let i = 0; i < TOTAL; i++) {
            segments.push(new Segment(width / 2, height / 2, SEG_LEN, 0));
        }

        const legPairs = [
            { at: 6, len: 28, segs: 3, side: 1 },
            { at: 6, len: 28, segs: 3, side: -1 },
            { at: 9, len: 26, segs: 3, side: 1 },
            { at: 9, len: 26, segs: 3, side: -1 },
            { at: 28, len: 24, segs: 3, side: 1 },
            { at: 28, len: 24, segs: 3, side: -1 },
            { at: 31, len: 22, segs: 3, side: 1 },
            { at: 31, len: 22, segs: 3, side: -1 },
        ];

        const onMouse = (e) => { targetX = e.clientX; targetY = e.clientY; };
        const onTouch = (e) => {
            if (e.touches.length) { targetX = e.touches[0].clientX; targetY = e.touches[0].clientY; }
        };

        window.addEventListener('mousemove', onMouse, { passive: true });
        window.addEventListener('touchmove', onTouch, { passive: true });
        window.addEventListener('resize', resize);

        let raf;
        let time = 0;

        function bodyW(i) {
            const t = i / TOTAL;
            if (t < 0.06) return 4 + t / 0.06 * 20;
            if (t < 0.12) return 24;
            if (t < 0.55) return 24 - (t - 0.12) / 0.43 * 6;
            return 18 * Math.pow(1 - (t - 0.55) / 0.45, 1.6);
        }

        function draw() {
            time += 0.016;
            ctx.clearRect(0, 0, width, height);

            mouseX += (targetX - mouseX) * 0.12;
            mouseY += (targetY - mouseY) * 0.12;

            // IK solve
            segments[0].follow(mouseX, mouseY);
            for (let i = 1; i < TOTAL; i++) {
                segments[i].follow(segments[i - 1].x, segments[i - 1].y);
            }

            // Body membrane
            ctx.beginPath();
            for (let i = 0; i < TOTAL; i++) {
                const s = segments[i];
                const w = bodyW(i);
                const px = s.x + Math.cos(s.angle + Math.PI / 2) * w;
                const py = s.y + Math.sin(s.angle + Math.PI / 2) * w;
                i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
            }
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

            // Spine
            ctx.beginPath();
            ctx.moveTo(segments[0].endX(), segments[0].endY());
            for (let i = 0; i < TOTAL; i++) ctx.lineTo(segments[i].x, segments[i].y);
            ctx.strokeStyle = 'rgba(200, 180, 255, 0.5)';
            ctx.lineWidth = 3;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.stroke();

            // Spine glow
            ctx.beginPath();
            ctx.moveTo(segments[0].endX(), segments[0].endY());
            for (let i = 0; i < TOTAL; i++) ctx.lineTo(segments[i].x, segments[i].y);
            ctx.strokeStyle = 'rgba(139, 92, 246, 0.15)';
            ctx.lineWidth = 8;
            ctx.stroke();

            // Ribs — every 4th segment instead of every 2nd
            for (let i = 2; i < TOTAL; i += 4) {
                const t = i / TOTAL;
                const w = bodyW(i) * 0.95;
                if (w < 3) continue;

                const seg = segments[i];
                const perp = seg.angle + Math.PI / 2;
                const cx = seg.x, cy = seg.y;
                const r1x = cx + Math.cos(perp) * w;
                const r1y = cy + Math.sin(perp) * w;
                const r2x = cx - Math.cos(perp) * w;
                const r2y = cy - Math.sin(perp) * w;

                const alpha = 0.15 + (1 - t) * 0.3;
                ctx.strokeStyle = `rgba(180, 160, 240, ${alpha})`;
                ctx.lineWidth = 1.2;

                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(r1x, r1y);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(r2x, r2y);
                ctx.stroke();
            }

            // Vertebrae — every 3rd
            for (let i = 0; i < TOTAL; i += 3) {
                const t = i / TOTAL;
                const r = 2 + (1 - t) * 2;
                ctx.beginPath();
                ctx.arc(segments[i].x, segments[i].y, r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + (1 - t) * 0.4})`;
                ctx.fill();
            }

            // Legs
            legPairs.forEach((leg) => {
                const anchor = segments[leg.at];
                if (!anchor) return;
                const perp = anchor.angle + Math.PI / 2 * leg.side;
                const baseX = anchor.x + Math.cos(perp) * bodyW(leg.at) * 0.7;
                const baseY = anchor.y + Math.sin(perp) * bodyW(leg.at) * 0.7;

                const bendPhase = time * 2 + leg.at * 0.3 + leg.side * 1.5;
                const bendAngle = perp + Math.sin(bendPhase) * 0.4;
                const subLen = leg.len / leg.segs;

                let prevX = baseX, prevY = baseY;
                let angle = bendAngle;
                const joints = [{ x: prevX, y: prevY }];
                for (let s = 0; s < leg.segs; s++) {
                    angle += (s === 1 ? 0.6 : 0.2) * Math.sin(bendPhase + s);
                    const nx = prevX + Math.cos(angle) * subLen;
                    const ny = prevY + Math.sin(angle) * subLen;
                    joints.push({ x: nx, y: ny });
                    prevX = nx;
                    prevY = ny;
                }

                ctx.beginPath();
                ctx.moveTo(joints[0].x, joints[0].y);
                for (let j = 1; j < joints.length; j++) ctx.lineTo(joints[j].x, joints[j].y);
                ctx.strokeStyle = 'rgba(180, 160, 240, 0.35)';
                ctx.lineWidth = 1.5;
                ctx.stroke();

                joints.forEach((j, idx) => {
                    ctx.beginPath();
                    ctx.arc(j.x, j.y, idx === 0 ? 2.5 : 1.8, 0, Math.PI * 2);
                    ctx.fillStyle = idx === joints.length - 1 ? 'rgba(6, 182, 212, 0.5)' : 'rgba(255, 255, 255, 0.4)';
                    ctx.fill();
                });
            });

            // Head
            const head = segments[0];
            const hx = head.endX(), hy = head.endY();

            const grd = ctx.createRadialGradient(hx, hy, 0, hx, hy, 30);
            grd.addColorStop(0, 'rgba(139, 92, 246, 0.2)');
            grd.addColorStop(1, 'rgba(139, 92, 246, 0)');
            ctx.beginPath();
            ctx.arc(hx, hy, 30, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();

            ctx.save();
            ctx.translate(hx, hy);
            ctx.rotate(head.angle);

            ctx.beginPath();
            ctx.ellipse(0, 0, 10, 7, 0, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(220, 210, 255, 0.7)';
            ctx.fill();

            // Eyes
            ctx.beginPath();
            ctx.arc(3, -5, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(6, 182, 212, 0.95)';
            ctx.fill();
            ctx.beginPath();
            ctx.arc(3, 5, 2.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();

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
