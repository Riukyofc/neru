import './VideoBackground.css';

/*
 * Lightweight animated background — replaces heavy YouTube iframe.
 * Pure CSS gradient animation, zero JavaScript, zero network requests.
 */

export default function VideoBackground() {
    return (
        <div className="video-bg-wrapper" aria-hidden="true">
            <div className="video-bg-ambient" />
            <div className="video-bg-overlay" />
        </div>
    );
}
