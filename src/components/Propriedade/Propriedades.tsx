// Propriedades.tsx
'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "bootstrap/dist/css/bootstrap.min.css";
import casa from "@/assets/casa.png"
import "@/styles/Globall.css"

interface Casa {
    id: number;
    nome: string;
    preco: string;
    localizacao: string;
    imgSrc: string;
    banheiro: number;
    quarto: number;
    garagem: number;
    transacao: string;
    categoria: string;
}

const casas: Casa[] = [
    {
        id: 1,
        nome: 'Casa 1',
        preco: '200,000',
        localizacao: 'Rua A, Bairro Z',
        imgSrc: casa.src,
        banheiro: 2,
        quarto: 3,
        garagem: 2,
        transacao: 'Comprar',
        categoria: 'Casa',
    },
    {
        id: 2,
        nome: 'Casa 2',
        preco: '250,000',
        localizacao: 'Rua B, Bairro Y',
        imgSrc: casa.src,
        banheiro: 3,
        quarto: 4,
        garagem: 3,
        transacao: 'Alugar',
        categoria: 'Comercial',
    },
    {
        id: 3,
        nome: 'Casa 3',
        preco: '150,000',
        localizacao: 'Rua C, Bairro X',
        imgSrc: casa.src,
        banheiro: 1,
        quarto: 2,
        garagem: 1,
        transacao: 'Comprar',
        categoria: 'Apartamento',
    },
    {
        id: 4,
        nome: 'Casa 4',
        preco: '350,000',
        localizacao: 'Rua D, Bairro W',
        imgSrc: casa.src,
        banheiro: 3,
        quarto: 3,
        garagem: 2,
        transacao: 'Alugar',
        categoria: 'Casa',
    },
    {
        id: 5,
        nome: 'Casa 5',
        preco: '100,000',
        localizacao: 'Rua E, Bairro V',
        imgSrc: casa.src,
        banheiro: 1,
        quarto: 1,
        garagem: 0,
        transacao: 'Alugar',
        categoria: 'Comercial',
    },
    {
        id: 6,
        nome: 'Casa 6',
        preco: '450,000',
        localizacao: 'Rua F, Bairro U',
        imgSrc: casa.src,
        banheiro: 5,
        quarto: 4,
        garagem: 3,
        transacao: 'Comprar',
        categoria: 'Apartamento',
    },
];

export default function Propriedades() {
    const [filteredCasas, setFilteredCasas] = useState<Casa[]>(casas);
    const [activeFilter, setActiveFilter] = useState('');

    const filterCasas = (transacao: string) => {
        if (transacao === activeFilter) return;
        setActiveFilter(transacao);
        if (transacao === 'Comprar' || transacao === 'Alugar') {
            const filtered = casas.filter(casa => casa.transacao === transacao);
            setFilteredCasas(filtered);
        } else {
            setFilteredCasas(casas);
        }
    };

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-0 gx-5 align-items-end">
                    <div className="col-lg-6">
                        <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 className="mb-3">Novas Propriedades</h1>
                        </div>
                    </div>
                    <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                        <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                            <li className="nav-item me-2">
                                <button id="btn-all" className={`btn btn-outline-primary ${activeFilter === '' ? 'active' : ''}`} onClick={() => filterCasas('')}>Propriedades</button>
                            </li>
                            <li className="nav-item me-2">
                                <button id="btn-venda" className={`btn btn-outline-primary ${activeFilter === 'Comprar' ? 'active' : ''}`} onClick={() => filterCasas('Comprar')}>Comprar</button>
                            </li>
                            <li className="nav-item me-0">
                                <button id="btn-alugar" className={`btn btn-outline-primary ${activeFilter === 'Alugar' ? 'active' : ''}`} onClick={() => filterCasas('Alugar')}>Alugar</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="row g-4">
                            {filteredCasas.map(casa => (
                                <div key={casa.id} className="col-lg-4 col-md-6 wow fadeInUp property-container" data-wow-delay="0.1s">
                                    <Link href={`/Casa?nome=${encodeURIComponent(casa.nome)}&preco=${encodeURIComponent(casa.preco)}&banheiro=${casa.banheiro}&quarto=${casa.quarto}&garagem=${casa.garagem}&transacao=${casa.transacao}&imgSrc=${encodeURIComponent(casa.imgSrc)}`}>
                                    <div className="property-item rounded overflow-hidden shadow-card">
                                        <div className="position-relative overflow-hidden">
                                                <Image src={casa.imgSrc} alt="Logo" width={500} height={40} className="img-fluid" />
                                            <div className={`bg-${casa.transacao === 'Venda' ? 'primary' : 'success'} rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3 cor-v`}>
                                                {casa.transacao}
                                            </div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3 cor-f">
                                                {casa.categoria}
                                            </div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">R$ {casa.preco}</h5>
                                            <div className="d-block h5 mb-2">{casa.nome}</div>
                                            <p>{casa.localizacao}</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i
                                                className="bx bxs-ruler color-i me-2"></i>{casa.banheiro} Banheiros</small>
                                            <small className="flex-fill text-center border-end py-2"><i
                                                className="bx bxs-bed color-i me-2"></i>{casa.quarto} Quartos</small>
                                            <small className="flex-fill text-center py-2"><i className="bx bxs-bath color-i me-2"></i>{casa.garagem} Garagens</small>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            ))}
                            <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                <Link href="/Propriedade">
                                    <button className="btn btn-primary py-3 px-5">Procure mais propriedades</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}