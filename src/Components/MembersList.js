import React from 'react';
import { Card, Col, Row } from 'reactstrap';




const MembersList = props => {

    return(

    <div>

        {props.members.map(element => (
            <Row sm='6'>
                <Card >
                    <h2>{element.name}</h2>
                    <h3>{element.role}</h3>
                    <h3>{element.email}</h3>
                </Card>
            </Row>
        )) }

    </div>
        


    )
}



export default MembersList;