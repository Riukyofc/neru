import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const hoveringRef = useRef(false);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;
        let rafId;

        const onMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
        };

        const animate = () => {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            const scale = hoveringRef.current ? 1.5 : 1;
            ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px) scale(${scale})`;
            rafId = requestAnimationFrame(animate);
        };

        const onEnter = () => {
            hoveringRef.current = true;
            ring.classList.add('hovering');
        };
        const onLeave = () => {
            hoveringRef.current = false;
            ring.classList.remove('hovering');
        };

        // Use event delegation instead of querying all elements
        const onMouseOver = (e) => {
            if (e.target.closest('a, button, .btn, .nav-link, .product-card, .card')) {
                onEnter();
            }
        };
        const onMouseOut = (e) => {
            if (e.target.closest('a, button, .btn, .nav-link, .product-card, .card')) {
                onLeave();
            }
        };

        document.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseover', onMouseOver, { passive: true });
        document.addEventListener('mouseout', onMouseOut, { passive: true });

        rafId = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseover', onMouseOver);
            document.removeEventListener('mouseout', onMouseOut);
            cancelAnimationFrame(rafId);
        };
    }, []); // empty deps — runs once

    // Hide on touch devices
    const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window);
    if (isTouchDevice) return null;

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className="cursor-ring" />
        </>
    );
}
