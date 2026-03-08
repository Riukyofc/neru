import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import './Pricing.css';

const plans = [
    {
        name: 'Starter',
        price: 'R$ 497',
        period: 'por projeto',
        desc: 'Ideal para quem precisa de uma presença digital rápida e profissional.',
        features: [
            'Landing Page responsiva',
            'Design personalizado',
            'SEO básico',
            'Hospedagem por 3 meses',
            'Entrega em 7 dias',
            'Suporte por 30 dias',
        ],
        popular: false,
        cta: 'Começar Agora',
    },
    {
        name: 'Professional',
        price: 'R$ 1.497',
        period: 'por projeto',
        desc: 'Para empresas que precisam de uma solução completa e escalável.',
        features: [
            'Site multi-página (até 6 páginas)',
            'Design premium exclusivo',
            'SEO avançado',
            'Painel administrativo',
            'Blog integrado',
            'Hospedagem por 6 meses',
            'Entrega em 15 dias',
            'Suporte por 90 dias',
        ],
        popular: true,
        cta: 'Escolher Plano',
    },
    {
        name: 'Enterprise',
        price: 'Sob consulta',
        period: 'projeto personalizado',
        desc: 'Sistemas complexos sob medida para grandes operações.',
        features: [
            'Sistema web completo',
            'Arquitetura escalável',
            'API personalizada',
            'Integrações ilimitadas',
            'Dashboard analytics',
            'Hospedagem dedicada',
            'Treinamento da equipe',
            'Suporte prioritário 24/7',
        ],
        popular: false,
        cta: 'Falar com Especialista',
    },
];

const faqs = [
    {
        question: 'Quanto tempo leva para entregar um projeto?',
        answer: 'Depende da complexidade. Landing pages ficam prontas em 5-7 dias úteis. Sites multi-página em 10-15 dias. Sistemas complexos podem levar de 30 a 60 dias.',
    },
    {
        question: 'Vocês oferecem hospedagem?',
        answer: 'Sim! Todos os nossos planos incluem hospedagem gratuita por um período inicial. Após esse período, oferecemos planos de manutenção com hospedagem inclusa.',
    },
    {
        question: 'Posso fazer alterações depois da entrega?',
        answer: 'Claro! Durante o período de suporte incluído, fazemos ajustes sem custo adicional. Após esse período, temos planos de manutenção acessíveis.',
    },
    {
        question: 'Como funciona o pagamento?',
        answer: 'Trabalhamos com 50% de entrada + 50% na entrega. Aceitamos PIX, transferência bancária e cartão. Para projetos Enterprise, oferecemos condições especiais.',
    },
    {
        question: 'Meu site será responsivo?',
        answer: 'Sim, todos os nossos projetos são desenvolvidos com design responsivo, garantindo uma experiência perfeita em desktop, tablet e celular.',
    },
    {
        question: 'Vocês cuidam do domínio e SSL?',
        answer: 'Sim! Ajudamos com o registro do domínio e configuramos SSL gratuito (HTTPS) para garantir a segurança do seu site.',
    },
];

export default function Pricing() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <>
            <ScrollReveal />

            <section className="page-hero">
                <div className="bg-grid"></div>
                <div className="bg-glow bg-glow-purple" style={{ top: '-20%', right: '20%' }}></div>
                <div className="container">
                    <span className="section-label fade-in">Preços</span>
                    <h1 className="fade-in">
                        Planos que cabem no <span className="text-gradient">seu bolso</span>
                    </h1>
                    <p className="page-hero-desc fade-in">
                        Soluções transparentes e acessíveis. Escolha o plano ideal
                        para o seu negócio.
                    </p>
                </div>
            </section>

            {/* === PRICING CARDS === */}
            <section>
                <div className="container">
                    <div className="pricing-grid">
                        {plans.map((plan, i) => (
                            <div
                                key={plan.name}
                                className={`pricing-card fade-in ${plan.popular ? 'popular' : ''}`}
                                style={{ transitionDelay: `${i * 0.1}s` }}
                            >
                                {plan.popular && (
                                    <div className="popular-badge">
                                        <span className="badge badge-popular">⭐ Mais Popular</span>
                                    </div>
                                )}
                                <div className="pricing-header">
                                    <h3>{plan.name}</h3>
                                    <div className="pricing-price">
                                        <span className="price">{plan.price}</span>
                                        <span className="period">{plan.period}</span>
                                    </div>
                                    <p>{plan.desc}</p>
                                </div>
                                <ul className="pricing-features">
                                    {plan.features.map((f) => (
                                        <li key={f}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="https://discord.gg/m7v9dxNv"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} pricing-btn`}
                                >
                                    {plan.cta}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === FAQ === */}
            <section className="section-faq">
                <div className="container">
                    <div className="section-header center">
                        <span className="section-label fade-in">FAQ</span>
                        <h2 className="section-title fade-in">
                            Perguntas <span className="text-gradient">frequentes</span>
                        </h2>
                    </div>

                    <div className="faq-list">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className={`faq-item fade-in ${openFaq === i ? 'open' : ''}`}
                                style={{ transitionDelay: `${i * 0.05}s` }}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    <span>{faq.question}</span>
                                    <svg
                                        className="faq-icon"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="12" y1="5" x2="12" y2="19" />
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                    </svg>
                                </button>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
