// Nav.tsx
'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/Global.css';
import logo from '@/assets/logo.webp';

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentRoute, setCurrentRoute] = useState('/');
    const [isSticky, setIsSticky] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const body = document.body;
        if (menuOpen) {
            body.classList.add('offcanvas-menu');
        } else {
            body.classList.remove('offcanvas-menu');
        }
    }, [menuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        setCurrentRoute(window.location.pathname);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className={`site-mobile-menu site-navbar-target ${menuOpen ? 'active' : ''}`}>
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close">
                        <span className="icofont-close js-menu-toggle" onClick={handleMenuToggle}></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body">
                    <ul className="site-nav-wrap">
                        <li className={currentRoute === "/" ? "active" : ""}><Link href="/">Home</Link></li>
                        <li className={currentRoute === "/Propriedade" ? "active" : ""}><Link href="/Propriedade">Propriedades</Link></li>
                        <li className={currentRoute === "/Servicos" ? "active" : ""}><Link href="/Servicos">Serviços</Link></li>
                        <li className={currentRoute === "/Contato" ? "active" : ""}><Link href="/Contato">Contato</Link></li>
                    </ul>
                </div>
            </div>

            <nav className={`site-nav ${isSticky ? 'sticky' : ''}`}>
                <div className="container">
                    <div className="menu-bg-wrap">
                        <div className="site-navigation">
                            <a href="/" className="logo m-1 float-start">
                                <Image src={logo} alt="Logo" width={50} height={40} className='mr-6' /><p className='u-l'>Casa Nova</p>
                            </a>

                            <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end">
                                <li className={currentRoute === "/" ? "active" : ""}><Link href="/">Home</Link></li>
                                <li className={currentRoute === "/Propriedade" ? "active" : ""}><Link href="/Propriedade">Propriedades</Link></li>
                                <li className={currentRoute === "/Servicos" ? "active" : ""}><Link href="/Servicos">Serviços</Link></li>
                                <li className={currentRoute === "/Contato" ? "active" : ""}><Link href="/Contato">Contato</Link></li>
                            </ul>

                            <a href="#" className="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none" onClick={handleMenuToggle}>
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}