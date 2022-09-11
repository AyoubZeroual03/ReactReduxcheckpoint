import './App.css';
import {connect} from "react-redux"
import {incrementCounter,decrementCounter,changeTitle} from './redux/actions/action-creators'

function App(props) {
const handleIncrement= () =>{
  props.increments();
  }
  return (
    <div className=''>
      <h1>{props.counter}</h1>
      <button onClick={handleIncrement} >
        Increment
      </button>
      <button onClick={()=>props.decrements()} >
        Decrement
      </button>

          <p> --------------------------------------</p>
          <h1> Donner asmak</h1>
          <input type="text" placeholder='enter votre nom' onChange={(e)=>props.changetitle(e.target.value)}  />
          <h1> ana {props.title}</h1>
    </div>

  );
}
const mapStateToProps=(state)=>{
return{
  counter:state.CounterReducer.counter,
  title:state.TitleReducer.title
}
}
const mapDispatchToProps =(dispatch)=>{
    return{
      increments:()=>dispatch(incrementCounter()),
      decrements:()=>dispatch(decrementCounter()),
      changetitle:(value)=>dispatch(changeTitle(value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);



