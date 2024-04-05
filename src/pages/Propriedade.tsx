// Propriedade.tsx
import Nav from '@/components/Nav/Nav'
import HeroM from '@/components/Hero/HeroM'
import CasaFilter from '@/components/Propriedade/CasaFilter';
import Footer from '@/components/Footer/Footer'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Propriedade() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [filtroTransacao, setFiltroTransacao] = useState('');

  useEffect(() => {
    const { search, Categoria, Transacao } = router.query;
    if (search) {
      if (Array.isArray(search)) {
        setSearchQuery(search[0]);
      } else {
        setSearchQuery(search);
      }
    }
    if (Categoria) {
      setFiltroCategoria(Array.isArray(Categoria) ? Categoria[0] : Categoria);
    }
    if (Transacao) {
      setFiltroTransacao(Array.isArray(Transacao) ? Transacao[0] : Transacao);
    }
  }, [router.query]);

  return (
    <div>
      <Nav />
      <HeroM />
      <CasaFilter searchQuery={searchQuery} filtroCategoria={filtroCategoria} filtroTransacao={filtroTransacao} />
      <Footer />
    </div>
  );
}