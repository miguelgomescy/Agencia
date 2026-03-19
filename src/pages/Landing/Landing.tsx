import { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar' 
import Stats from '../../components/Stats/Stats'
import StripMkt from '../../components/StripMkt/StripMkt'
import Services from '../../components/Services/Services'
import Process from '../../components/Process/Process'
import Tech from '../../components/Tech/Tech'
import Portifolio from '../../components/Portifolio/Portifolio'
import FloatingChat from '../../components/FloatingChat/FloatingChat'


import Contact from '../../components/Contact/Contact'


import Faq from '../../components/Faq/Faq'


import Footer from '../../components/Footer/Footer'



function Landing() {
  useEffect(() => {
    document.title = 'CY Mídia — Seu site pronto em 48 horas'
  }, [])

  return (
    <>
      
        <Navbar />
        <Hero />
        <Stats />
        
         <StripMkt />

         
         <Services />

          
         <Process />

          
         <Tech />
          
         <Portifolio />

        
         <Contact />

         
         <Faq />

          
         <Footer />        
         <FloatingChat />
        
    
    </>
  )
}

export default Landing