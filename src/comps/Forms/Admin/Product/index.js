import React from 'react'
import ProductCreateFrom from './ProductCreateFrom'
import ProductUpdateFrom from './ProductUpdateFrom'
import { withFirebase } from '../../../Firebase'
import * as bs from 'react-bootstrap'
import produce from 'immer'
import { Link } from 'react-router-dom'
import ProductDeleteForm from './ProductDeleteForm'

class AdminProduct extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            products:null, // an array of objects
            action:"create",
            product:null,  // a single object
        }
    }
    componentDidMount = async() =>{
        const info = await this.props.context.doQueryAll('product')
        const info2 = info
        this.setState(state=> produce(state, draft=>{
          draft.products = info2
        }))
    }

    action_on_product = (product_obj,type_of_action) =>{
        if(type_of_action === "edit"){
            this.setState({action:"edit", product:product_obj})
        }else{
            this.setState({action:"delete",product:product_obj})
        }
    }
    form_switch = (action) =>{
        switch(action){
            case "edit":
            return <ProductUpdateFrom data={this.state.product}/>
            case "delete":
            return <ProductDeleteForm data={this.state.product}/>
            default:
            return <ProductCreateFrom/>
        }
    }


    render(){
        console.log(this.state.products,"products")
        return(
            <div>
                <div>
                    <h3>Create Product</h3>
                    

                </div>
                {
                    !this.state.products?
                    <p>Loading...</p>
                    :
                    <div>
                        <h3>table for Read, Update, Delete</h3>
                        <bs.Table striped bordered hover size="sm" responsive>
                            <thead>
                                <tr>
                                    <th>Actions</th>
                                    {Object.keys(this.state.products[0]).map((prod_col, idx) =>{
                                        return(
                                           <th key ={idx}>
                                                {prod_col}
                                           </th> 
                                        )
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.products.map(prod=>{
                                    return(
                                        <tr key={prod.id} className="table-data">
                                            <td className="text-center">
                                                <bs.Button to="/Admin/Edit" onClick={}>EDIT</bs.Button> <br/><br/>
                                                <bs.Button to="/Admin/Delete">DELETE</bs.Button>
                                            </td>
                                            {Object.entries(prod).map((item,i)=>{
                                                return(
                                                    <td key={i}>
                                                        {
                                                            item[0]==="product_date"?
                                                            <>{item[1].seconds}</>
                                                            :
                                                            <>{item[1].toString()}</>   
                                                        }
                                                        
                                                    </td>
                                                )
                                            })}
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </bs.Table>
        
                    </div>
                }
            </div>
        )
    }
}

export default withFirebase(AdminProduct)