import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useLang } from '../i18n';
import ScrollReveal from '../components/ScrollReveal';
import './Home.css';

const serviceIcons = ['🚀', '🌐', '⚙️', '🛒'];
const serviceTitles = { pt: ['Landing Pages', 'Sites Institucionais', 'Sistemas Web', 'E-Commerce'], en: ['Landing Pages', 'Institutional Sites', 'Web Systems', 'E-Commerce'] };
const serviceDescs = {
    pt: ['Páginas de alta conversão com design impactante e performance otimizada.', 'Presença digital profissional que reflete a identidade da sua marca.', 'Dashboards, CRMs e ERPs sob medida para automatizar seu negócio.', 'Lojas online completas, seguras e prontas para vender.'],
    en: ['High-conversion pages with impactful design and optimized performance.', 'Professional digital presence that reflects your brand identity.', 'Custom dashboards, CRMs and ERPs to automate your business.', 'Complete, secure online stores ready to sell.'],
};

const stepIcons = ['💬', '📋', '⚡', '🚀'];

const testimonials = [
    { name: 'Lucas S.', role: 'CEO, TechFlow', text: { pt: 'A NERO entregou um sistema que superou todas as expectativas. O design é incrível e a performance é absurda.', en: 'NERO delivered a system that exceeded all expectations. The design is incredible and the performance is outstanding.' }, avatar: 'L' },
    { name: 'Marina R.', role: 'Diretora, Creative Hub', text: { pt: 'Nosso site ficou sensacional. Recebemos elogios de todos os clientes. Recomendo sem pensar duas vezes.', en: 'Our site turned out amazing. We received compliments from all our clients. I recommend without a second thought.' }, avatar: 'M' },
    { name: 'Pedro H.', role: 'Fundador, StartUp X', text: { pt: 'Profissionalismo de outro nível. Entregaram antes do prazo e o resultado é impecável. Parceria que veio pra ficar.', en: 'Next-level professionalism. They delivered ahead of schedule and the result is flawless. A partnership that\'s here to stay.' }, avatar: 'P' },
];

const statsData = [
    { target: 50, suffix: '+' },
    { target: 98, suffix: '%' },
    { target: 2, suffix: '+' },
    { target: 24, suffix: 'h' },
];

/* Animated counter */
function AnimatedStat({ target, suffix, label }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const counted = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !counted.current) {
                    counted.current = true;
                    const duration = 1800;
                    const start = Date.now();
                    const tick = () => {
                        const elapsed = Date.now() - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.round(eased * target));
                        if (progress < 1) requestAnimationFrame(tick);
                    };
                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={ref} className="stat-item">
            <span className="stat-number">{count}{suffix}</span>
            <span className="stat-label">{label}</span>
        </div>
    );
}

export default function Home() {
    const { lang, t } = useLang();
    const statLabels = [t.stats.s1, t.stats.s2, t.stats.s3, t.stats.s4];

    return (
        <>
            <ScrollReveal />

            {/* === HERO === */}
            <section className="hero">
                <div className="hero-bg"><div className="bg-grid"></div></div>
                <div className="container hero-content">
                    <div className="hero-badge fade-in">
                        <span className="pulse-dot"></span>
                        {t.hero.badge}
                    </div>
                    <h1 className="hero-title fade-in">
                        {t.hero.title1}<br />
                        <span className="text-gradient">{t.hero.title2}</span>
                    </h1>
                    <p className="hero-subtitle fade-in">{t.hero.subtitle}</p>
                    <div className="hero-actions fade-in">
                        <a href="https://discord.gg/m7v9dxNv" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                            <svg width="20" height="16" viewBox="0 0 24 18" fill="currentColor"><path d="M20.317 1.492a19.793 19.793 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 1.492.07.07 0 0 0 3.644 1.52C.533 6.093-.32 10.555.099 14.961a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.02z" /></svg>
                            {t.hero.cta1}
                        </a>
                        <Link to="/portfolio" className="btn btn-secondary btn-lg">
                            {t.hero.cta2}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                    <div className="hero-stats fade-in">
                        {statsData.map((stat, i) => (
                            <AnimatedStat key={i} target={stat.target} suffix={stat.suffix} label={statLabels[i]} />
                        ))}
                    </div>
                </div>
                <div className="hero-scroll-indicator"><div className="scroll-line"></div></div>
            </section>

            {/* === SERVICES PREVIEW === */}
            <section className="section-services-preview">
                <div className="container">
                    <div className="section-header center">
                        <span className="section-label fade-in">{t.services.label}</span>
                        <h2 className="section-title fade-in">{t.services.title} <span className="text-gradient">{t.services.titleGrad}</span></h2>
                        <p className="section-description fade-in">{t.services.desc}</p>
                    </div>
                    <div className="grid-4">
                        {serviceIcons.map((icon, i) => (
                            <div key={i} className="card service-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                                <div className="icon-box">{icon}</div>
                                <h3>{serviceTitles[lang][i]}</h3>
                                <p>{serviceDescs[lang][i]}</p>
                            </div>
                        ))}
                    </div>
                    <div className="section-cta fade-in">
                        <Link to="/servicos" className="btn btn-outline">
                            {t.services.cta}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* === COMO FUNCIONA === */}
            <section className="section-process">
                <div className="container">
                    <div className="section-header center">
                        <span className="section-label fade-in">{t.process.label}</span>
                        <h2 className="section-title fade-in">{t.process.title} <span className="text-gradient">{t.process.titleGrad}</span></h2>
                        <p className="section-description fade-in">{t.process.desc}</p>
                    </div>
                    <div className="process-grid">
                        {t.process.steps.map((step, i) => (
                            <div key={i} className="process-step fade-in" style={{ transitionDelay: `${i * 0.12}s` }}>
                                <div className="process-num">{String(i + 1).padStart(2, '0')}</div>
                                <div className="process-icon">{stepIcons[i]}</div>
                                <h3 className="process-title">{step.title}</h3>
                                <p className="process-desc">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === TESTIMONIALS === */}
            <section className="section-testimonials">
                <div className="container">
                    <div className="section-header center">
                        <span className="section-label fade-in">{t.testimonials.label}</span>
                        <h2 className="section-title fade-in">{t.testimonials.title} <span className="text-gradient">{t.testimonials.titleGrad}</span></h2>
                    </div>
                    <div className="grid-3">
                        {testimonials.map((tm, i) => (
                            <div key={tm.name} className="card testimonial-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
                                <div className="testimonial-stars">★★★★★</div>
                                <p className="testimonial-text">"{tm.text[lang]}"</p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar">{tm.avatar}</div>
                                    <div><strong>{tm.name}</strong><span>{tm.role}</span></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === CTA BANNER === */}
            <section className="section-cta-banner">
                <div className="container">
                    <div className="cta-banner fade-in">
                        <div className="cta-banner-content">
                            <h2>{t.cta.title1} <span className="text-gradient">{t.cta.titleGrad}</span>?</h2>
                            <p>{t.cta.desc}</p>
                            <a href="https://discord.gg/m7v9dxNv" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                                <svg width="20" height="16" viewBox="0 0 24 18" fill="currentColor"><path d="M20.317 1.492a19.793 19.793 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 1.492.07.07 0 0 0 3.644 1.52C.533 6.093-.32 10.555.099 14.961a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.02z" /></svg>
                                {t.cta.btn}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
