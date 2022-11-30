import HomePage from './Pufi/pages/HomePage';
import './App.css'
import './Pufi/components/css/style.css'
import { useSelector } from 'react-redux';

function App() {

  const suscriptorState = useSelector(state => state.suscriptor)
  console.log(suscriptorState)

  return (
    <div className="App">
      <HomePage/>
    </div>
  )
}

export default App
