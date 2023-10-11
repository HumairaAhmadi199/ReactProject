import Btn from './Btn';
import { useState } from 'react';

const Container=()=>{
    const[value,setValue]=useState(0);

    const UpadateValue=()=>{
        setValue(value+1);
    }

    const UpadateValue2=()=>{
        setValue(value-1);
    }

    return(
        <div className='bg-blue-500 w-full h-auto flex flex-col   justify-center '>
       <h1>{value}</h1>
      <Btn  color="black" borderColor="red" backgroundColor="blue" text="+" click={UpadateValue}/>
      <Btn  color="black" borderColor="red" backgroundColor="orange" text="-" click={UpadateValue2} />

     {/* <button onClick={UpadateValue}>Increament</button> */}
     </div>
    );
}
export default Container;