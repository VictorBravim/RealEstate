// Nav.tsx
'use client'
import { useState } from 'react';
import Image from 'next/image';
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Nav.css";
import logo from '@/assets/logo.png';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className={`site-mobile-menu site-navbar-target ${isMenuOpen ? 'open' : ''}`}>
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close">
                        <span className="icofont-close js-menu-toggle" onClick={toggleMenu}></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>

            <nav className="site-nav">
                <div className="container">
                    <div className="menu-bg-wrap">
                        <div className="site-navigation">
                            <a href="index.html" className="logo m-0 float-start">
                                <Image src={logo} alt="Logo" width={50} height={40} />Casa Nova
                            </a>

                            <ul className={`js-clone-nav d-none d-lg-inline-block text-start site-menu float-end ${isMenuOpen ? 'd-block' : 'd-none'}`}>
                                <li className="active"><a href="index.html">Home</a></li>
                                <li><a href="/propriedade.html">Propriedades</a></li>
                                <li><a href="/serviços.html">Serviços</a></li>
                                <li><a href="/contato.html">Contato</a></li>
                            </ul>

                            <a href="#"
                                className="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
                                onClick={toggleMenu}>
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}