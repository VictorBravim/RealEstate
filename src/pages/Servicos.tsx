// Serviços.tsx
'use client'
import React, { useState, useEffect } from 'react';
import Loader from '@/pages/Loader'
import Nav from '@/components/Nav/Nav' 
import HeroM from '@/components/Hero/HeroM'
import Simulador from '@/components/Propriedade/Simulador';
import Footer from '@/components/Footer/Footer'

export default function Servicos() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <Nav /> 
      <HeroM />
      <Simulador />
      {loading ? <Loader /> : null}
      {!loading && <Footer />}
    </div>
  );
}
