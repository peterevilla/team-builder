import React, { useState } from 'react';




const Form = props => {

const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
})

const handleChanges = event => {

setMember({ ...member, [event.target.name]: event.target.value });


};


const submitForm = event => {

    event.preventDefault(); 
    props.addNewMember(member); // update parent state notes
    setMember({ name: "", role: "" }); // reset form to no value so it's easier to submit new input
  };


return (

<form onSubmit={submitForm}>
    <label htmlFor="name">Name</label>
	    <input id="name" type="text" value={member.name} name="name" placeholder="Enter name" onChange={handleChanges} /><br/><br/>
    <label htmlfor='email'>Email</label>
        <input id='email' type='email' name="email" placeholder='Enter email'/><br/><br/>
    <label htmlfor='role'>Role</label>
        <input id='role' type='text' value={member.role} name="role" placeholder='Enter your role' onChange={handleChanges}/><br/><br/>

    <button type="submit">Add Member</button>  

</form>



)

}



export default Form;