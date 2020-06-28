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
                <h3>
                    Update product {this.props.product.product_name}  ({this.props.product.id})
                </h3>
                {/* JSX here */}
            </div>
        )
    }
}
export default withFirebase(ProductUpdateForm)