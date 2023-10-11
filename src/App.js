import logo from './logo.svg';


import React  from 'react';
// import Calc from './Calcolator/Calc';
import './App.css';
import {BrowserRouter, Route, Routes,Link } from 'react-router-dom';
// import {BrowserRouter as Router, Link,Route} from 'react-router-dom';
// import Home from './Home';
// import About from './About';
import {ContainerC} from './About';
import {ContainerF} from './About';
import {TodoList} from './component/todo-list'






function App(){

  // const mylist=[
  //   {name:"Sana",lname:"Ahmadi",color:"green"},
  //   {name:"Suna",lname:"Ahmadi" ,color:"blue"},
  //   {name:"Hena",lname:"Ahmadi",color:"gray"},
  //   {name:"Sadaf",lname:"Ahmadi", color:"ping"},
  //   {name:"Sana",lname:"Ahmadi" , color:"red"},
  //   {name:"Humaira",lname:"Ahmadi", color:"orange"},

  // ]

  
  
  return(
    <div className='App'>
   {/* <ContainerF  myClass="border-2 justify-center shadow-2xl bg-blue-500 border-blue-500 mt-8 flex flex-enter font-bold font-size-12 rounded-2xl p-6"
   bclass="flex"/> */}
   {/* <ContainerC myClass="border-2  shadow-2xl border-blue-500  bg-blue-500 mt-12 font-bold font-size-40 rounded-2xl p-6  color-red" /> */}
  {/* {
   mylist.map((item)=>{
    return(
         <div className="flex" style={{color:item.color}}>
          <h1>{item.name} </h1>&nbsp; &nbsp;
          <h1>{item.lname}</h1>
        </div>
    )
   }
      
   )
  } */}

  <TodoList />

    </div>    
  );


}




  
export default App;
