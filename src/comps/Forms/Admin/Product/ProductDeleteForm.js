import React from 'react'
import { withFirebase } from "../../../Firebase"
import { Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

class ProductDeleteForm extends React.Component{
    constructor(props){
        super(props)
        
        // this.state = {
        //     bool: true
        // }
    }
    handle_delete = () =>{
        this.props.context.doDeleteOneRecord("product",this.props.product.id)
        this.props.history.push('/Admin/Product')
        this.props.show_change()
    }
    render(){
        return(
            <div>
                <p>
                    Do you really want to delete <strong>{this.props.product.product_name}</strong> ({this.props.product.id}) ?
                </p>
                <Button variant="outline-danger" onClick={e=>this.handle_delete()}>YES</Button> &nbsp;
            </div>
        )
    }
}
export default withRouter(withFirebase(ProductDeleteForm))