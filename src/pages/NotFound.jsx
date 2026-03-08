import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function NotFound() {
    return (
        <>
            <ScrollReveal />
            <section className="page-hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <span className="section-label fade-in">Erro 404</span>
                    <h1 className="fade-in" style={{ fontSize: '6rem', fontWeight: 900, marginBottom: '16px' }}>
                        4<span className="text-gradient">0</span>4
                    </h1>
                    <p className="page-hero-desc fade-in" style={{ marginBottom: '40px' }}>
                        Ops! A página que você procura não existe ou foi movida.
                    </p>
                    <div className="fade-in" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/" className="btn btn-primary btn-lg">
                            Voltar ao Início
                        </Link>
                        <a
                            href="https://discord.gg/m7v9dxNv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary btn-lg"
                        >
                            Fale Conosco
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
