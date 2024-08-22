import './App.css'
import Equipments from './Components/Equipments'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import bgimge from './assets/fitness-gym-logo-with-strong-athlete-and-barbell-vector-24189864.jpg'
function App() {

  const bgstyle = {
    backgroundImage:`url(${bgimge})`,
    backgroundRepeat:"no-repeat",
    backgroundSize :"cover",
    backgroundPosition:"center",
    backgroundAttachment:"fixed",
  }

  return (
    <>
    <div className='overflow-x-hidden'>
      <div style={bgstyle}>

      <Navbar/>
      <Hero/>

      </div>
      <Equipments/>
    </div>
    </>
  )
}

export default App
