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
                <h3>
                    Do you really want to delete {this.props.product.product_name} ({this.props.product.id}) ?
                </h3>
                <Button variant="outline-danger" onClick={e=>this.handle_delete()}>YES</Button> &nbsp;
            </div>
        )
    }
}
export default withRouter(withFirebase(ProductDeleteForm))