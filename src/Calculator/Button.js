function Button(props){

    return(
        <div>
         
           
             
            <button className={props.tClass}>{props.text}</button>
        </div>
    );
}
export default Button