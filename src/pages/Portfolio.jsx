import ScrollReveal from '../components/ScrollReveal';
import './Portfolio.css';

const projects = [
    {
        title: 'TechFlow Dashboard',
        category: 'Sistema Web',
        desc: 'Dashboard analítico completo com métricas em tempo real, gestão de equipe e relatórios automatizados.',
        tags: ['React', 'Node.js', 'PostgreSQL'],
        gradient: 'linear-gradient(135deg, #2a2a2e, #404048)',
    },
    {
        title: 'StartUp X Landing',
        category: 'Landing Page',
        desc: 'Landing page de alta conversão para captação de leads com design moderno e animações impactantes.',
        tags: ['Next.js', 'Framer Motion', 'Vercel'],
        gradient: 'linear-gradient(135deg, #1a1a1e, #333338)',
    },
    {
        title: 'Creative Hub Store',
        category: 'E-Commerce',
        desc: 'Loja online completa com sistema de pagamento integrado, gestão de estoque e painel administrativo.',
        tags: ['React', 'Stripe', 'MongoDB'],
        gradient: 'linear-gradient(135deg, #303035, #1a1a1e)',
    },
    {
        title: 'HealthTrack App',
        category: 'App PWA',
        desc: 'Aplicativo de monitoramento de saúde com integração a wearables e dashboards personalizados.',
        tags: ['React', 'PWA', 'Firebase'],
        gradient: 'linear-gradient(135deg, #222228, #3a3a40)',
    },
    {
        title: 'EduPlatform LMS',
        category: 'Sistema Web',
        desc: 'Plataforma de ensino online com videoaulas, exercícios interativos e certificações automáticas.',
        tags: ['Vue.js', 'Django', 'AWS'],
        gradient: 'linear-gradient(135deg, #383840, #1e1e22)',
    },
    {
        title: 'FinControl ERP',
        category: 'Sistema Web',
        desc: 'ERP completo para gestão financeira com fluxo de caixa, contas a pagar/receber e DRE automatizado.',
        tags: ['React', 'Node.js', 'MySQL'],
        gradient: 'linear-gradient(135deg, #28282e, #404048)',
    },
];

export default function Portfolio() {
    return (
        <>
            <ScrollReveal />

            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="bg-glow bg-glow-cyan" style={{ top: '-20%', right: '10%' }}></div>
                <div className="container">
                    <span className="section-label fade-in">Portfólio</span>
                    <h1 className="fade-in">
                        Projetos que <span className="text-gradient">entregamos</span>
                    </h1>
                    <p className="page-hero-desc fade-in">
                        Uma seleção dos nossos melhores trabalhos. Cada projeto é único e
                        feito sob medida para cada cliente.
                    </p>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="portfolio-grid">
                        {projects.map((project, i) => (
                            <div
                                key={project.title}
                                className="portfolio-card fade-in"
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <div
                                    className="portfolio-thumbnail"
                                    style={{ background: project.gradient }}
                                >
                                    <div className="portfolio-thumbnail-content">
                                        <span className="portfolio-category">{project.category}</span>
                                    </div>
                                </div>
                                <div className="portfolio-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.desc}</p>
                                    <div className="portfolio-tags">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="portfolio-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-cta-banner">
                <div className="container">
                    <div className="cta-banner fade-in">
                        <div className="cta-banner-glow"></div>
                        <div className="cta-banner-content">
                            <h2>Quer um projeto <span className="text-gradient">como esses</span>?</h2>
                            <p>Entre em contato e receba uma proposta personalizada.</p>
                            <a
                                href="https://discord.gg/m7v9dxNv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                            >
                                Solicitar Orçamento
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
