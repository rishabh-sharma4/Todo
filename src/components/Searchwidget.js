import React from 'react';
import Todolist from './Todolist';

class Searchwidget extends React.Component{
    constructor(props){
        super(props);
        this.state={
            search:"",
        }
    }
    handlesearch=(e)=>{
        const {search}=this.props;
        search(e.target.value);
       // this.setState({search:e.target.value});

    }
    
    render(){
        return(
            <div>
            <input type="text" placeholder="type to search.." onChange={this.handlesearch} />
            
            </div>
        )
    }

}

export default Searchwidget;