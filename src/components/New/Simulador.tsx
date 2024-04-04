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
      <div className="row justify-content-center">
        <div className="col-sm-8">
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