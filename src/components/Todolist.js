import React from 'react';
import Searchwidget from './Searchwidget';

class Todolist extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        var todoitems=[
            {id:1, title:"Lorem ipsum dolor sit amet"},
            {id:2, title:"consectetur adipiscing elit"},
            {id:3, title:"sed do eiusmod tempor incididunt"},
            {id:4, title:"ut labore et dolore"}
        ];
        
        return(
            <div>
                
                <p>this is todolist</p>
                {
                    todoitems.filter((val)=>{
                        if(this.props.search===""){
                            console.log(val);
                            return val;   
                        }
                        else if(val.title.toLowerCase().includes(this.props.search.toLowerCase())){
                            console.log(val);
                            return val;  
                        }
                    }).map((val,i)=>{
                        return(
                        <p>{i+1}- {val.title}</p>
                        );
                    })
                
                //todoitems.map((item,i)=>
                    
                   // <li>{item.title}</li>
                    
                //)
            }
              
            </div>  
        
        );
    }
}

export default Todolist;