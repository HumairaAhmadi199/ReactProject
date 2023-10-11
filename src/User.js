function User(props){
  return(
<div>
<span> {props.data.name}</span>
    <span> {props.data.lastName}</span>
    <span> {props.data.phoneNo}</span>
    
</div>
    
  )
}
export default User;