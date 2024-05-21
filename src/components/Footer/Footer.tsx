// Footer.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/Global.css";
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png';

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
                                <ul className="list-unstyled sm-row">
                                    <li><Link href="/" className="sm-mr">Home</Link></li>
                                    <li><Link href="/Propriedade" className="sm-mr">Propriedades</Link></li>
                                    <li><Link href="/Servicos" className="sm-mr">Serviços</Link></li>
                                    <li><Link href="/Contato" className="sm-mr">Contato</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <h2>Outros Links</h2>
                                <ul className="list-unstyled sm-row">
                                    <li><a href="#" className="sm-mr">Link 1</a></li>
                                    <li><a href="#" className="sm-mr">Link 2</a></li>
                                    <li><a href="#" className="sm-mr">Link 3</a></li>
                                    <li><a href="#" className="sm-mr">Link 4</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <h2>Redes Sociais</h2>
                                <ul className="list-unstyled sm-row">
                                    <li><a href="#" className="sm-mr">Facebook</a></li>
                                    <li><a href="#" className="sm-mr">Twitter</a></li>
                                    <li><a href="#" className="sm-mr">Instagram</a></li>
                                    <li><a href="#" className="sm-mr">LinkedIn</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
