// page.tsx
import Nav from '@/components/Nav/Nav' 
import Hero from '@/components/Hero/Hero'
import Filter from '@/components/Filter/Filter'
import New from '@/components/New/New'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Nav /> 
      <Hero />
      <Filter />
      <New />
      <Footer />
    </div>
  );
}
