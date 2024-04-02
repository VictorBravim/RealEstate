// New.tsx
import Image from 'next/image';
import "bootstrap/dist/css/bootstrap.min.css";
import casa from "@/assets/casa.png"
import "./New.css"

export default function New() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-0 gx-5 align-items-end">
                    <div className="col-lg-6">
                        <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 className="mb-3">Lista de Propriedades</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum
                                sit eirmod sit diam justo sed rebum.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                        <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                            <li className="nav-item me-2">
                                <a id="btn-all" className="btn btn-outline-primary active" data-bs-toggle="pill"
                                    href="#tab-1">Propriedades</a>
                            </li>
                            <li className="nav-item me-2">
                                <a id="btn-venda" className="btn btn-outline-primary" data-bs-toggle="pill"
                                    href="#tab-2">Venda</a>
                            </li>
                            <li className="nav-item me-0">
                                <a id="btn-alugar" className="btn btn-outline-primary" data-bs-toggle="pill"
                                    href="#tab-3">Alugar</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="row g-4">

                            <div className="col-lg-4 col-md-6 wow fadeInUp property-container" data-wow-delay="0.1s">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href="/casa1.html"><Image src={casa} alt="Logo" width={500} height={40} className="img-fluid" /></a>
                                        <div
                                            className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3 cor-v">
                                            Venda</div>
                                        <div
                                            className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3 cor-f">
                                            Casa</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-primary mb-3">R$120,345</h5>
                                        <a className="d-block h5 mb-2" href="">Casa moderna à venda</a>
                                        <p>R. Agostinho Lobo de
                                            Oliveira, 67
                                        </p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i
                                            className="bx bxs-ruler color-i me-2"></i>1000 m²</small>
                                        <small className="flex-fill text-center border-end py-2"><i
                                            className="bx bxs-bed color-i me-2"></i>3 Quartos</small>
                                        <small className="flex-fill text-center py-2"><i className="bx bxs-bath color-i me-2"></i>2
                                            Banheiros</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 wow fadeInUp property-container" data-wow-delay="0.3s">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href="/casa1.html"><Image src={casa} alt="Logo" width={500} height={40} className="img-fluid" /></a>
                                        <div
                                            className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3 cor-v">
                                            Alugar</div>
                                        <div
                                            className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3 cor-f">
                                            Casa</div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-primary mb-3">R$120,345</h5>
                                        <a className="d-block h5 mb-2" href="">Casa moderna à venda</a>
                                        <p>R. Agostinho Lobo de
                                            Oliveira, 67
                                        </p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i
                                            className="bx bxs-ruler color-i me-2"></i>1000 m²</small>
                                        <small className="flex-fill text-center border-end py-2"><i
                                            className="bx bxs-bed color-i me-2"></i>3 Quartos</small>
                                        <small className="flex-fill text-center py-2"><i className="bx bxs-bath color-i me-2"></i>2
                                            Banheiros</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 wow fadeInUp property-container" data-wow-delay="0.5s">
                                <div className="property-item rounded overflow-hidden">
                                    <div className="position-relative overflow-hidden">
                                        <a href="/casa1.html"><Image src={casa} alt="Logo" width={500} height={40} className="img-fluid" /></a>
                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3 cor-v">
                                            Venda
                                        </div>
                                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3 cor-f">
                                            Casa
                                        </div>
                                    </div>
                                    <div className="p-4 pb-0">
                                        <h5 className="text-primary mb-3">R$120,345</h5>
                                        <a className="d-block h5 mb-2" href="">Casa moderna à venda</a>
                                        <p>R. Agostinho Lobo de Oliveira, 67</p>
                                    </div>
                                    <div className="d-flex border-top">
                                        <small className="flex-fill text-center border-end py-2"><i
                                            className="bx bxs-ruler color-i me-2"></i>1000 m²</small>
                                        <small className="flex-fill text-center border-end py-2"><i
                                            className="bx bxs-bed color-i me-2"></i>3 Quartos</small>
                                        <small className="flex-fill text-center py-2"><i className="bx bxs-bath color-i me-2"></i>2 Banheiros</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                <a className="btn btn-primary py-3 px-5" href="">Procure mais propriedades</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}