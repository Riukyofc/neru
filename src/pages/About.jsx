import ScrollReveal from '../components/ScrollReveal';
import './About.css';

const team = [
    {
        name: 'Nero',
        role: 'Co-Fundador & Developer',
        desc: 'Apaixonado por código limpo e arquitetura de sistemas. Transforma ideias complexas em soluções elegantes.',
        gradient: 'linear-gradient(135deg, #2a2a30, #404048)',
        initial: 'N',
    },
    {
        name: 'Riuky',
        role: 'Co-Fundador & Designer',
        desc: 'Especialista em design de interfaces premium. Cada pixel é pensado para converter e impressionar.',
        gradient: 'linear-gradient(135deg, #1a1a20, #333338)',
        initial: 'R',
    },
];

const values = [
    {
        icon: '💎',
        title: 'Qualidade Premium',
        desc: 'Não entregamos projetos genéricos. Cada trabalho é tratado como uma obra de arte.',
    },
    {
        icon: '⚡',
        title: 'Performance',
        desc: 'Código otimizado, carregamento rápido. Seus usuários merecem a melhor experiência.',
    },
    {
        icon: '🤝',
        title: 'Parceria',
        desc: 'Não somos apenas fornecedores, somos parceiros no crescimento do seu negócio.',
    },
    {
        icon: '🔒',
        title: 'Confiança',
        desc: 'Transparência total. Comunicação constante. Prazos respeitados.',
    },
];

const techStack = [
    'React', 'Next.js', 'Vue.js', 'Node.js',
    'TypeScript', 'PostgreSQL', 'MongoDB', 'Firebase',
    'Tailwind CSS', 'Figma', 'Vercel', 'AWS',
];

export default function About() {
    return (
        <>
            <ScrollReveal />

            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="bg-glow bg-glow-purple" style={{ top: '-20%', left: '30%' }}></div>
                <div className="container">
                    <span className="section-label fade-in">Sobre Nós</span>
                    <h1 className="fade-in">
                        Conheça a equipe <span className="text-gradient">NERO</span>
                    </h1>
                    <p className="page-hero-desc fade-in">
                        Somos uma dupla dinâmica focada em criar soluções digitais
                        que fazem a diferença.
                    </p>
                </div>
            </section>

            {/* === TEAM === */}
            <section>
                <div className="container">
                    <div className="team-grid">
                        {team.map((member, i) => (
                            <div
                                key={member.name}
                                className="team-card fade-in"
                                style={{ transitionDelay: `${i * 0.15}s` }}
                            >
                                <div
                                    className="team-avatar"
                                    style={{ background: member.gradient }}
                                >
                                    <span className="team-initial">{member.initial}</span>
                                    <div className="team-avatar-ring"></div>
                                </div>
                                <div className="team-info">
                                    <h3>{member.name}</h3>
                                    <span className="team-role">{member.role}</span>
                                    <p>{member.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === VALUES === */}
            <section className="section-values">
                <div className="container">
                    <div className="section-header center">
                        <span className="section-label fade-in">Nossos Valores</span>
                        <h2 className="section-title fade-in">
                            O que nos <span className="text-gradient">move</span>
                        </h2>
                    </div>

                    <div className="grid-4">
                        {values.map((value, i) => (
                            <div
                                key={value.title}
                                className="card value-card fade-in"
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                <div className="icon-box">{value.icon}</div>
                                <h4>{value.title}</h4>
                                <p>{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === TECH STACK === */}
            <section>
                <div className="container">
                    <div className="section-header center">
                        <span className="section-label fade-in">Tecnologias</span>
                        <h2 className="section-title fade-in">
                            Nossas <span className="text-gradient">ferramentas</span>
                        </h2>
                        <p className="section-description fade-in">
                            Utilizamos as tecnologias mais modernas do mercado para
                            entregar projetos de ponta.
                        </p>
                    </div>

                    <div className="tech-grid fade-in">
                        {techStack.map((tech) => (
                            <div key={tech} className="tech-item">
                                {tech}
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
                            <h2>Vamos criar algo <span className="text-gradient">incrível juntos</span>?</h2>
                            <p>Entre no nosso Discord e converse diretamente com a equipe.</p>
                            <a
                                href="https://discord.gg/m7v9dxNv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                            >
                                <svg width="20" height="16" viewBox="0 0 24 18" fill="currentColor">
                                    <path d="M20.317 1.492a19.793 19.793 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 1.492.07.07 0 0 0 3.644 1.52C.533 6.093-.32 10.555.099 14.961a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.02z" />
                                </svg>
                                Entrar no Discord
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
