import { useDispatch, useSelector } from 'react-redux'
import { increment } from './store/slices/counter/counterSlice';
import HomePage from './Pufi/pages/HomePage';
import './App.css'
import './Pufi/components/css/style.css'

function App() {
  
  const { counter } = useSelector( state => state.counter)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <HomePage/>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {counter}
        </button>
      </div>
    </div>
  )
}

export default App
