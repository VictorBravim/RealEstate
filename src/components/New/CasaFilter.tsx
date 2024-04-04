// CasaFilter.tsx
'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import "bootstrap/dist/css/bootstrap.min.css";
import casa from "@/assets/casa.webp"
import "@/styles/Globall.css"

interface Casa {
    id: number;
    nome: string;
    preco: number;
    localizacao: string;
    cep: string;
    imgSrc: string;
    banheiro: number;
    quarto: number;
    garagem: number;
    categoria: string;
    transacao: string;
}

const casas: Casa[] = [
    {
        id: 1,
        nome: 'Casa 1',
        preco: 200000,
        localizacao: 'Rua A, Bairro Z',
        cep: '12345-678',
        imgSrc: casa.src,
        banheiro: 2,
        quarto: 3,
        garagem: 2,
        categoria: 'Apartamento',
        transacao: 'Aluguel',
    },
    {
        id: 2,
        nome: 'Casa 2',
        preco: 250000,
        localizacao: 'Rua B, Bairro Y',
        cep: '54321-876',
        imgSrc: casa.src,
        banheiro: 3,
        quarto: 4,
        garagem: 3,
        categoria: 'Comercial',
        transacao: 'Compra',
    },
    {
        id: 3,
        nome: 'Casa 3',
        preco: 150000,
        localizacao: 'Rua C, Bairro X',
        cep: '98765-432',
        imgSrc: casa.src,
        banheiro: 1,
        quarto: 2,
        garagem: 1,
        categoria: 'Casa',
        transacao: 'Aluguel',
    },
];

interface Props {
    searchQuery: string;
    filtroCategoria: string;
    filtroTransacao: string;
}

