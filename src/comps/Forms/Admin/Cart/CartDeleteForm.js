import React from 'react'
import { withFirebase } from "../../../Firebase"
import { Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

class CartDeleteForm extends React.Component{
    constructor(props){
        super(props)
        
        // this.state = {
        //     bool: true
        // }
    }
    handle_delete = () =>{
        this.props.context.doDeleteOneRecord("customer",this.props.customer.id)
        // this.props.history.push('/Admin/Product')
        this.props.show_change()
    }
    render(){
        return(
            <div>
                <p>
                    Do you really want to delete <strong>{this.props.customer.customer_email}</strong> ({this.props.customer.id}) ?
                </p>
                <Button variant="outline-danger" onClick={e=>this.handle_delete()}>YES</Button> &nbsp;
            </div>
        )
    }
}
export default withRouter(withFirebase(CartDeleteForm))