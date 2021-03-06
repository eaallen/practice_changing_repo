import React from 'react'
import ProductCreateFrom from './ProductCreateFrom'
import ProductUpdateFrom from './ProductUpdateFrom'
import { withFirebase } from '../../../Firebase'
import * as bs from 'react-bootstrap'
import produce from 'immer'
import ProductDeleteForm from './ProductDeleteForm'
import ModalForm from '../../../Tools/ModalForm'

class AdminProduct extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            products:null, // an array of objects
            action:"create",
            product:null,  // a single object
            modal_on:false
        }
    }
    componentDidMount = async() =>{
        const info = await this.props.context.doQueryAll('product')
        const info2 = info
        this.setState(state=> produce(state, draft=>{
          draft.products = info2
          draft.modal_on = false
        }))
    }

    action_on_product = (product_obj,type_of_action) =>{
        this.handle_modal()
        if(type_of_action === "edit"){
            this.setState({action:"edit", product:product_obj})
        }else{
            this.setState({action:"delete",product:product_obj})
        }
    }
    form_switch = (action) =>{
        switch(action){
            case "edit":
            return <ProductUpdateFrom product={{...this.state.product}} show_change={()=>this.componentDidMount()}/>
            case "delete":
            return <ProductDeleteForm product={{...this.state.product}} show_change={()=>this.componentDidMount()}/>
            // default:
            // return <ProductCreateFrom/>
        }
    }
    handle_modal = () =>{
        this.setState(state=> produce(state, draft=>{
            draft.modal_on = !draft.modal_on
          }))
    }

    render(){
        console.log(this.props.products,"products")
        if(!this.state.products){
            return(<div>loading</div>)
        }
        return(
            <div>
                <div>
                    {/* <h3>Create Product</h3> */}
                    <ProductCreateFrom show_change={()=>this.componentDidMount()}/>
                    <ModalForm show={this.state.modal_on} handle_modal={()=>this.handle_modal()} title={this.state.action}>
                        {this.form_switch(this.state.action)}    
                    </ModalForm>
                    
                </div>
                {
                    this.state.products.length===0?
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
                                                <bs.Button to="/Admin/Edit" onClick={e=>this.action_on_product(prod,"edit")}>EDIT</bs.Button> <br/><br/>
                                                <bs.Button to="/Admin/Delete" onClick={e=>this.action_on_product(prod,"delete")}>DELETE</bs.Button>
                                            </td>
                                            {Object.entries(prod).map((item,i)=>{
                                                return(
                                                    <td key={i}>
                                                        {
                                                            item[0]==="timestamp"?
                                                            <>{item[1].seconds}</>
                                                            :
                                                            item[0]==="avaliable_sizes"?
                                                            <>
                                                                {  
                                                                    Object.entries(item[1]).filter(x => x[1]===true).map((item)=>{
                                                                        
                                                                        return(
                                                                            <span key={item[0]}>{item[0]} <br/></span> 
                                                                        )
                                                                    })
                                                                }
                                                            </>
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