export default function CasaFilter({ searchQuery, filtroCategoria, filtroTransacao }: Props) {
    const [filteredCasas, setFilteredCasas] = useState<Casa[]>(casas);
    const [filtroBanheiro, setFiltroBanheiro] = useState<number>(0);
    const [filtroQuarto, setFiltroQuarto] = useState<number>(0);
    const [filtroGaragem, setFiltroGaragem] = useState<number>(0);
    const [faixaPrecoMin, setFaixaPrecoMin] = useState<number | null>(null);
    const [faixaPrecoMax, setFaixaPrecoMax] = useState<number | null>(null);
    const [filtroPesquisa, setFiltroPesquisa] = useState<string>('');
    const [filtroCategoriaLocal, setFiltroCategoriaLocal] = useState<string>('');
    const [filtroTransacaoLocal, setFiltroTransacaoLocal] = useState<string>('');

    useEffect(() => {
        applyFilters();
    }, [searchQuery, filtroCategoria, filtroTransacao, filtroBanheiro, filtroQuarto, filtroGaragem, faixaPrecoMin, faixaPrecoMax, filtroPesquisa, filtroCategoriaLocal, filtroTransacaoLocal]);

    useEffect(() => {
        if (faixaPrecoMin === null && faixaPrecoMax === null) {
            applyFilters();
        }
    }, [faixaPrecoMin, faixaPrecoMax]);

    const handleFaixaPrecoMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        if (value === '' || value === 'R$') {
            setFaixaPrecoMin(null);
        } else {
            const numericValue = parseFloat(value.replace("R$", "").trim());
            setFaixaPrecoMin(numericValue);
        }
    };
    
    const handleFaixaPrecoMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        if (value === '' || value === 'R$') {
            setFaixaPrecoMax(null);
        } else {
            const numericValue = parseFloat(value.replace("R$", "").trim());
            setFaixaPrecoMax(numericValue);
        }
    };

    const applyFilters = () => {
        let filtered = [...casas];
        if (searchQuery) {
            filtered = filtered.filter(casa =>
                casa.localizacao.toLowerCase().includes(searchQuery.toLowerCase()) ||
                casa.cep.toLowerCase().includes(searchQuery.toLowerCase()) ||
                casa.id.toString().toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        if (filtroBanheiro !== 0) {
            filtered = filtered.filter(casa => casa.banheiro === filtroBanheiro);
        }
        if (filtroQuarto !== 0) {
            filtered = filtered.filter(casa => casa.quarto === filtroQuarto);
        }
        if (filtroGaragem !== 0) {
            filtered = filtered.filter(casa => casa.garagem === filtroGaragem);
        }
        if (faixaPrecoMin !== null) {
            filtered = filtered.filter(casa => casa.preco >= faixaPrecoMin);
        }
        if (faixaPrecoMax !== null) {
            filtered = filtered.filter(casa => casa.preco <= faixaPrecoMax);
        }
        if (filtroPesquisa !== '') {
            filtered = filtered.filter(casa => casa.localizacao.includes(filtroPesquisa) || casa.cep.includes(filtroPesquisa) || casa.id.toString().includes(filtroPesquisa));
        }
        if (filtroCategoriaLocal && filtroCategoriaLocal !== '') {
            filtered = filtered.filter(casa => casa.categoria === filtroCategoriaLocal);
        }
        if (filtroTransacaoLocal && filtroTransacaoLocal !== '') {
            filtered = filtered.filter(casa => casa.transacao === filtroTransacaoLocal);
        }
        if (filtroCategoria) {
            filtered = filtered.filter(casa => casa.categoria === filtroCategoria);
        }
        if (filtroTransacao) {
            filtered = filtered.filter(casa => casa.transacao === filtroTransacao);
        }
        setFilteredCasas(filtered);
    };

    const clearFilters = () => {
        setFiltroBanheiro(0);
        setFiltroQuarto(0);
        setFiltroGaragem(0);
        setFaixaPrecoMin(null);
        setFaixaPrecoMax(null);
        setFiltroPesquisa('');
        setFiltroCategoriaLocal('');
        setFiltroTransacaoLocal('');
        setFilteredCasas(casas);
    };

    return (
        <div className="container-xxl mt-5 py-5">
            <div className="container">
                <div className="row g-0 gx-5">
                    <div className="col-lg-3">
                        <div className="text-start mb-5">
                            <h5>Filtrar por:</h5>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Categoria</span>
                                <select name="filtro-categoria" className="form-select" value={filtroCategoriaLocal} onChange={(e) => setFiltroCategoriaLocal(e.target.value)}>
                                    <option value="">Todas</option>
                                    <option value="Casa">Casa</option>
                                    <option value="Apartamento">Apartamento</option>
                                    <option value="Comercial">Comercial</option>
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Transação</span>
                                <select name="filtro-transacao" className="form-select" value={filtroTransacaoLocal} onChange={(e) => setFiltroTransacaoLocal(e.target.value)}>
                                    <option value="">Todas</option>
                                    <option value="Aluguel">Aluguel</option>
                                    <option value="Compra">Compra</option>
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Banheiros</span>
                                <button className="btn btn-outline-primary" onClick={() => setFiltroBanheiro((filtroBanheiro && filtroBanheiro > 0) ? filtroBanheiro - 1 : 0)}>-</button>
                                <input type="text" className="form-control text-center" value={filtroBanheiro || '0'} readOnly />
                                <button className="btn btn-outline-primary" onClick={() => setFiltroBanheiro((filtroBanheiro || 0) + 1)}>+</button>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Quartos</span>
                                <button className="btn btn-outline-primary" onClick={() => setFiltroQuarto((filtroQuarto && filtroQuarto > 0) ? filtroQuarto - 1 : 0)}>-</button>
                                <input type="text" className="form-control text-center" value={filtroQuarto || '0'} readOnly />
                                <button className="btn btn-outline-primary" onClick={() => setFiltroQuarto((filtroQuarto || 0) + 1)}>+</button>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Garagens</span>
                                <button className="btn btn-outline-primary" onClick={() => setFiltroGaragem((filtroGaragem && filtroGaragem > 0) ? filtroGaragem - 1 : 0)}>-</button>
                                <input type="text" className="form-control text-center" value={filtroGaragem || '0'} readOnly />
                                <button className="btn btn-outline-primary" onClick={() => setFiltroGaragem((filtroGaragem || 0) + 1)}>+</button>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text">Preço</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Mín"
                                    onChange={handleFaixaPrecoMinChange}
                                    value={faixaPrecoMin !== null ? `R$ ${faixaPrecoMin}` : ''}
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Máx"
                                    onChange={handleFaixaPrecoMaxChange}
                                    value={faixaPrecoMax !== null ? `R$ ${faixaPrecoMax}` : ''}
                                />
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text">Pesquisar</span>
                                <input type="text" className="form-control" placeholder="Localização, CEP ou ID" onChange={e => setFiltroPesquisa(e.target.value)} />
                            </div>
                            <button className="btn btn-primary me-2" onClick={applyFilters}>Aplicar Filtros</button>
                            <button className="btn btn-outline-primary" onClick={clearFilters}>Limpar Filtros</button>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row g-4">
                            {filteredCasas.map(casa => (
                                <div key={casa.id} className="col-lg-4 col-md-6 wow fadeInUp property-container" data-wow-delay="0.1s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href={`/casa${casa.id}.html`}><Image src={casa.imgSrc} alt="Logo" width={500} height={40} className="img-fluid" /></a>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">R$ {casa.preco.toLocaleString('pt-BR')}</h5>
                                            <a className="d-block h5 mb-2" href="">{casa.nome}</a>
                                            <p>{casa.localizacao}</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="bx bxs-ruler color-i me-2"></i>{casa.banheiro} Banheiros</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="bx bxs-bed color-i me-2"></i>{casa.quarto} Quartos</small>
                                            <small className="flex-fill text-center py-2"><i className="bx bxs-bath color-i me-2"></i>{casa.garagem} Garagens</small>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}