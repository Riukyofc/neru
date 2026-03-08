import ScrollReveal from '../components/ScrollReveal';
import './Catalog.css';

const DISCORD = 'https://discord.gg/m7v9dxNv';

const categories = [
    {
        icon: '🚀',
        title: 'Landing Pages',
        products: [
            {
                title: 'Lançamento de Infoprodutos',
                desc: 'Página de vendas agressiva com prova social, cronômetros de escassez e integração direta com gateways de pagamento.',
            },
            {
                title: 'Captação B2B',
                desc: 'Focada em agências de marketing, com formulários dinâmicos integrados a CRMs e disparos automáticos de WhatsApp.',
            },
            {
                title: 'Serviços de TI',
                desc: 'Design limpo e corporativo para segurança da informação, com calculadoras de orçamento embutidas.',
            },
            {
                title: 'Renovação Urbana',
                desc: 'Estrutura visual focada em transparência, com galerias "antes e depois" e metas do projeto.',
            },
            {
                title: 'Link na Bio Premium',
                desc: 'Micro-site ultra-rápido para executivos e empresas consolidarem redes, catálogos e contatos profissionalmente.',
            },
        ],
    },
    {
        icon: '🏢',
        title: 'Sites Institucionais',
        products: [
            {
                title: 'Portal de Cibersegurança',
                desc: 'Site dark mode com animações high-tech, transmitindo autoridade para empresas de TI e segurança.',
            },
            {
                title: 'Portal de Smart City',
                desc: 'Site institucional robusto para iniciativas públicas com desenvolvimento regional e serviços ao cidadão.',
            },
            {
                title: 'Portfólio para Agências',
                desc: 'Site focado em cases de sucesso, com atualização de projetos, métricas e integração do Instagram.',
            },
            {
                title: 'Consultorias e Clínicas',
                desc: 'Focado em serviços com marcação de consultas sincronizada com Google Calendar.',
            },
            {
                title: 'Portal de Notícias Local',
                desc: 'Estrutura otimizada para SEO e carregamento rápido, com monetização por banners publicitários.',
            },
        ],
    },
    {
        icon: '⚙️',
        title: 'Sistemas Web (SaaS & Dashboards)',
        products: [
            {
                title: 'Dashboard de Redes e Helpdesk',
                desc: 'Painel NOC para empresas de TI acompanharem servidores, chamados e inventário de máquinas.',
            },
            {
                title: 'CRM de Vendas com Automação',
                desc: 'Gestão de funil de vendas rastreando o contato do primeiro clique ao fechamento.',
            },
            {
                title: 'Painel de Eficiência Energética',
                desc: 'Dashboard para monitorar captação de energia renovável, consumo e economia em gráficos detalhados.',
            },
            {
                title: 'Gestão de Obras e Projetos',
                desc: 'Acompanhamento de cronogramas, alocação de recursos e relatórios diários de engenharia.',
            },
            {
                title: 'Boilerplate SaaS',
                desc: 'Estrutura de código inicial com login, planos de assinatura e banco de dados configurado para startups.',
            },
        ],
    },
    {
        icon: '🛒',
        title: 'E-Commerce',
        products: [
            {
                title: 'E-commerce Headless de Alta Performance',
                desc: 'Loja com Next.js separada do admin, garantindo carregamento instantâneo e escalável.',
            },
            {
                title: 'Plataforma B2B para Equipamentos',
                desc: 'Loja atacado com tabelas de preços progressivos, cotação de frete complexa e faturamento por boleto.',
            },
            {
                title: 'Loja de Produtos Digitais',
                desc: 'Plataforma automatizada onde o download ou acesso ao repositório é liberado após pagamento.',
            },
            {
                title: 'Marketplace Regional',
                desc: 'E-commerce multivendedor para lojistas de uma mesma cidade exporem produtos em um único endereço.',
            },
            {
                title: 'E-commerce de Assinatura',
                desc: 'Estrutura para pagamentos recorrentes — caixas mensais ou serviços de manutenção contínua.',
            },
        ],
    },
];

const DiscordIcon = () => (
    <svg viewBox="0 0 24 18" fill="currentColor">
        <path d="M20.317 1.492a19.793 19.793 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 1.492.07.07 0 0 0 3.644 1.52C.533 6.093-.32 10.555.099 14.961a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.02z" />
    </svg>
);

export default function SistemasWeb() {
    return (
        <>
            <ScrollReveal />

            <section className="page-hero">
                <div className="container">
                    <span className="section-label fade-in">Sistemas Web</span>
                    <h1 className="fade-in">
                        Soluções <span className="text-gradient">Web Completas</span>
                    </h1>
                    <p className="page-hero-desc fade-in">
                        Landing pages, sites institucionais, dashboards SaaS e
                        e-commerce prontos para impulsionar seu negócio.
                    </p>
                </div>
            </section>

            <section>
                <div className="container">
                    {categories.map((cat, ci) => (
                        <div key={cat.title} className="catalog-category fade-in" style={{ transitionDelay: `${ci * 0.05}s` }}>
                            <div className="category-header">
                                <span className="category-icon">{cat.icon}</span>
                                <h2 className="category-title">{cat.title}</h2>
                            </div>
                            <div className="product-grid">
                                {cat.products.map((p, pi) => (
                                    <div
                                        key={p.title}
                                        className="product-card fade-in"
                                        style={{ transitionDelay: `${pi * 0.05}s` }}
                                    >
                                        <h3 className="product-card-title">{p.title}</h3>
                                        <p className="product-card-desc">{p.desc}</p>
                                        <a
                                            href={DISCORD}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="product-card-cta"
                                        >
                                            <DiscordIcon /> Solicitar
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
