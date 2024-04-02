// Footer.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css"

export default function Footer() {
    return (
        <div className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="widget">
                            <h3>Contato</h3>
                            <address>R. Agostinho Lobo de Oliveira, 67</address>
                            <ul className="list-unstyled links">
                                <li><a href="tel://+12 99675-9067">+12 99675-9067</a></li>
                                <li><a href="tel://+12 99675-9067">+12 99675-9067</a></li>
                                <li>
                                    <a href="mailto:email@Imobiliária.com">email@Imobiliária.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="widget">
                            <h3>Fontes</h3>
                            <ul className="list-unstyled float-start links">
                                <li><a href="#">Sobre</a></li>
                                <li><a href="#">Serviços</a></li>
                                <li><a href="#">Termos</a></li>
                                <li><a href="#">Privacidade</a></li>
                            </ul>
                            <ul className="list-unstyled float-start links">
                                <li><a href="#">Negócios</a></li>
                                <li><a href="#">Carreiras</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="widget">
                            <h3>Links</h3>
                            <ul className="list-unstyled links">
                                <li><a href="#">Sobre nós</a></li>
                                <li><a href="#">Contate-nos</a></li>
                            </ul>

                            <ul className="list-unstyled social">
                                <li>
                                    <a href="#"><span className="bx bxl-instagram-alt icon-instagram"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="bx bxl-twitter icon-twitter"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="bx bxl-facebook-circle icon-facebook"></span></a>
                                </li>
                                <li>
                                    <a href="#"><span className="bx bxl-linkedin-square icon-linkedin"></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}