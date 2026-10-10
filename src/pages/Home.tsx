import Hero from '../components/Hero'
import Featured from '../components/Featured-treatment'
import Clients from '../components/Clients'
import CallToAction from '../components/Call-to-action'

function Home() {
  return (
    <div>
        <Hero />
        <Featured />
        <Clients />
        <CallToAction />
    </div>
  )
}

export default Home