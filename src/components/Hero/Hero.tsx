// Hero.tsx
'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `/Propriedade?search=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <div className="hero">
      <div className="hero-slide">
        <div className="img overlay" style={{ backgroundImage: "url('./bg.png')" }}></div>
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-9 text-center">
            <h1 className="heading" data-aos="fade-up">Encontre Sua Casa <br /> Dos Sonhos</h1>
            <form onSubmit={handleSearch} className="narrow-w form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
              <input type="text" className="form-control px-4" placeholder="Seu CEP ou cidade. por exemplo. São Paulo" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              <button type="submit" className="btn btn-primary">Buscar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}