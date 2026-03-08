import { createContext, useContext, useState } from 'react';

const translations = {
    pt: {
        nav: { inicio: 'Início', servicos: 'Serviços', portfolio: 'Portfólio', fivem: 'FiveM', apps: 'Apps', web: 'Web', sobre: 'Sobre' },
        hero: {
            badge: 'Disponível para novos projetos',
            title1: 'Criamos experiências',
            title2: 'digitais premium',
            subtitle: 'Sites e sistemas de alta performance que transformam visitantes em clientes. Design moderno, código limpo, resultados reais.',
            cta1: 'Fale Conosco',
            cta2: 'Ver Portfólio',
        },
        stats: { s1: 'Projetos Entregues', s2: 'Clientes Satisfeitos', s3: 'Anos de Experiência', s4: 'Suporte Ativo' },
        services: {
            label: 'O que fazemos',
            title: 'Soluções digitais',
            titleGrad: 'sob medida',
            desc: 'Do conceito ao código, entregamos projetos que combinam design excepcional com tecnologia de ponta.',
            cta: 'Explorar todos os serviços',
        },
        process: {
            label: 'Processo',
            title: 'Como',
            titleGrad: 'funciona',
            desc: 'Do primeiro contato à entrega final, em 4 passos simples.',
            steps: [
                { title: 'Fale Conosco', desc: 'Entre em contato pelo Discord e conte sobre seu projeto e suas necessidades.' },
                { title: 'Receba a Proposta', desc: 'Analisamos seu projeto e enviamos uma proposta detalhada com prazo e valor.' },
                { title: 'Desenvolvemos', desc: 'Nossa equipe desenvolve com atualizações constantes para sua aprovação.' },
                { title: 'Entregamos', desc: 'Projeto finalizado, testado e pronto para gerar resultados.' },
            ],
        },
        testimonials: {
            label: 'Depoimentos',
            title: 'O que nossos',
            titleGrad: 'clientes dizem',
        },
        cta: {
            title1: 'Pronto para transformar sua',
            titleGrad: 'presença digital',
            desc: 'Vamos conversar sobre seu próximo projeto. Sem compromisso.',
            btn: 'Iniciar Conversa no Discord',
        },
        footer: {
            desc: 'Criamos experiências digitais premium que transformam visitantes em clientes fiéis.',
            nav: 'Navegação',
            products: 'Produtos',
            contact: 'Contato',
            rights: 'Todos os direitos reservados.',
        },
        catalog: { solicitar: 'Solicitar' },
        notfound: { label: 'Erro 404', desc: 'Ops! A página que você procura não existe ou foi movida.', home: 'Voltar ao Início', contact: 'Fale Conosco' },
    },
    en: {
        nav: { inicio: 'Home', servicos: 'Services', portfolio: 'Portfolio', fivem: 'FiveM', apps: 'Apps', web: 'Web', sobre: 'About' },
        hero: {
            badge: 'Available for new projects',
            title1: 'We create premium',
            title2: 'digital experiences',
            subtitle: 'High-performance websites and systems that turn visitors into customers. Modern design, clean code, real results.',
            cta1: 'Contact Us',
            cta2: 'View Portfolio',
        },
        stats: { s1: 'Projects Delivered', s2: 'Happy Clients', s3: 'Years of Experience', s4: 'Active Support' },
        services: {
            label: 'What we do',
            title: 'Custom digital',
            titleGrad: 'solutions',
            desc: 'From concept to code, we deliver projects that combine exceptional design with cutting-edge technology.',
            cta: 'Explore all services',
        },
        process: {
            label: 'Process',
            title: 'How it',
            titleGrad: 'works',
            desc: 'From first contact to final delivery, in 4 simple steps.',
            steps: [
                { title: 'Contact Us', desc: 'Reach out on Discord and tell us about your project and needs.' },
                { title: 'Get a Proposal', desc: 'We analyze your project and send a detailed proposal with timeline and pricing.' },
                { title: 'We Develop', desc: 'Our team builds with constant updates for your approval.' },
                { title: 'We Deliver', desc: 'Project finalized, tested, and ready to drive results.' },
            ],
        },
        testimonials: {
            label: 'Testimonials',
            title: 'What our',
            titleGrad: 'clients say',
        },
        cta: {
            title1: 'Ready to transform your',
            titleGrad: 'digital presence',
            desc: "Let's talk about your next project. No commitment.",
            btn: 'Start a Chat on Discord',
        },
        footer: {
            desc: 'We create premium digital experiences that transform visitors into loyal customers.',
            nav: 'Navigation',
            products: 'Products',
            contact: 'Contact',
            rights: 'All rights reserved.',
        },
        catalog: { solicitar: 'Get in Touch' },
        notfound: { label: 'Error 404', desc: "Oops! The page you're looking for doesn't exist or has been moved.", home: 'Back to Home', contact: 'Contact Us' },
    },
};

const LangContext = createContext({
    lang: 'pt',
    t: translations.pt,
    toggle: () => { },
});

export function LangProvider({ children }) {
    const [lang, setLang] = useState(() => {
        try { return localStorage.getItem('nero-lang') || 'pt'; }
        catch { return 'pt'; }
    });

    const toggle = () => {
        const next = lang === 'pt' ? 'en' : 'pt';
        setLang(next);
        try { localStorage.setItem('nero-lang', next); } catch { }
    };

    return (
        <LangContext.Provider value={{ lang, t: translations[lang], toggle }}>
            {children}
        </LangContext.Provider>
    );
}

export function useLang() {
    return useContext(LangContext);
}

export function LangToggle() {
    const { lang, toggle } = useLang();
    return (
        <button className="lang-toggle" onClick={toggle} aria-label="Toggle language" title={lang === 'pt' ? 'Switch to English' : 'Mudar para Português'}>
            {lang === 'pt' ? 'EN' : 'PT'}
        </button>
    );
}
