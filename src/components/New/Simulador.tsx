// Simulador.tsx
'use client'
import { useState, useEffect } from 'react';

export default function Simulador() {
  const [precoImovel, setPrecoImovel] = useState(0);
  const [entrada, setEntrada] = useState(0);
  const [taxaJuros, setTaxaJuros] = useState(0);
  const [tempoFinanciamento, setTempoFinanciamento] = useState(0);
  const [parcelaMensal, setParcelaMensal] = useState(0);
  const [primeiraParcela, setPrimeiraParcela] = useState(0);

  useEffect(() => {
    calcularParcelaMensal();
  }, [precoImovel, entrada, taxaJuros, tempoFinanciamento]);

  const calcularParcelaMensal = () => {
    const juros = (taxaJuros / 100) / 12;
    const numeroParcelas = tempoFinanciamento * 12;
    const valorFinanciado = precoImovel - entrada;
    const parcela = (valorFinanciado * juros) / (1 - Math.pow(1 + juros, -numeroParcelas));
    setParcelaMensal(parcela || 0);
    const primeira = (valorFinanciado / numeroParcelas) + (valorFinanciado * juros);
    setPrimeiraParcela(primeira || 0);
  };

  return (
    <div className="container mt-5">
      <div className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
              <div className="box-feature mb-4">
                <span className="flaticon-house mb-4 d-block"></span>
                <h3 className="text-black mb-3 font-weight-bold">
                  Casa à venda
                </h3>
                <p className="text-black-50">
                  Muito, muito longe, atrás da palavra montanhas, longe dos países
                  Vokalia e Consonantia, aí vivem os textos cegos.
                </p>
                <p><a href="#" className="learn-more">Mais </a></p>
              </div>
            </div>
            <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
              <div className="box-feature mb-4">
                <span className="flaticon-house-2 mb-4 d-block-3"></span>
                <h3 className="text-black mb-3 font-weight-bold">Casa à venda</h3>
                <p className="text-black-50">
                  Muito, muito longe, atrás da palavra montanhas, longe dos países
                  Vokalia e Consonantia, aí vivem os textos cegos.
                </p>
                <p><a href="#" className="learn-more">Mais </a></p>
              </div>
            </div>
            <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="500">
              <div className="box-feature mb-4">
                <span className="flaticon-building mb-4 d-block"></span>
                <h3 className="text-black mb-3 font-weight-bold">
                  Casa à venda
                </h3>
                <p className="text-black-50">
                  Muito, muito longe, atrás da palavra montanhas, longe dos países
                  Vokalia e Consonantia, aí vivem os textos cegos.
                </p>
                <p><a href="#" className="learn-more">Mais </a></p>
              </div>
            </div>
            <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="600">
              <div className="box-feature mb-4">
                <span className="flaticon-house-3 mb-4 d-block-1"></span>
                <h3 className="text-black mb-3 font-weight-bold">Casa à venda</h3>
                <p className="text-black-50">
                  Muito, muito longe, atrás da palavra montanhas, longe dos países
                  Vokalia e Consonantia, aí vivem os textos cegos.
                </p>
                <p><a href="#" className="learn-more">Mais </a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mb-5 pb-5">
        <div className="col-sm-11">
          <h1>Simulador de Financiamento</h1>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="precoImovel">Preço do Imóvel</label>
                <input type="number" className="form-control" id="precoImovel" value={precoImovel} onChange={(e) => setPrecoImovel(parseFloat(e.target.value))} />
              </div>
              <div className="form-group">
                <label htmlFor="taxaJuros">Taxa de Juros (%/ano)</label>
                <input type="number" className="form-control" id="taxaJuros" value={taxaJuros} onChange={(e) => setTaxaJuros(parseFloat(e.target.value))} />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="entrada">Entrada</label>
                <input type="number" className="form-control" id="entrada" value={entrada} onChange={(e) => setEntrada(parseFloat(e.target.value))} />
              </div>
              <div className="form-group">
                <label htmlFor="tempoFinanciamento">Tempo de Financiamento (anos)</label>
                <input type="number" className="form-control" id="tempoFinanciamento" value={tempoFinanciamento} onChange={(e) => setTempoFinanciamento(parseFloat(e.target.value))} />
              </div>
            </div>
          </div>
          <div>
            <h2>Resultado</h2>
            <p>Valor da 1ª parcela: R$ {primeiraParcela.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <p>Valor da Parcela Mensal: R$ {parcelaMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/mês</p>
          </div>
        </div>
      </div>
    </div>
  );
}