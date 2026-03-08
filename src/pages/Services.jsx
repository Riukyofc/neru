import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import './Services.css';

const services = [
    {
        icon: '🚀',
        title: 'Landing Pages',
        desc: 'Páginas de conversão otimizadas com design impactante. Ideal para lançamentos, captação de leads e campanhas de marketing.',
        features: ['Design responsivo', 'SEO otimizado', 'Alta conversão', 'Performance A+'],
    },
    {
        icon: '🌐',
        title: 'Sites Institucionais',
        desc: 'Presença digital profissional para sua empresa. Reflete a identidade da sua marca com elegância e funcionalidade.',
        features: ['Design personalizado', 'Painel admin', 'Blog integrado', 'Multilíngue'],
    },
    {
        icon: '⚙️',
        title: 'Sistemas Web',
        desc: 'Soluções sob medida para automatizar e escalar seu negócio. Dashboards, CRMs, ERPs e muito mais.',
        features: ['APIs robustas', 'Dashboard analytics', 'Integrações', 'Escalável'],
    },
    {
        icon: '🛒',
        title: 'E-Commerce',
        desc: 'Lojas online completas e seguras. Checkout otimizado, gestão de estoque e integrações com gateways de pagamento.',
        features: ['Checkout otimizado', 'Gateway de pagamento', 'Gestão de estoque', 'Multi-moeda'],
    },
    {
        icon: '📱',
        title: 'Aplicações PWA',
        desc: 'Web apps que funcionam como apps nativos. Funcionam offline, são rápidos e podem ser instalados diretamente do navegador.',
        features: ['Funciona offline', 'Push notifications', 'Instalável', 'Cross-platform'],
    },
    {
        icon: '🔧',
        title: 'Manutenção & Suporte',
        desc: 'Acompanhamento contínuo para manter seu projeto sempre atualizado, seguro e performando no máximo.',
        features: ['Monitoramento 24/7', 'Backups automáticos', 'Atualizações', 'Suporte prioritário'],
    },
];

const process = [
    {
        step: '01',
        title: 'Briefing',
        desc: 'Entendemos seu negócio, objetivos e público-alvo para criar a estratégia perfeita.',
    },
    {
        step: '02',
        title: 'Design',
        desc: 'Criamos protótipos visuais que capturam a essência da sua marca com design premium.',
    },
    {
        step: '03',
        title: 'Desenvolvimento',
        desc: 'Transformamos o design em código limpo, performático e preparado para escalar.',
    },
    {
        step: '04',
        title: 'Entrega & Suporte',
        desc: 'Deploy, otimizações finais e suporte contínuo para garantir resultados duradouros.',
    },
];

export default function Services() {
    return (
        <>
            <ScrollReveal />

            {/* === HERO === */}
            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="bg-glow bg-glow-purple" style={{ top: '-20%', left: '20%' }}></div>
                <div className="container">
                    <span className="section-label fade-in">Nossos Serviços</span>
                    <h1 className="fade-in">
                        Soluções digitais <span className="text-gradient">completas</span>
                    </h1>
                    <p className="page-hero-desc fade-in">
                        Do conceito à entrega, cuidamos de cada detalhe para que seu projeto
                        se destaque no mercado digital.
                    </p>
                </div>
            </section>

            {/* === SERVICES GRID === */}
            <section>
                <div className="container">
                    <div className="grid-3">
                        {services.map((service, i) => (
                            <div
                                key={service.title}
                                className="card service-detail-card fade-in"
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <div className="icon-box">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <ul className="service-features">
                                    {service.features.map((f) => (
                                        <li key={f}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === PROCESS === */}
            <section className="section-process">
                <div className="container">
                    <div className="section-header center">
                        <span className="section-label fade-in">Como Funciona</span>
                        <h2 className="section-title fade-in">
                            Nosso <span className="text-gradient">processo</span>
                        </h2>
                        <p className="section-description fade-in">
                            Um fluxo validado e otimizado para entregar projetos com
                            excelência e dentro do prazo.
                        </p>
                    </div>

                    <div className="process-timeline">
                        {process.map((item, i) => (
                            <div
                                key={item.step}
                                className="process-step fade-in"
                                style={{ transitionDelay: `${i * 0.15}s` }}
                            >
                                <div className="process-number">{item.step}</div>
                                <div className="process-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === CTA === */}
            <section className="section-cta-banner">
                <div className="container">
                    <div className="cta-banner fade-in">
                        <div className="cta-banner-glow"></div>
                        <div className="cta-banner-content">
                            <h2>Tem um projeto em mente?</h2>
                            <p>Entre em contato e vamos transformar sua ideia em realidade.</p>
                            <a
                                href="https://discord.gg/m7v9dxNv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                            >
                                Falar no Discord
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
