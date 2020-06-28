import { withFirebase } from "../../../Firebase"
import React from 'react'
class ProductUpdateForm extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            //  key:value
        }
    }

    render(){
        console.log("state of ProductUpdateForm{}",this.state)
        return(
            <div>
                <p>
                    Update product <strong>{this.props.product.product_name}</strong>  ({this.props.product.id})
                </p>
                {/* JSX here */}
            </div>
        )
    }
}
export default withFirebase(ProductUpdateForm)