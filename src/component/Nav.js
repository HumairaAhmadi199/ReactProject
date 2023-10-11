

import React,{useState} from "react";

function Nav(props){
 
    // const [name,setName]=useState("Humaira jan");
    const [data,setData]=useState(null);
    const [print,setPrint]=useState(false);
    function getData(val){
        setData(val.target.value);
        setPrint(false);
        console.log(val.target.value);
    }
    return(
      <div className='App'>
        {/* <h1>props in react </h1>
  
  
        <Header  name={name} other={{email:"humaira@gmail.com", phone:"596790"}}/>
        <button onClick={()=>setName("Humaira Ahmadi")}>Update Name</button> */}
      {
        print?
        <h1  style={{backgroundColor:'skyblue', margin:'auto',height:'4%', width:'40%',marginTop:'5%', marginBottom:'4%'}}>{data}</h1>
        :null
  
      }
      
      <input style={{width:'20%', height:'30%', marginTop:'10%'}} type='text' onChange={getData}/>
      <button  style={{width:'10%', height:'30%',marginTop:'10%'}} onClick={()=>setPrint(true)} >print</button>
  
      </div>
  
      
    );
  }
  
    
  export default Nav;
  