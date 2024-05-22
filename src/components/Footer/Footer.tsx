// Footer.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/Global.css";
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png';

export default function Footer() {
    return (
        <footer className="site-footer bg-black text-white">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 d-flex justify-content-start">
                        <Link href="/">
                            <div className="logo">
                                <Image src={logo} alt="Logo" width={50} height={40} />
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 text-center">
                        <p className="text-muted mb-0">&copy; {new Date().getFullYear()} Your Company Name</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
