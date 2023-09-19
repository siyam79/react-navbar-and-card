
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {

  return (
    <div>


      <div className=' flex  md:bg-[#181818]  '>

        <Navbar></Navbar>
      </div>


      <PriceOptions></PriceOptions>



      
    </div>
  )
}

export default App
