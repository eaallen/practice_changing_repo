import { withFirebase } from "../../../Firebase"
import React from 'react'
class ProductUpdateForm extends React.Component{
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
export default withFirebase(ProductUpdateForm)