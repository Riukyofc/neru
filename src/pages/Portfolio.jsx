import ScrollReveal from '../components/ScrollReveal';
import './Portfolio.css';

const stackData = [
    {
        icon: '⚛',
        title: 'Front-End',
        items: ['React.js', 'Next.js', 'HTML5 / CSS3', 'Tailwind CSS'],
    },
    {
        icon: '💻',
        title: 'Linguagens',
        items: ['JavaScript', 'TypeScript', 'Lua', 'Python'],
    },
    {
        icon: '🎮',
        title: 'FiveM Dev',
        items: ['Lua Scripting', 'NUI (HTML/JS)', 'ox_lib / ESX', 'Mapeamento'],
    },
    {
        icon: '🛠',
        title: 'Ferramentas',
        items: ['Figma', 'Git / GitHub', 'VS Code', 'Vercel'],
    },
];

const projects = [
    {
        icon: '☕',
        title: 'Coffee Aura',
        category: 'LANDING PAGE',
        categoryClass: 'category-landing',
        desc: 'Página de alta conversão para uma cafeteria premium. Foco em semântica HTML, performance de carregamento e experiência mobile-first impecável.',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        gradient: 'linear-gradient(135deg, #1a0e00, #2a1a08)',
        demo: 'https://riukyofc.github.io/Coffe-aura/',
        code: 'https://github.com/riukyofc/Coffe-aura',
    },
    {
        icon: '🏢',
        title: 'LuminaCorp',
        category: 'CORPORATIVO',
        categoryClass: 'category-corporate',
        desc: 'Plataforma corporativa moderna com animações fluídas, validação de formulários em tempo real e arquitetura focada em conversão.',
        tags: ['React', 'CSS Modules', 'Framer Motion'],
        gradient: 'linear-gradient(135deg, #0a0a18, #141428)',
        code: '#',
    },
    {
        icon: '🎨',
        title: 'DU7 Interface',
        category: 'UI/UX DESIGN',
        categoryClass: 'category-interface',
        desc: 'Interface moderna e responsiva focada em experiência do usuário e design system consistente.',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        gradient: 'linear-gradient(135deg, #10061a, #1e0e2e)',
        demo: 'https://riukyofc.github.io/du7/',
        code: 'https://github.com/riukyofc/du7',
    },
    {
        icon: '🍽',
        title: 'Restaurante Garcia',
        category: 'FOOD DELIVERY',
        categoryClass: 'category-food',
        desc: 'Plataforma de pedidos online com cardápio interativo, carrinho de compras e integração direta com WhatsApp.',
        tags: ['React', 'Vercel', 'WhatsApp API'],
        gradient: 'linear-gradient(135deg, #1a0800, #280e00)',
        demo: 'https://restaurantegarcia.vercel.app/',
        code: 'https://github.com/Riukyofc/rayane-food',
    },
];

const fivemData = [
    {
        icon: '🎬',
        title: 'Crias RJ: Showcase',
        desc: 'Trailer oficial demonstrando a ambientação imersiva, viaturas customizadas e sistemas exclusivos do servidor "Crias RJ".',
        link: 'https://youtu.be/FyHB9QTXIEw',
        linkText: '▶ Assistir Trailer',
    },
    {
        icon: '🕹',
        title: 'Crias RJ: Gameplay',
        desc: 'Testes de sistemas avançados de física, combate e otimização para roleplay de alta performance.',
        link: 'https://youtu.be/FTjKFTQyfHA',
        linkText: '▶ Ver Gameplay',
    },
];

export default function Portfolio() {
    return (
        <>
            <ScrollReveal />

            {/* Ambient Glow */}
            <div className="pf-glow pf-glow-left" />
            <div className="pf-glow pf-glow-right" />

            {/* ── Hero ── */}
            <section className="portfolio-hero">
                <div className="container">
                    <div className="hero-badge fade-in">
                        <span className="dot" />
                        Disponível para novos projetos
                    </div>
                    <h1 className="fade-in">
                        Software Engineer<br />Front-End Specialist.
                    </h1>
                    <p className="hero-desc fade-in">
                        Construindo interfaces digitais excepcionais com foco em performance,
                        acessibilidade e experiência do usuário. Transformo complexidade em simplicidade.
                    </p>
                    <div className="hero-buttons fade-in">
                        <a href="#projects" className="btn-white">Ver Projetos ↓</a>
                        <a
                            href="https://github.com/riukyofc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost"
                        >
                            GitHub →
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Stack ── */}
            <section className="pf-section" id="stack">
                <div className="container">
                    <div className="pf-section-header fade-in">
                        <div>
                            <h2>Stack Tecnológica</h2>
                            <p>Ferramentas modernas para soluções web e imersivas.</p>
                        </div>
                    </div>
                    <div className="stack-grid">
                        {stackData.map((stack, i) => (
                            <div
                                key={stack.title}
                                className="stack-card fade-in"
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <h3>
                                    <span className="stack-icon">{stack.icon}</span>
                                    {stack.title}
                                </h3>
                                <ul>
                                    {stack.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Projects ── */}
            <section className="pf-section" id="projects">
                <div className="container">
                    <div className="pf-section-header fade-in">
                        <div>
                            <h2>Desenvolvimento Web</h2>
                            <p>Aplicações Fullstack e Landing Pages de alta conversão.</p>
                        </div>
                        <a
                            href="https://github.com/riukyofc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pf-section-link"
                        >
                            Ver todos os repositórios →
                        </a>
                    </div>
                    <div className="projects-grid">
                        {projects.map((project, i) => (
                            <div
                                key={project.title}
                                className="project-card fade-in"
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <div
                                    className="project-card-thumb"
                                    style={{ background: project.gradient }}
                                >
                                    <span className="thumb-icon">{project.icon}</span>
                                </div>
                                <div className="project-card-body">
                                    <span className={`project-category ${project.categoryClass}`}>
                                        {project.category}
                                    </span>
                                    <h3>{project.title}</h3>
                                    <p>{project.desc}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="project-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link"
                                            >
                                                🔗 Live Demo
                                            </a>
                                        )}
                                        <a
                                            href={project.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                        >
                                            💻 Código
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FiveM ── */}
            <section className="pf-section">
                <div className="container">
                    <div className="pf-section-header fade-in">
                        <div>
                            <h2>FiveM &amp; Modding</h2>
                            <p>Otimização, mapeamento e scripting para servidores GTA RP.</p>
                        </div>
                    </div>
                    <div className="fivem-grid">
                        {fivemData.map((item, i) => (
                            <div
                                key={item.title}
                                className="fivem-card fade-in"
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <span className="fivem-icon">{item.icon}</span>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="fivem-link"
                                >
                                    {item.linkText}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Contact CTA ── */}
            <section className="pf-contact">
                <div className="container">
                    <h2 className="fade-in">Vamos construir algo juntos?</h2>
                    <p className="fade-in">
                        Estou sempre aberto a discutir novos projetos, ideias criativas ou
                        oportunidades de fazer parte de suas visões.
                    </p>
                    <a
                        href="https://wa.me/5598982715727"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-btn fade-in"
                    >
                        <span className="wa-icon">📱</span>
                        (98) 98271-5727
                    </a>
                </div>
            </section>

            {/* ── Footer ── */}
            <div className="pf-footer">
                <p>© 2026 Riuky.dev. All rights reserved.</p>
            </div>
        </>
    );
}
