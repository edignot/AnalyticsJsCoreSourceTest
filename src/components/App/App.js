import logo from '../../logo.svg'
import './App.css'
import Restaurants from '../Restaurants/Restaurants'

function App() {
  return (
    <>
      <img src={logo} className='App-logo' alt='logo' />
      <Restaurants />
    </>
  )
}

export default App
