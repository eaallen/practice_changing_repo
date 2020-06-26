import React from 'react'
import {Form,Button,Jumbotron} from 'react-bootstrap'

function Contact (props){
    return(
        <div>
            <h1>contact form and info here</h1>
            <br/>
            this is where {props.value} will work!
            <Jumbotron>
                <Form>
                    <Form.Control type = "email" placeholder = "Email"/>
                    <Form.Control type = "text" placeholder = "Subject"/>
                    <Form.Control as = "textArea" placeholder = "Text"/> 
                    <Form.Control type = "submit" value = "Submit" className = "btn btn-primary"/> 
                </Form>
            </Jumbotron>
        
        </div>
    )
}
export default Contact 