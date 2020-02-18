import React, { useState } from 'react';




const Form = props => {

return (

<form>
    <label htmlFor="name">Name</label>
	    <input id="name" type="text"   placeholder="Enter name" /><br/><br/>
    <label htmlfor='email'>Email</label>
        <input id='email' type='email' placeholder='Enter email'/><br/><br/>
    <label htmlfor='role'>Role</label>
        <input id='role' type='text' placeholder='Enter your role'/><br/><br/>

    <button type="submit">Add Member</button>  

</form>



)

}



export default Form;