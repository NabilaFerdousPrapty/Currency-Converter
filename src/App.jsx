
import './App.css'
import Home from './Pages/Home'
import bg from '../src/assets/bg-coin.jpg'

function App() {
  

  return (
    <>
 
      <div className='rounded-2xl' style={{backgroundImage:`url(${bg})`}}>
        <Home/>
      </div>
    </>
  )
}

export default App
