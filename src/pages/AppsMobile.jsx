import ScrollReveal from '../components/ScrollReveal';
import './Catalog.css';

const DISCORD = 'https://discord.gg/m7v9dxNv';

const categories = [
    {
        icon: '🚀',
        title: 'E-commerce, Marketing Digital e Automação',
        products: [
            {
                title: 'E-commerce Headless (Next.js/Node.js)',
                desc: 'Loja virtual ultra-rápida com painel admin independente. Contrato de 5 meses com integração de gateways e otimização SEO.',
            },
            {
                title: 'SaaS de Automação de Marketing (CRM)',
                desc: 'Captura de leads, funis de venda e campanhas automatizadas (e-mail e mensagens). Pronto para White-label.',
            },
            {
                title: 'Painel de Gestão de Afiliados',
                desc: 'Plataforma para gerir comissões, links de rastreio (tracking) e pagamentos a influenciadores.',
            },
            {
                title: 'Checkout de Alta Conversão',
                desc: 'Aplicação focada na etapa de pagamento com upsell a um clique, pronta para integrar em qualquer site.',
            },
            {
                title: 'Dashboard de Tráfego e Vendas',
                desc: 'Painel unificando dados do Meta Ads, Google Ads e vendas da loja com relatórios visuais claros.',
            },
        ],
    },
    {
        icon: '🛡️',
        title: 'Segurança, TI e Infraestrutura',
        products: [
            {
                title: 'Dashboard de Monitorização (TI)',
                desc: 'Painel para acompanhar saúde dos servidores, uptime e alertas de inatividade em tempo real.',
            },
            {
                title: 'Gestão de Acessos e Identidade (IAM)',
                desc: 'Controle de permissões com registos de auditoria detalhados e autenticação de dois fatores (2FA).',
            },
            {
                title: 'Portal de Helpdesk e Tickets',
                desc: 'Suporte técnico com chat embutido, base de conhecimento e atribuição automática de tarefas.',
            },
            {
                title: 'Painel de Câmaras e Alarmes',
                desc: 'Interface centralizada para feeds de vídeo e estado de sensores de segurança.',
            },
        ],
    },
    {
        icon: '🌍',
        title: 'Sustentabilidade, Gestão de Energia',
        products: [
            {
                title: 'Monitorização de Energia Renovável',
                desc: 'Painel premium para acompanhar geração solar, consumos e eficiência energética via API.',
            },
            {
                title: 'Gestão de Obras e Renovação Urbana',
                desc: 'Plataforma para gerir orçamentos, prazos e progresso diário de projetos de reabilitação.',
            },
            {
                title: 'Marketplace de Comércio Local',
                desc: 'Portal para dinamizar a economia regional — lojistas anunciam produtos num único endereço web.',
            },
        ],
    },
    {
        icon: '💼',
        title: 'Plataformas B2B e Gestão Empresarial',
        products: [
            {
                title: 'ERP Modular para PMEs',
                desc: 'Faturação, controle de stock e gestão financeira com adaptação de regras fiscais locais.',
            },
            {
                title: 'Plataforma EAD (LMS)',
                desc: 'Venda e alojamento de cursos com área de membros, proteção de downloads e certificados.',
            },
            {
                title: 'Agendamento Multi-Profissionais',
                desc: 'Gestão de múltiplos calendários, disponibilidade de salas e pagamentos antecipados para clínicas e consultorias.',
            },
            {
                title: 'Portal Imobiliário com CRM',
                desc: 'Busca de imóveis com mapas interativos e tours virtuais + painel para corretores.',
            },
            {
                title: 'Logística e Gestão de Frotas',
                desc: 'Rastreamento de veículos em tempo real, custos de combustível e planejamento de rotas.',
            },
            {
                title: 'SaaS de Subscrições',
                desc: 'Código pronto para negócios de caixas mensais com faturação recorrente e controle de envios.',
            },
            {
                title: 'Gestão de Clínicas Médicas',
                desc: 'Prontuário eletrônico, histórico de consultas, prescrições digitais e fluxo de caixa.',
            },
            {
                title: 'Recrutamento e Seleção (ATS)',
                desc: 'Portal de vagas com triagem de currículos, agendamento de entrevistas e avaliação de candidatos.',
            },
        ],
    },
];

const DiscordIcon = () => (
    <svg viewBox="0 0 24 18" fill="currentColor">
        <path d="M20.317 1.492a19.793 19.793 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 1.492.07.07 0 0 0 3.644 1.52C.533 6.093-.32 10.555.099 14.961a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.02z" />
    </svg>
);

export default function AppsMobile() {
    return (
        <>
            <ScrollReveal />

            <section className="page-hero">
                <div className="container">
                    <span className="section-label fade-in">Apps & Mobile</span>
                    <h1 className="fade-in">
                        Aplicações <span className="text-gradient">Mobile & SaaS</span>
                    </h1>
                    <p className="page-hero-desc fade-in">
                        Soluções completas de e-commerce, automação, segurança e gestão empresarial
                        prontas para escalar o seu negócio.
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
