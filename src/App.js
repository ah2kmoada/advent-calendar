import './App.css';
import Grid from './components/Grid';
import React from 'react';



class App extends React.Component {

  constructor() {
    super();
    this.grid = React.createRef();
  }

 
  resetGrid = () => {
    this.grid.current.reset();
  }

  reorderGrid = () => {
    this.grid.current.reorder();
  }

  render(){
     

    return (
      
      <div className="App">
        
        <div className="navbar">
                <button className="navbar-btn" onClick={this.reorderGrid}>Reorder</button>
                <button className="navbar-btn" onClick={this.resetGrid}>Reset</button>
                 
            </div>
        <div className="grid-box">
          <Grid ref={this.grid}/>
         
        </div>
        
      </div>
     
    );
   }

}

export default App;