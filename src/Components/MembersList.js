import React, { useState } from 'react';




const MembersList = props => {

    return(

    <div>

        {props.members.map(element => (

                <div>
                    <h2>{element.name}</h2>
                    <h3>{element.role}</h3>
                </div>
        )) }

    </div>
        


    )
}



export default MembersList;