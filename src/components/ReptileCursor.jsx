import { useEffect, useRef } from 'react';

/*
 * Reptile Interactive Cursor — Lightweight Version
 * Minimal skeleton with smooth follow. No ribs, no legs, no glow effects.
 * Just spine + vertebrae for maximum performance.
 */

class Segment {
    constructor(x, y, len) {
        this.x = x;
        this.y = y;
        this.len = len;
        this.angle = 0;
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

        let width, height;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }
        resize();

        let targetX = width / 2, targetY = height / 2;
        let mouseX = targetX, mouseY = targetY;

        const TOTAL = 30;
        const SEG_LEN = 14;
        const segments = Array.from({ length: TOTAL }, () => new Segment(width / 2, height / 2, SEG_LEN));

        const onMouse = (e) => { targetX = e.clientX; targetY = e.clientY; };
        const onTouch = (e) => {
            if (e.touches.length) { targetX = e.touches[0].clientX; targetY = e.touches[0].clientY; }
        };

        window.addEventListener('mousemove', onMouse, { passive: true });
        window.addEventListener('touchmove', onTouch, { passive: true });
        window.addEventListener('resize', resize);

        let raf;

        function bodyW(i) {
            const t = i / TOTAL;
            if (t < 0.08) return 3 + t / 0.08 * 15;
            if (t < 0.15) return 18;
            if (t < 0.55) return 18 - (t - 0.15) / 0.4 * 4;
            return 14 * Math.pow(1 - (t - 0.55) / 0.45, 1.5);
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);

            mouseX += (targetX - mouseX) * 0.12;
            mouseY += (targetY - mouseY) * 0.12;

            // IK solve
            segments[0].follow(mouseX, mouseY);
            for (let i = 1; i < TOTAL; i++) segments[i].follow(segments[i - 1].x, segments[i - 1].y);

            // Body silhouette
            ctx.beginPath();
            for (let i = 0; i < TOTAL; i++) {
                const s = segments[i], w = bodyW(i);
                const px = s.x + Math.cos(s.angle + 1.5708) * w;
                const py = s.y + Math.sin(s.angle + 1.5708) * w;
                i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
            }
            for (let i = TOTAL - 1; i >= 0; i--) {
                const s = segments[i], w = bodyW(i);
                ctx.lineTo(s.x + Math.cos(s.angle - 1.5708) * w, s.y + Math.sin(s.angle - 1.5708) * w);
            }
            ctx.closePath();
            ctx.fillStyle = 'rgba(139, 92, 246, 0.025)';
            ctx.fill();

            // Spine
            ctx.beginPath();
            ctx.moveTo(segments[0].endX(), segments[0].endY());
            for (let i = 0; i < TOTAL; i++) ctx.lineTo(segments[i].x, segments[i].y);
            ctx.strokeStyle = 'rgba(200, 180, 255, 0.4)';
            ctx.lineWidth = 2.5;
            ctx.lineCap = 'round';
            ctx.stroke();

            // Vertebrae dots — every 4th
            for (let i = 0; i < TOTAL; i += 4) {
                const t = i / TOTAL;
                ctx.beginPath();
                ctx.arc(segments[i].x, segments[i].y, 1.5 + (1 - t) * 1.5, 0, 6.2832);
                ctx.fillStyle = `rgba(255, 255, 255, ${0.25 + (1 - t) * 0.3})`;
                ctx.fill();
            }

            // Head
            const head = segments[0];
            const hx = head.endX(), hy = head.endY();
            ctx.save();
            ctx.translate(hx, hy);
            ctx.rotate(head.angle);
            ctx.beginPath();
            ctx.ellipse(0, 0, 8, 5.5, 0, 0, 6.2832);
            ctx.fillStyle = 'rgba(220, 210, 255, 0.6)';
            ctx.fill();

            // Eyes
            ctx.fillStyle = 'rgba(6, 182, 212, 0.9)';
            ctx.beginPath(); ctx.arc(2, -4, 2, 0, 6.2832); ctx.fill();
            ctx.beginPath(); ctx.arc(2, 4, 2, 0, 6.2832); ctx.fill();
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
                top: 0, left: 0,
                width: '100%', height: '100%',
                pointerEvents: 'none',
                zIndex: 1,
                background: '#050507',
            }}
        />
    );
}
