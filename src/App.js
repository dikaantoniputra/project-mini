import React from 'react';
import CartIcon  from './assets/css/logo.png';
import "./assets/css/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  
  // Buat method handleClick
  handleClick(){
    this.setState({count: this.state.count + 1});
  }

  pengurangan(){
    this.setState({count: this.state.count - 1});
  }
  
  render() {
    return (
      <div>
        <img src={CartIcon} alt="kamu" style={{height: 100 }} />
        <h1>
          {this.state.count}
        </h1>
        {/* tambahkan event onClick di tag <button> */}
        <button onClick={()=>{this.handleClick()}}>+</button>
        <button onClick={()=>{this.pengurangan()}}>-</button>
        
      </div>
    );
  }
}

export default App;
