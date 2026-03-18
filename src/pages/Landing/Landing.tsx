import { useEffect } from 'react'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar' 

function Landing() {
  useEffect(() => {
    document.title = 'CY Mídia — Seu site pronto em 48 horas'
  }, [])

  return (
    <>
      
        <Navbar />
        <Hero />
        <h1>oi</h1>
    </>
  )
}

export default Landing