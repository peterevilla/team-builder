import React, { useState } from 'react';
import Form from './Components/Form'
import MembersList from './Components/MembersList'
import data from './data'
import './App.css';



function App() {

  const [members, setMembers] = useState(data);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };

    setMembers([...members, newMember]);
  };


  return (
    <div className="App">

    <h1>Team Members</h1>
    
    <Form addNewMember={addNewMember}/>
    <MembersList members={members}/>

    </div>
  );
}

export default App;
