// Propriedade.tsx
import Nav from '@/components/Nav/Nav' 
import HeroM from '@/components/Hero/HeroM'
import CasaFilter from '@/components/New/CasaFilter';
import Footer from '@/components/Footer/Footer'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Propriedade() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const { search } = router.query;
    if (search) {
      if (Array.isArray(search)) {
        setSearchQuery(search[0]);
      } else {
        setSearchQuery(search);
      }
    }
  }, [router.query]);

  return (
    <div>
      <Nav /> 
      <HeroM />
      <CasaFilter searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}