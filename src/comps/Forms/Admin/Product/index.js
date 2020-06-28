import React from 'react'
import ProductCreateFrom from './ProductCreateFrom'
import { withFirebase } from '../../../Firebase'
import * as bs from 'react-bootstrap'
import produce from 'immer'

class AdminProduct extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            products:null,
        }
    }
    componentDidMount = async() =>{
        const info = await this.props.context.doQueryAll('product')
        this.setState(state=> produce(state, draft=>{
          draft.products = info
        }))
    }

    render(){
        return(
            <div>
                <div>
                    <h3>Create Product</h3>
                    <ProductCreateFrom/>
                </div>
                {
                    !this.state.products?
                    <p>Loading...</p>
                    :
                    <div>
                        <h3>table for Read, Update, Delete</h3>
                        <bs.Table striped bordered hover>
                            <thead>
                                
                            </thead>
                            <tbody>

                            </tbody>
                        </bs.Table>
        
                    </div>
                }
            </div>
        )
    }
}

export default withFirebase(AdminProduct)