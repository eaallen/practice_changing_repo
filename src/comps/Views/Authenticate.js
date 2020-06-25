import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import SignUpForm from '../Forms/Customer/SignUpForm'

function Authenticate(props){

    return(
        <div>
            <Container fluid>
                <Row>
                    <Col></Col>
                    <Col lg={8}>
                        <h1>All user auth forms go here.</h1>
                        <SignUpForm/>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}
export default Authenticate