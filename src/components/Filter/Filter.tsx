// Filter.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/Globall.css'

export default function Filter() {
    return (
        <div className="site-section site-section-sm pb-0">
      <div className="container">
        <div className="row">
          <form className="form-searche col-md-12" style={{ marginTop: '-100px' }}>
            <div className="row align-items-end">
              <div className="col-md-3">
                <label htmlFor="list-types">Tipos de listagem</label>
                <div className="select-wrap">
                  <span className="icon bx bx-chevron-down"></span>
                  <select name="list-types" id="list-types" className="form-control d-block">
                    <option value="">Apartamento</option>
                    <option value="">Comercial</option>
                    <option value="">Casa</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="offer-types">Tipo de oferta</label>
                <div className="select-wrap">
                  <span className="icon bx bx-chevron-down"></span>
                  <select name="offer-types" id="offer-types" className="form-control d-block">
                    <option value="">Para Comprar</option>
                    <option value="">Para Alugar</option>
                    <option value="">Para Locação</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="select-city">Selecione a cidade</label>
                <div className="select-wrap">
                  <span className="icon bx bx-chevron-down"></span>
                  <select name="select-city" id="select-city" className="form-control d-block">
                    <option value="">Campinas</option>
                    <option value="">Lorena</option>
                    <option value="">Aparecida</option>
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