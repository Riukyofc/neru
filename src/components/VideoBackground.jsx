import { useState, useCallback } from 'react';
import './VideoBackground.css';

/*
 * Full-screen YouTube Video Background — Lazy-loaded
 * Shows a static dark background until user scrolls near it,
 * then loads the YouTube iframe on demand to save ~2MB of JS.
 */

const VIDEO_ID = 'eCHaiEjCDFM';

export default function VideoBackground() {
    const [loaded, setLoaded] = useState(false);

    const wrapperRef = useCallback((node) => {
        if (!node) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoaded(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' }
        );
        observer.observe(node);
    }, []);

    const params = new URLSearchParams({
        autoplay: '1',
        mute: '1',
        loop: '1',
        controls: '0',
        showinfo: '0',
        modestbranding: '1',
        rel: '0',
        iv_load_policy: '3',
        disablekb: '1',
        fs: '0',
        playlist: VIDEO_ID,
        playsinline: '1',
    });

    return (
        <div className="video-bg-wrapper" aria-hidden="true" ref={wrapperRef}>
            {loaded && (
                <iframe
                    className="video-bg-iframe"
                    src={`https://www.youtube.com/embed/${VIDEO_ID}?${params.toString()}`}
                    title="Background Video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen={false}
                    loading="lazy"
                />
            )}
            <div className="video-bg-overlay" />
        </div>
    );
}
