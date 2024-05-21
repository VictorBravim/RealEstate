// Filter.tsx
'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

export default function Filter() {
  const [Categoria, setCategoria] = useState('');
  const [Transacao, setTransacao] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = `?Categoria=${Categoria}&Transacao=${Transacao}`;
    window.location.href = `/Propriedade${query}`;
  };

  return (
    <div className="site-section site-section-sm pb-0">
      <div className="container">
        <div className="row">
          <form onSubmit={handleSearch} className="form-searche col-md-12" style={{ marginTop: '-100px' }}>
            <div className="row align-items-end">
              <div className="col-md-3">
                <label htmlFor="list-types">Tipos de listagem</label>
                <div className="select-wrap">
                  <span className="icon bx bx-chevron-down"></span>
                  <select name="list-types" id="list-types" className="form-control d-block" value={Categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="">Todas</option>
                    <option value="Casa">Casa</option>
                    <option value="Apartamento">Apartamento</option>
                    <option value="Comercial">Comercial</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="offer-types">Tipo de oferta</label>
                <div className="select-wrap">
                  <span className="icon bx bx-chevron-down"></span>
                  <select name="offer-types" id="offer-types" className="form-control d-block" value={Transacao} onChange={(e) => setTransacao(e.target.value)}>
                    <option value="">Todas</option>
                    <option value="Aluguel">Aluguel</option>
                    <option value="Compra">Compra</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="select-city">Selecione a cidade</label>
                <div className="select-wrap">
                  <span className="icon bx bx-chevron-down"></span>
                  <select name="select-city" id="select-city" className="form-control d-block">
                    <option value="">Todas</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="select-city">Buscar</label>
                <button type="submit" className="btn btn-success text-white btn-block rounded-0">Buscar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
