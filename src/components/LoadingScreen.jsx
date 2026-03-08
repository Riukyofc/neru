import { useState, useEffect } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [hiding, setHiding] = useState(false);

    useEffect(() => {
        const duration = 2000;
        const start = Date.now();

        const tick = () => {
            const elapsed = Date.now() - start;
            const pct = Math.min((elapsed / duration) * 100, 100);
            setProgress(pct);

            if (pct < 100) {
                requestAnimationFrame(tick);
            } else {
                setTimeout(() => setHiding(true), 300);
                setTimeout(() => onComplete(), 800);
            }
        };

        requestAnimationFrame(tick);
    }, [onComplete]);

    return (
        <div className={`loading-screen ${hiding ? 'fade-out' : ''}`}>
            <div className="loading-content">
                <div className="loading-logo">
                    <span className="loading-logo-text">NERO</span>
                    <span className="loading-logo-dot">.</span>
                </div>
                <div className="loading-bar-track">
                    <div
                        className="loading-bar-fill"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <span className="loading-percent">{Math.round(progress)}%</span>
            </div>
        </div>
    );
}
