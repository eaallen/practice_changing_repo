import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import SignUpForm from '../Forms/Customer/SignUpForm'
import { Link } from 'react-router-dom'

function Admin(props){
    const match = useRouteMatch('/Admin/:id')
    const form_type = match.params.id

    const form_switch = () =>{
        switch(form_type){
            case "":
            // return <Component>
            break
            case "":
            // return <Component>
            break
            case "":
            // return <Component>
            break
            case "":
            // return <Component>
            break
            default:
            // return <Component>
            break
        }
    }
    return(
        <div>
            {form_switch()}
        </div>
    )
}
export default Admin


const Defualt = (props) =>{
    return(
        <div>
            <Link to="/Admin/Customer"></Link>
        </div>
    )
}