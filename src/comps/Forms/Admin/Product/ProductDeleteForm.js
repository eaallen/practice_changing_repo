import React from 'react'
import { withFirebase } from "../../../Firebase"

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
                {/* JSX here */}
            </div>
        )
    }
}
export default withFirebase(ProductDeleteForm)