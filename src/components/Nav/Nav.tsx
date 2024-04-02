// Nav.tsx
'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Nav.css";
import logo from '@/assets/logo.png';

export default function Nav() {

    useEffect(() => {
        const siteMenuClone = () => {
            const jsCloneNavs = document.querySelectorAll('.js-clone-nav');
            const siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');

            if (siteMobileMenuBody) {
                jsCloneNavs.forEach(nav => {
                    const navCloned = nav.cloneNode(true) as Element;
                    navCloned.setAttribute('class', 'site-nav-wrap');
                    siteMobileMenuBody.appendChild(navCloned);
                });

                setTimeout(() => {
                    const hasChildrens = document.querySelector('.site-mobile-menu')?.querySelectorAll('.has-children');

                    let counter = 0;
                    hasChildrens?.forEach(hasChild => {
                        const refEl = hasChild.querySelector('a');

                        if (refEl) {
                            const newElSpan = document.createElement('span');
                            newElSpan.setAttribute('class', 'arrow-collapse collapsed');
                            hasChild.insertBefore(newElSpan, refEl);

                            const arrowCollapse = hasChild.querySelector('.arrow-collapse');
                            arrowCollapse?.setAttribute('data-bs-toggle', 'collapse');
                            arrowCollapse?.setAttribute('data-bs-target', '#collapseItem' + counter);

                            const dropdown = hasChild.querySelector('.dropdown');
                            dropdown?.setAttribute('class', 'collapse');
                            dropdown?.setAttribute('id', 'collapseItem' + counter);

                            counter++;
                        }
                    });

                }, 1000);
            }
        };

        siteMenuClone();
    }, []);

    const handleMenuToggle = () => {
        const body = document.body;
        const menuToggle = document.querySelectorAll(".js-menu-toggle");

        menuToggle.forEach(mtoggle => {
            if (body.classList.contains('offcanvas-menu')) {
                body.classList.remove('offcanvas-menu');
                mtoggle.classList.remove('active');
            } else {
                body.classList.add('offcanvas-menu');
                mtoggle.classList.add('active');
            }
        });
    };

    return (
        <div>
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close">
                        <span className="icofont-close js-menu-toggle" onClick={handleMenuToggle}></span>
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

                            <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end">
                                <li className="active"><a href="index.html">Home</a></li>
                                <li><a href="/propriedade.html">Propriedades</a></li>
                                <li><a href="/serviços.html">Serviços</a></li>
                                <li><a href="/contato.html">Contato</a></li>
                            </ul>

                            <a href="#" className="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
                                onClick={handleMenuToggle}>
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}