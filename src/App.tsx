import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustTicker from './components/TrustTicker'
import WhoWeAre from './components/WhoWeAre'
import CoreValues from './components/CoreValues'
import JobCategories from './components/JobCategories'
import Process from './components/Process'
import CareerSupport from './components/CareerSupport'
import CTA from './components/CTA'
import ContactFooter from './components/ContactFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navbar />
      <main>
        <Hero />
        <TrustTicker />
        <WhoWeAre />
        <CoreValues />
        <JobCategories />
        <Process />
        <CareerSupport />
        <CTA />
        <ContactFooter />
      </main>
    </div>
  )
}
