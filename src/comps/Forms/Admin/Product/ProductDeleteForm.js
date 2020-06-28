import React from 'react'
import { withFirebase } from "../../../Firebase"
import { Button } from 'react-bootstrap'

class ProductDeleteForm extends React.Component{
    constructor(props){
        super(props)
        
        // this.state = {
        //     bool: true
        // }
    }

    render(){
        return(
            <div>
                <h3>
                    Do you really want to delete {this.props.product.product_name} ({this.props.product.id}) ?
                </h3>
                <Button variant="outline-danger">YES</Button> &nbsp;
                <Button variant="outline-info">NO</Button>
            </div>
        )
    }
}
export default withFirebase(ProductDeleteForm)