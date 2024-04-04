// Footer.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/Global.css";
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.webp';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Link href="/">
                            <li className="logo">
                                <Image src={logo} alt="Logo" width={50} height={40} className='mr-6' />Casa Nova
                            </li>
                        </Link>
                        <p>Alguma descrição do seu site aqui...</p>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <h2>Links</h2>
                                <ul className="list-unstyled">
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/Propriedade">Propriedades</Link></li>
                                    <li><Link href="/Servicos">Serviços</Link></li>
                                    <li><Link href="/Contato">Contato</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <h2>Outros Links</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#">Link 1</a></li>
                                    <li><a href="#">Link 2</a></li>
                                    <li><a href="#">Link 3</a></li>
                                    <li><a href="#">Link 4</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <h2>Redes Sociais</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Instagram</a></li>
                                    <li><a href="#">LinkedIn</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
