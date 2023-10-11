function Header(props){
  
    return(
        <div style={{backgroundColor:'skyblue', margin:20}}>
            <h1>Hello Dear {props.name} </h1>
            <h1> {props.other.email} </h1>
            <h1> {props.other.phone} </h1>
        </div>
    );
}
export default Header;