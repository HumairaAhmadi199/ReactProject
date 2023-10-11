function Btn(props){
    
    const mystyle={
        backgroundColor:props.backgroundColor,
        // marginTop:'50px',
       
        border:`5px dotted ${props.borderColor}`,
        height:'60px',
        width:'60px',
        boxShadow:'1px 2px 3px 5px',
        
    }

    return(
        <button borderColor="red" onClick={props.click} style={mystyle}>{props.text}</button>
    );
}
export default Btn;