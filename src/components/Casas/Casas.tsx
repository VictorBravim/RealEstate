import { useRouter } from 'next/router';
import Image from 'next/image';
import "@/styles/Globalll.css"
import { FaTwitter, FaFacebook, FaInstagramSquare, FaLinkedin, FaGoogle, FaBath, FaCar } from "react-icons/fa";
import { IoHome, IoBed } from "react-icons/io5";
import user from '@/assets/user.png'

export default function Casa() {
    const router = useRouter();
    const { nome, preco, banheiro, quarto, garagem, transacao, imgSrc } = router.query;

    const isValidImgSrc = typeof imgSrc === 'string' && imgSrc.trim() !== '';

    return (
        <div>
            <div className="content-area single-property">
                <div className="container mt-5 pt-5">
                    <div className="row">
                        <div className="col-md-8 single-property-content prp-style-2">
                            <div className="">
                                <div className="row">
                                    <div className="light-slide-item">
                                        <div className="clearfix">
                                            <ul className="list-unstyled cS-hidden">
                                                {isValidImgSrc && <Image src={imgSrc} alt="Imagem da Casa" width={900} height={300} />}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-property-wrapper">
                                    <div className="section">
                                        <h4 className="s-property-title">Descrição</h4>
                                        <div className="s-property-content">
                                            <p>Nulla quis dapibus nisl. Suspendisse ultricies Nulla quis dapibus nisl.
                                                Suspendisse ultricies commodo arcu nec pretium. Nullam sed arcu ultricies
                                                commodo arcu nec pretium. Nullam sed arcu ultricies Nulla quis dapibus nisl.
                                                Suspendisse ultricies commodo arcu nec pretium. Nullam sed arcu ultricies Nulla
                                                quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium. Nullam sed
                                                arcu ultricies </p>
                                        </div>
                                    </div>
                                    <div className="section additional-details">
                                        <h4 className="s-property-title">Detalhes adicionais</h4>
                                        <ul className="additional-details-list clearfix">
                                            <li>
                                                <span className="col-xs-6 col-sm-4 col-md-4 add-d-title fixed-width-label">Beira-mar</span>
                                                <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">Sim</span>
                                            </li>
                                            <li>
                                                <span className="col-xs-6 col-sm-4 col-md-4 add-d-title fixed-width-label">Construído</span>
                                                <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">2003</span>
                                            </li>
                                            <li>
                                                <span className="col-xs-6 col-sm-4 col-md-4 add-d-title fixed-width-label">Estacionamento</span>
                                                <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">2 ou mais vagas</span>
                                            </li>
                                            <li>
                                                <span className="col-xs-6 col-sm-4 col-md-4 add-d-title fixed-width-label">Beira-mar</span>
                                                <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">Sim</span>
                                            </li>
                                            <li>
                                                <span className="col-xs-6 col-sm-4 col-md-4 add-d-title fixed-width-label">Vista</span>
                                                <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">Vista intracoastal</span>
                                            </li>
                                            <li>
                                                <span className="col-xs-6 col-sm-4 col-md-4 add-d-title fixed-width-label">Descrição da orla:</span>
                                                <span className="col-xs-6 col-sm-8 col-md-8 add-d-entry">Acesso ao Oceano</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="section property-features">
                                        <h4 className="s-property-title">Características</h4>
                                        <ul>
                                            <li><a href="properties.html">Piscina</a></li>
                                            <li><a href="properties.html">3 histórias</a></li>
                                            <li><a href="properties.html">Refrigeração Central</a></li>
                                            <li><a href="properties.html">Caminho de corrida 2</a></li>
                                            <li><a href="properties.html">2 gramado</a></li>
                                            <li><a href="properties.html">Caminho de bicicleta</a></li>
                                        </ul>
                                    </div>
                                    <div className="section property-video">
                                        <h4 className="s-property-title">Localização</h4>
                                        <div className="video-thumb">
                                            <a className="video-popup" href="yout" title="Virtual Tour">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p0">
                            <div className="sidebar sidebar-property blog-asside-right property-style2">
                                <div className="dealer-widget">
                                    <div className="dealer-content">
                                        <div className="inner-wrapper">
                                            <div className="single-property-header">
                                                <h1 className="property-title">{nome}</h1>
                                                <span className="property-price">R${preco}</span>
                                            </div>
                                            <div className="property-meta entry-meta clearfix">
                                                <div className="row">
                                                    <div className="col-xs-6 col-sm-6 col-md-6 p-b-15">
                                                        <span className="property-info-icon icon-tag">
                                                            <i><IoHome /></i>
                                                        </span>
                                                        <span className="property-info-entry">
                                                            <span className="property-info-label">Status</span>
                                                            <span className="property-info-value">{transacao}</span>
                                                        </span>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-6 col-md-6 p-b-15">
                                                        <span className="property-info-icon icon-bed">
                                                            <i><IoBed /></i>
                                                        </span>
                                                        <span className="property-info-entry">
                                                            <span className="property-info-label">Quartos</span>
                                                            <span className="property-info-value">{quarto}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xs-6 col-sm-6 col-md-6 p-b-15">
                                                        <span className="property-info-icon icon-bath">
                                                            <i><FaBath /></i>
                                                        </span>
                                                        <span className="property-info-entry">
                                                            <span className="property-info-label">Banheiros</span>
                                                            <span className="property-info-value">{banheiro}</span>
                                                        </span>
                                                    </div>
                                                    <div className="col-xs-6 col-sm-6 col-md-6 p-b-15">
                                                        <span className="property-info-icon icon-garage">
                                                            <i><FaCar /></i>
                                                        </span>
                                                        <span className="property-info-entry">
                                                            <span className="property-info-label">Garagens</span>
                                                            <span className="property-info-value">{garagem}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dealer-section-space">
                                                <span>Informações do vendedor</span>
                                            </div>
                                            <div className="clear">
                                                <div className="col-xs-4 col-sm-4 dealer-face">
                                                    <a href="/" className="logo m-1 float-start">
                                                        <Image src={user} alt="User" width={80} height={40} />
                                                    </a>
                                                </div>
                                                <div className="col-xs-10 col-sm-8">
                                                    <h3 className="dealer-name">
                                                        <div className="row">
                                                            <a href="/">Nome do Corretor</a>
                                                            <span>Corretor de imóveis</span>
                                                        </div>
                                                    </h3>
                                                    <div className="dealer-social-media">
                                                        <a className="twitter" target="_blank" href="">
                                                            <i><FaTwitter /></i>
                                                        </a>
                                                        <a className="facebook" target="_blank" href="">
                                                            <i><FaFacebook /></i>
                                                        </a>
                                                        <a className="gplus" target="_blank" href="">
                                                            <i><FaGoogle /></i>
                                                        </a>
                                                        <a className="linkedin" target="_blank" href="">
                                                            <i><FaLinkedin /></i>
                                                        </a>
                                                        <a className="instagram" target="_blank" href="">
                                                            <i><FaInstagramSquare /></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="clear">
                                                <ul className="dealer-contacts">
                                                    <li><i className="pe-7s-map-marker strong"> </i> São Paulo</li>
                                                    <li><i className="pe-7s-mail strong"> </i> email@Imobiliária.com</li>
                                                    <li><i className="pe-7s-call strong"> </i> +12 99675-9067</li>
                                                </ul>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu mi sapien. Aliquam quam tortor, hendrerit non condimentum at, congue ultrices diam. Donec elit purus, fringilla eget congue non, mollis vel ligula. Donec a dolor sem. Quisque quis dictum arcu. Nulla tempor ac ante nec congue. Mauris congue erat eu nunc volutpat finibus. Maecenas a efficitur nibh, eget tempor leo. Duis mattis lacinia semper. Quisque ex urna, posuere ac finibus ut, sodales a dui. Nulla feugiat orci id urna placerat, in ornare ipsum dictum.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
