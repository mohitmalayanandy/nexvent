import './App.css'
import About from './components/About'
import Contactus from './components/Contactus'
import Counter from './components/Counter'
import Footer from './components/Footer'
import Herosection from './components/Herosection'
import MissionVision from './components/MissionVision'
import Navbar from './components/Navbar'
import QuickLinks from './components/QuickLinks'
import SatisfiedCustomer from './components/SatisfiedCustomer'
import StrategicExecution from './components/StrategicExecution'
import Uniqueness from './components/Uniqueness'

function App() {

  return (
    <>
    <Navbar/>
    <Herosection/>
    <About/>
    <MissionVision/>
    <Uniqueness/>
    <StrategicExecution/>
    <Counter/>
    <SatisfiedCustomer/>
    <Contactus/>
    <QuickLinks/>
    <Footer/>
    </>
  )
}

export default App