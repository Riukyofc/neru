import './VideoBackground.css';

/*
 * Full-screen YouTube Video Background
 * Uses iframe embed with autoplay, muted, loop, no controls.
 * CSS scales the iframe to cover the entire viewport.
 */

const VIDEO_ID = 'eCHaiEjCDFM';

export default function VideoBackground() {
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
        playlist: VIDEO_ID, // required for loop to work
        playsinline: '1',
        enablejsapi: '1',
        origin: window.location.origin,
    });

    return (
        <div className="video-bg-wrapper" aria-hidden="true">
            <iframe
                className="video-bg-iframe"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?${params.toString()}`}
                title="Background Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen={false}
            />
            <div className="video-bg-overlay" />
        </div>
    );
}
