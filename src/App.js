import React, { Component} from 'react';
import './App.css';
import Button from './components/button';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Button value="按钮" onClick={this.z.bind(this)}></Button>
        <Button value="按钮"></Button>
        <Button value="按钮"></Button>
      </div>
    );
  }
  z(event){
    console.log('外面的函数');
    console.log(event);
  }
}

export default App;

