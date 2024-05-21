// Contatos.tsx
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contatos() {
    return (
        <div className="section-custom">
            <div className="container">
                <div className="row">
                    <div
                        className="col-lg-4 mb-5 mb-lg-0"
                        data-aos="fade-up"
                        data-aos-delay={100}
                    >
                        <div className="contact-info">
                            <div className="address mt-2">
                                <i className="icon-room bx bx-current-location" />
                                <h4 className="mb-2">Localização:</h4>
                                <p>
                                    VILLE SAINTE HÉLÈNE
                                    <br />
                                    São Paulo
                                </p>
                            </div>
                            <div className="open-hours mt-4">
                                <i className="icon-clock-o bx bx-calendar" />
                                <h4 className="mb-2">funcionamento:</h4>
                                <p>
                                    Segunda a Sexta:
                                    <br />
                                    08:00 AM - 18:00 PM
                                </p>
                            </div>
                            <div className="email mt-4">
                                <i className="icon-envelope bx bxs-envelope" />
                                <h4 className="mb-2">Email:</h4>
                                <p>email@Imobiliária.com</p>
                            </div>
                            <div className="phone mt-4">
                                <i className="icon-phone bx bxs-phone" />
                                <h4 className="mb-2">Numero:</h4>
                                <p>+12 99675-9067</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8" data-aos="fade-up" data-aos-delay={200}>
                        <form action="#">
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Seu nome"
                                    />
                                </div>
                                <div className="col-6 mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Seu email"
                                    />
                                </div>
                                <div className="col-12 mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Assunto"
                                    />
                                </div>
                                <div className="col-12 mb-3">
                                    <textarea
                                        name=""
                                        id=""
                                        cols={30}
                                        rows={7}
                                        className="form-control"
                                        placeholder="Mensagem"
                                        defaultValue={""}
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="submit"
                                        defaultValue="Enviar"
                                        className="btn btn-primary"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}