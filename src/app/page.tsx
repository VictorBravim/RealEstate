// page.tsx
'use client'
import React, { useState, useEffect } from 'react';
import Nav from '@/components/Nav/Nav' 
import Hero from '@/components/Hero/Hero'
import Filter from '@/components/Filter/Filter'
import Propriedades from '@/components/Propriedade/Propriedades'
import Footer from '@/components/Footer/Footer'
import Loader from '@/pages/Loader'

export default function Home() {
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
      <Hero />
      <Filter />
      <Propriedades />
      {loading ? <Loader /> : null}
      {!loading && <Footer />}
    </div>
  );
}
