import React from 'react';
import './App.css';
import Searchwidget from './components/Searchwidget';
import Todolist from './components/Todolist';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={searchitem:""}
  }
  updatesearch=(val)=>{
    this.setState({searchitem:val})
  }
 

  render(){
    return(
      <div className="App">
        <Searchwidget search={this.updatesearch}/>
        <br/>
        <Todolist search={this.state.searchitem}/>
        
      </div>
    )
  }
}



export default App;
