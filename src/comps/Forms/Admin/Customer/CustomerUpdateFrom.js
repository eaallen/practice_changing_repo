import { withFirebase } from "../../../Firebase"
import React from 'react'
class CustomerUpdateForm extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            //  key:value
        }
    }

    render(){
        console.log("state of CustomerUpdateForm{}",this.state)
        return(
            <div>
                <p>
                    Update <strong>{this.props.customer.customer_email}</strong> ({this.props.customer.id})
                </p>
                {/* JSX here */}
            </div>
        )
    }
}
export default withFirebase(CustomerUpdateForm)