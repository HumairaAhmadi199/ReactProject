import Button from "./Button";
function Calculator(){
    return(
        <div className=" flex flex-col items-center pt-20 w-full ">
             
          
            
           
             <div className="bg-gray-800">
             <Button text=" "  tClass="  p-8 w-52   shadow-lg  border-gray-500"/> 
             </div> 
             

            <div className="flex bg-gray-600 w-52 justify-center">
           

            
            
            <Button text="7" tClass="bg-yellow-500  border-[1px]  p-5 w-full rounded-2xl shadow-2xl shadow-inner border-gray-500"/>
            <Button text="8" tClass="bg-yellow-500 border-[1px] p-5 w-full rounded-2xl shadow-2xl  border-gray-500"/>
            <Button text="9" tClass="bg-yellow-500 border-[1px] p-5 w-full rounded-2xl shadow-2xl  border-gray-500"/>
            <Button text="/" tClass="bg-slate-300 border-[1px] p-5 w-full rounded-2xl shadow-2xl  border-gray-500"/>
            </div>

            <div className="flex bg-gray-600 w-52 justify-center">
            <Button text="4" tClass="bg-yellow-500 border-[1px] p-5 w-full rounded-2xl shadow-2xl  border-gray-500"/>
            <Button text="5" tClass="bg-yellow-500 border-[1px] p-5 w-full rounded-2xl shadow-2xl  border-gray-500"/>
            <Button text="6" tClass="bg-yellow-500  border-[1px] p-5 w-full rounded-2xl shadow-2xl  border-gray-500"/>
            <Button text="X" tClass="bg-slate-300 border-[1px] p-5 w-full rounded-2xl shadow-2xl  border-gray-500"/>
            </div>

            <div className="flex bg-gray-600 w-52 justify-center">
            <Button text="1" tClass="bg-yellow-500  border-[1px] p-5 w-full rounded-2xl  shadow-red-500  border-gray-500"/>
            <Button text="2" tClass="bg-yellow-500  border-[1px] p-5 w-full rounded-2xl shadow-2xl  border-gray-500"/>
            <Button text="3" tClass="bg-yellow-500 border-[1px] p-5 w-full rounded-2xl shadow-2xl  border-gray-500"/>
            <Button text="+" tClass="bg-slate-300 border-[1px] p-5 w-full rounded-2xl shadow-2xl  border-gray-500"/>
            </div>

            <div className="flex  bg-gray-600 w-52 justify-center">
            <Button text="." tClass=" bg-yellow-500 border-[1px] p-5 w-full rounded-2xl shadow-2xl  border-gray-500"/>
            <Button text="0" tClass=" w-full bg-yellow-500 border-[1px] p-5 rounded-2xl shadow-2xl  border-gray-500"/>
            <Button text="=" tClass=" w-full bg-yellow-500 border-[1px] p-5  rounded-2xl shadow-2xl  border-gray-500"/>
            <Button text="-" tClass=" w-full bg-slate-300 border-[1px] p-5 rounded-2xl shadow-2xl  border-gray-500"/>
            </div>

            <div className="flex justify-center w-52 bg-gray-600">
                <Button text="Clear" tClass="bg-slate-300 border-[1px] p-5 w-52  rounded-2xl shadow-lg  border-gray-500"/>
            </div>



        </div>

    );
}
export default Calculator