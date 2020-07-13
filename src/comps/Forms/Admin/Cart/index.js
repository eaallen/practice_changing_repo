import React from 'react'
import CartCreateFrom from './CartCreateFrom'
import CartUpdateFrom from './CartUpdateFrom'
import { withFirebase } from '../../../Firebase'
import * as bs from 'react-bootstrap'
import produce from 'immer'
import CartDeleteForm from './CartDeleteForm'
import ModalForm from '../../../Tools/ModalForm'
let date = new Date()
class AdminCart extends React.Component{
    constructor(props){
        super(props)
        // this.date = new Date()
        this.state ={
            carts:null, // an array of objects
            action:"create",
            cart:null,  // a single object
            modal_on:false
        }
    }
    componentDidMount = async() =>{
        const info = await this.props.context.doQueryAll('cart')
        this.setState(state=> produce(state, draft=>{
          draft.carts = info
          draft.modal_on = false
        }))
    }

    action_on_one = (customer_obj,type_of_action) =>{
        this.handle_modal()
        if(type_of_action === "edit"){
            this.setState({action:"edit", customer:customer_obj})
        }else{
            this.setState({action:"delete",customer:customer_obj})
        }
    }
    form_switch = (action) =>{
        switch(action){
            case "edit":
            return <CartUpdateFrom customer={this.state.cart} show_change={()=>this.componentDidMount()}/>
            case "delete":
            return <CartDeleteForm customer={this.state.cart} show_change={()=>this.componentDidMount()}/>
            // default:
            // return <CartCreateFrom/>
        }
    }
    handle_modal = () =>{
        this.setState(state=> produce(state, draft=>{
            draft.modal_on = !draft.modal_on
          }))
    }
    cloneIt =async(data) =>{
        const obj = {
            customer_email:data.cart_email,
            customer_size:data.cart_size,
        }
        await this.props.context.doCreateOneRecord("customer",obj)
        this.componentDidMount()
    }

    render(){
        console.log(this.state.carts,"customers")
        if(!this.state.carts){
            return(<div>loading</div>)
        }
        return(
            <div>
                <div>
                    {/* <h3>Create customer</h3> */}
                    <CartCreateFrom/>
                    <ModalForm show={this.state.modal_on} handle_modal={()=>this.handle_modal()} title={this.state.action}>
                        {this.form_switch(this.state.action)}    
                    </ModalForm>
                    
                </div>
                {
                    !this.state.carts?
                    <p>Loading...</p>
                    :
                    <div>
                        <h3>table for Read, Update, Delete</h3>
                        {
                            this.state.carts.length===0?
                            <p>loading...</p>
                            :
                            <>
                            <bs.Table striped bordered hover size="sm" responsive>
                                <thead>
                                    <tr>
                                        <th>Actions</th>
                                        {Object.keys(this.state.carts[0]).map((prod_col, idx) =>{
                                            return(
                                            <th key ={idx}>
                                                    {prod_col}
                                            </th> 
                                            )
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.carts.map(prod=>{
                                        return(
                                            <tr key={prod.id} className="table-data">
                                                <td className="text-center">
                                                    <bs.Button to="/Admin/Edit" onClick={e=>this.action_on_one(prod,"edit")}>EDIT</bs.Button> <br/><br/>
                                                    <bs.Button to="/Admin/Delete" onClick={e=>this.action_on_one(prod,"delete")}>DELETE</bs.Button><br/>
                                                    <bs.Button onClick={e=>this.cloneIt(prod)}>CLONE</bs.Button>
                                                </td>
                                                {Object.entries(prod).map((item,i)=>{
                                                    return(
                                                        <td key={i}>
                                                            {
                                                                item[0]==="timestamp"?
                                                                <>{date.toLocaleDateString(30*1000)}</>
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
                            </>
                        }
        
                    </div>
                }
            </div>
        )
    }
}

export default withFirebase(AdminCart)