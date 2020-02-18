import React, { useState } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





const Form = props => {

const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
})

const handleChanges = event => {

setMember({ ...member, [event.target.name]: event.target.value });


};

// const clearList = () => {

//     setMember({
//         name: "",
//         email: "",
//         role: ""
//     })
// }

const submitForm = event => {

    event.preventDefault(); 
    props.addNewMember(member); // update parent state notes
    setMember({ name: "", email: "", role: "" }); // reset form to no value so it's easier to submit new input
  };


return (
<div>
<form onSubmit={submitForm}>
    <label htmlFor="name">Name</label>
	    <input id="name" type="text" value={member.name} name="name" placeholder="Enter name" onChange={handleChanges} /><br/><br/>
    <label htmlfor='email'>Email</label>
        <input id='email' type='email'  name="email" placeholder='Enter email'/><br/><br/>
    <label htmlfor='role'>Role</label>
        <input id='role' type='text' value={member.role} name="role" placeholder='Enter your role' onChange={handleChanges}/><br/><br/>

    <Button type="submit" color="success">Add Member</Button>   
</form>

{/* <Button onClick={clearList} color="danger">Clear</Button> */}

</div>

)

}



export default Form;