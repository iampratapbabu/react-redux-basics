import React,{Fragment} from 'react';

//redux part
import {useSelector,useDispatch} from "react-redux";
import {incNumber,decNumber} from './actions/index';

function App() {
  const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <Fragment>
    <div className="container">
      <h1>Counter using Redux</h1>
      <h4>using React and Redux</h4>
      <a title="decrement" className="btn btn-secondary" onClick ={()=>dispatch(decNumber())}>-</a>
      <input type="text" className="input-group-text" value={myState} />
      <a title="decrement" className="btn btn-secondary"onClick ={()=>dispatch(incNumber())}>+</a>
    </div>
    </Fragment>
  );
}

export default App;
