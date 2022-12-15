import {useEffect , useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const state = useSelector( state => state)
  


  const counterHandler = useCallback( (type,payload) =>{
      dispatch({type, payload})
  } ,[dispatch])

  useEffect(() => counterHandler('increase', 5) , [counterHandler] )
  
  const toggleCounter = () =>{
    
      dispatch({type: "toggle"})
  }
  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      <div className='counter'>Counter: {state.value}</div>
      {
        state.toggle &&
        <>
          <div>
            <button className='btn' onClick={ () => counterHandler("increase",10)}>increase +</button>
            <button className='btn' onClick={() => counterHandler("decrease",5)}>decrease -</button>
          </div>
        </>
      }
      <div>
        <button className='btn' onClick={toggleCounter}>Hide/Show Counter Number</button>
      </div>
    </div>
  );
}

export default App;
