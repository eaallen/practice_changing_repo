import { withFirebase } from "../../../Firebase"
import React from 'react'
class ProductUpdateForm extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            product:this.props.data || {}
        }
    }

    render(){
        console.log("state of ProductUpdateForm{}",this.state)
        return(
            <div>
                {/* JSX here */}
            </div>
        )
    }
}
export default withFirebase(ProductUpdateForm)