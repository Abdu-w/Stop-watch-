import React,{Component} from 'react';
import './App.css';


// create a class obj b/c of state 
// set a sate obj with a counter 
// bind function increase count on click
// have a holding state
//if click then set count to 0
export default class  App extends Component {
  constructor(props){
    super(props) // have to if using constructor 
    // set a state obj with count == 0
    this.state = {
      count : 0
    }
     // need a null position to pause 
     this.counter = null
  }
   // onclick set the counter to the current number 
    // increase the count by 1 in 1000 ms
    startCount = () => {
      this.counter = setInterval(()=>{
        this.setState({count: this.state.count + 1})  
      }, 1000)
    }

    // on click it will hold the setInterval 
    // should not start before start 
    pauseCount = () => {
      clearInterval(this.counter);
    } 

   
  render(){
    return (
      <div className="App">
         <h1>{this.state.count}</h1><br></br>
          <button className="rest" >Reset</button>
          <button className="start" onClick={this.startCount}>Start</button>
          <button className="pause"onClick={this.pauseCount} >Pause</button>

      </div>
        
  
      );
    
  }
  
 
}

// souces:
// https://www.youtube.com/watch?v=NAx76xx40jM
//https://stackoverflow.com/questions/43831783/react-stopwatch

