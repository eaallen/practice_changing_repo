import React from 'react'
import { withFirebase } from '../../../Firebase'
import * as bs from 'react-bootstrap'
import produce from 'immer'
import ModalForm from '../../../Tools/ModalForm'
import AddressUpdateFrom from './AddressUpdateFrom'
import AddressDeleteForm from './AddressDeleteForm'
import AddressCreateFrom from './AddressCreateFrom'
let date = new Date()
class AdminAddress extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            addresses:null, // an array of objects
            action:"create",
            address:null,  // a single object
            modal_on:false
        }
    }
    componentDidMount = async() =>{
        const cust = await this.props.context.doQueryAll('customer')
        const arr = []
        for(const customer of cust){
            let arr_of_address = await this.props.context.doQueryAll(`customer/${customer.id}/address`)
            for(const address of arr_of_address){
                address.customer_email=customer.customer_email
                arr.push(address)
            }
        }
        this.setState(state=> produce(state, draft=>{
          draft.addresses = arr
          draft.modal_on = false
        }))
    }

    action_on_obj = async(obj,type_of_action) =>{
        console.log("----------------->", obj)
        this.handle_modal()
        if(type_of_action === "edit"){
            await this.setState({action:"edit", address:obj})
        }else{
            await this.setState({action:"delete",address:obj})
        }
    }
    form_switch = (action) =>{
        console.log("!!!!!!!@#$%^&*",this.state.address)
        switch(action){
            case "edit":
            return <AddressCreateFrom address={this.state.address} show_change={()=>this.componentDidMount()}/>
            case "delete":
            return <AddressDeleteForm address={this.state.address} show_change={()=>this.componentDidMount()}/>
            // default:
            // return <CustomerCreateFrom/>
        }
    }
    handle_modal = () =>{
        this.setState(state=> produce(state, draft=>{
            draft.modal_on = !draft.modal_on
        }))
    }

    render(){
        console.log(this.state.addresses,"address")
       
        return(
            <div>
                <div>
                    {/* <h3>Create customer</h3> */}
                    <AddressCreateFrom address show_change={()=>this.componentDidMount()}/>
                    <ModalForm show={this.state.modal_on} handle_modal={()=>this.handle_modal()} title={this.state.action}>
                        {this.form_switch(this.state.action)}    
                    </ModalForm>
                    
                </div>
                {
                    !this.state.addresses?
                    <p>Loading...</p>
                    :
                    <div>
                        <h3>table for Read, Update, Delete</h3>
                        <bs.Table striped bordered hover size="sm" responsive>
                            <thead>
                                <tr>
                                    <th>Actions</th>
                                    {Object.keys(this.state.addresses[0]).map((prod_col, idx) =>{
                                        return(
                                        <th key ={idx}>
                                                {prod_col}
                                        </th> 
                                        )
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.addresses.map(prod=>{
                                    return(
                                        <tr key={prod.id} className="table-data">
                                            <td className="text-center">
                                                <bs.Button onClick={e=>this.action_on_obj(prod,"edit")}>EDIT</bs.Button> <br/><br/>
                                                <bs.Button onClick={e=>this.action_on_obj(prod,"delete")}>DELETE</bs.Button>
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
        
                    </div>
                }
            </div>
        )
    }
}

export default withFirebase(AdminAddress)