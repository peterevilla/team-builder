import React, { useState } from 'react';
import Form from './Components/Form'
import MembersList from './Components/MembersList'
import data from './data'

import './App.css';

function App() {

  const [members, setMembers] = useState(data);


  return (
    <div className="App">

    <h1>Team Members</h1>
    
    <Form/>
    <MembersList members={members}/>

    </div>
  );
}

export default App;
