import React,{useState} from "react";
import {Button} from 'react-bootstrap';

function ContainerF(props){
     const [count,setCount]=useState(1)
     function update(){
      return(
        setCount(count+1)
      )
     }
    return(
      <div>
     
        <p className={props.myClass}>This is a functional component {count}</p>
        <Button  className={props.bclass} variant="primary" onClick={update}>Click Here</Button>
      </div>
    );
  }

  class ContainerC extends React.Component{
  

    constructor(){
      super();
      this.state={
        color:"yellow",
        // background:"blue",
        count:1,
       
      }
      
        this.changeV=this.changeV.bind(this);
      
    }
    changeV()
    {
     this.setState({count:this.state.count+1})
   }
    render(){
      return(
        <div>
       
          <p className={this.props.myClass}>This is a Class component {this.state.count}</p>
          {/* <Button variant="primary" onClick={()=>this.changeV()}>Click Here</Button> */}
          <Button variant="primary" onClick={this.changeV}>Click Here</Button>
        </div>
      );

    }
  }

  export {ContainerF,ContainerC};