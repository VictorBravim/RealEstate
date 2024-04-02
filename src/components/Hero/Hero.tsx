// Hero.tsx
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Hero() {
    return (
      <div className="hero">
        <div className="hero-slide">
          <div className="img overlay" style={{backgroundImage: "url('./bg.webp')"}}></div>
        </div>
  
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-9 text-center">
              <h1 className="heading" data-aos="fade-up">A maneira mais fácil de encontrar a casa dos seus sonhos</h1>
              <form action="#" className="narrow-w form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
                <input type="text" className="form-control px-4" placeholder="Seu CEP ou cidade. por exemplo. Campinas" />
                <button type="submit" className="btn btn-primary">Procurar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  