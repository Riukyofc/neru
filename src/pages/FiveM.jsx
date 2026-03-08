import ScrollReveal from '../components/ScrollReveal';
import './Catalog.css';

const DISCORD = 'https://discord.gg/m7v9dxNv';

const categories = [
    {
        icon: '📱',
        title: 'Sistemas Core & Essenciais',
        products: [
            {
                title: 'Smartphone RP Avançado',
                desc: 'Celular in-game completo com apps em React/Vue — WhatsApp simulado, Instagram com feed de fotos reais do jogo, app de Banco com PIX, OLX para venda de carros usados.',
            },
            {
                title: 'Inventário Drag & Drop Moderno',
                desc: 'Interface estilo Tarkov/Rust com sistema de peso, slots de atalho numérico, separação de itens, blur de fundo e crafting integrado na mesma tela.',
            },
            {
                title: 'HUD Minimalista',
                desc: 'Indicadores de vida, colete, fome e sede com design limpo (circular ou barras lineares), velocímetro moderno e customização de cores/posição via painel.',
            },
            {
                title: 'Menu de Pausa / Dashboard',
                desc: 'Substitui o ESC padrão por um dashboard em tela cheia com estatísticas do personagem, regras do servidor, links para Discord e loja VIP.',
            },
            {
                title: 'Sistema de Banco e ATM',
                desc: 'Interface realista para transferências, histórico em tempo real, empréstimos com juros automáticos e pagamento de multas.',
            },
        ],
    },
    {
        icon: '🚓',
        title: 'Sistemas para Corporações',
        products: [
            {
                title: 'MDT Policial',
                desc: 'Tablet robusto para policiais consultarem fichas criminais, mandados de busca, registrarem boletins de ocorrência e verem viaturas em mapa ao vivo.',
            },
            {
                title: 'Tablet Médico / EMS',
                desc: 'Sistema para médicos visualizarem histórico de ferimentos, prescreverem tratamentos e gerenciarem estoque da farmácia hospitalar.',
            },
            {
                title: 'Painel de Mecânica (Tuning)',
                desc: 'Interface estilo NFS para oficinas — paleta RGB (Color Picker) para pintura/neon, carrinho de compras com valor total e categorias definidas.',
            },
            {
                title: 'Agência de Empregos Interativa',
                desc: 'Tela com empregos legais disponíveis, descrições em vídeo/imagens, salário base e botão "Aceitar Contrato".',
            },
            {
                title: 'Concessionária com Test-Drive 3D',
                desc: 'Painel com categorias (Esportivos, SUVs, Motos), stats em gráficos de barra e câmera rotativa ao redor do carro antes da compra.',
            },
        ],
    },
    {
        icon: '🕵️',
        title: 'Sistemas para Ilegal & Facções',
        products: [
            {
                title: 'Dark Web / Mercado Negro',
                desc: 'Tablet "hacker" criptografado para compra de armas, lavagem de dinheiro e contratação de serviços ilegais com criptomoedas do jogo.',
            },
            {
                title: 'Painel de Gestão de Facções',
                desc: 'Interface para líderes convidarem membros, promoverem cargos, verem saldo do baú e gerenciarem o arsenal da facção.',
            },
            {
                title: 'Minigames de Hacking (NUI)',
                desc: 'Scripts interativos para roubos — quebra-cabeças de memória, ligar fios ou decodificar senhas sob pressão de tempo.',
            },
            {
                title: 'Sistema de Crafting Ilegal',
                desc: 'Mesa de trabalho para juntar peças (mola, cano, gatilho) e fabricar armas, com barra de progresso e chance de falha visual.',
            },
        ],
    },
    {
        icon: '👔',
        title: 'Lojas & Customização de Personagem',
        products: [
            {
                title: 'Criação de Personagem',
                desc: 'Tela inicial de multicharacter com seleção de genética (pais), idade e rotação de câmera suave para criar novos personagens.',
            },
            {
                title: 'Loja de Roupas Premium',
                desc: 'Menu em tela cheia com categorias visuais (Camisas, Calças, Tênis), carrinho de compras e opção de salvar "Outfits" pré-montados.',
            },
            {
                title: 'Barbearia e Tatuagem',
                desc: 'Interface para cortes de cabelo, maquiagem e painel para visualizar tatuagens nos braços, peito ou costas antes de aplicar.',
            },
        ],
    },
    {
        icon: '⚙️',
        title: 'Interações & Outros',
        products: [
            {
                title: 'Menu Radial Animado',
                desc: 'Menu circular de interações rápidas (portas, animações, algemar) com ícones SVG, animações fluidas e submenus expansíveis.',
            },
            {
                title: 'Sistema de Propriedades',
                desc: 'Interface de imobiliária para compra/aluguel de casas, catálogo de decorações com posicionamento de móveis no ambiente.',
            },
            {
                title: 'Notificações Customizadas',
                desc: 'Alertas modernos (Sucesso, Erro, Info) não intrusivos com ícones, barras de tempo e sons customizados.',
            },
        ],
    },
];

const DiscordIcon = () => (
    <svg viewBox="0 0 24 18" fill="currentColor">
        <path d="M20.317 1.492a19.793 19.793 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 1.492.07.07 0 0 0 3.644 1.52C.533 6.093-.32 10.555.099 14.961a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.02z" />
    </svg>
);

export default function FiveM() {
    return (
        <>
            <ScrollReveal />

            <section className="page-hero">
                <div className="container">
                    <span className="section-label fade-in">FiveM</span>
                    <h1 className="fade-in">
                        Scripts & Sistemas <span className="text-gradient">FiveM</span>
                    </h1>
                    <p className="page-hero-desc fade-in">
                        Interfaces NUI premium para seu servidor de roleplay.
                        Design moderno, código otimizado, suporte dedicado.
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
