import '../css/Footer.css';





function header(props){

    const mystyle={
        backgroundColor:props.backcolor
         
    }

    
    return(

        <div>
            <h1 style={mystyle}>
            
            {props.text}</h1>
        </div>
    );

}

