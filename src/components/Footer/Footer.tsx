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
                                <Image src={logo} alt="Logo" width={50} height={40} className='mr-6' />
                            </li>
                        </Link>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <h2>Links</h2>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <h2>Outros Links</h2>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <h2>Redes Sociais</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
