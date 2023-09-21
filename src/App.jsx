
import './App.css'
import LineChart from './Components/LineChart/LineChart'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import NavBar from './Components/NavBar/NavBar'
import Phones from './Components/Phones/Phones'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {
  
  return (
    <>
      
      {/* <h1 className='text-7xl bg-orange-400'>Vite + React</h1> */}

      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      {/* <DaisyNav></DaisyNav> */}
      <LineChart></LineChart>
      <Phones></Phones>
      
    </>
  )
}

export default App
