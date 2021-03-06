import React from 'react'
// import { Container,Row,Col } from 'react-bootstrap'
// import SignUpForm from '../Forms/Customer/SignUpForm'
import { Link, useRouteMatch } from 'react-router-dom'
import AdminProduct from '../Forms/Admin/Product'
import AdminCustomer from '../Forms/Admin/Customer'
import AdminAddress from '../Forms/Admin/Address'
import AdminCart from '../Forms/Admin/Cart'

/**************************************************************************************************
 * Admin uses a switch to display componenets 
 * const form_type gets a value from the url
 * Default component will be the home page for admin
 ***************************************************************************************************/

function Admin(props){
    const match = useRouteMatch('/Admin/:id')
    const form_type = match.params.id

    const form_switch = () =>{
        switch(form_type){
            case "Product":
            return <AdminProduct/>
            case "Customer":
            return <AdminCustomer/>
            case "Address":
            return <AdminAddress/>
            case "Cart":
            return <AdminCart/>
            
            default:
            return <Default/>
        }
    }
    return(
        <div>
            <Link to="/Admin/defualt">Admin Home</Link>
            {form_switch()}
        </div>
    )
}
export default Admin


const Default = (props) =>{
    return(
        <div>
            <div>
                <Link to="/Admin/Customer">Customer</Link>
            </div>
            <div>
                <Link to="/Admin/Product">Product</Link>
            </div>
            <div>
                <Link to="/Admin/Address">Address</Link>
            </div>
            <div>
                <Link to="/Admin/Cart">Cart</Link>
            </div>
            <div>
                <Link to="/Admin/Customer">Customer</Link>
            </div>
        </div>
    )
}