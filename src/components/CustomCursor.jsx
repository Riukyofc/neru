import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        const onMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
        };

        const animate = () => {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px) scale(${hovering ? 1.5 : 1})`;
            requestAnimationFrame(animate);
        };

        const onEnter = () => setHovering(true);
        const onLeave = () => setHovering(false);

        document.addEventListener('mousemove', onMove);
        const links = document.querySelectorAll('a, button, .btn, .nav-link, .product-card, .card');
        links.forEach(el => {
            el.addEventListener('mouseenter', onEnter);
            el.addEventListener('mouseleave', onLeave);
        });

        const raf = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', onMove);
            links.forEach(el => {
                el.removeEventListener('mouseenter', onEnter);
                el.removeEventListener('mouseleave', onLeave);
            });
            cancelAnimationFrame(raf);
        };
    }, [hovering]);

    // Hide on touch devices
    const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window);
    if (isTouchDevice) return null;

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className={`cursor-ring ${hovering ? 'hovering' : ''}`} />
        </>
    );
}
