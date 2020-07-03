import React from 'react'
import CustomerCreateFrom from './CustomerCreateFrom'
import CustomerUpdateFrom from './CustomerUpdateFrom'
import { withFirebase } from '../../../Firebase'
import * as bs from 'react-bootstrap'
import produce from 'immer'
import CustomerDeleteForm from './CustomerDeleteForm'
import ModalForm from '../../../Tools/ModalForm'

class AdminCustomer extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            customers:null, // an array of objects
            action:"create",
            customer:null,  // a single object
            modal_on:false
        }
    }
    componentDidMount = async() =>{
        const info = await this.props.context.doQueryAll('customer')
        const info2 = info
        this.setState(state=> produce(state, draft=>{
          draft.customers = info2
          draft.modal_on = false
        }))
    }

    action_on_customer = (customer_obj,type_of_action) =>{
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
            return <CustomerUpdateFrom customer={this.state.customer} show_change={()=>this.componentDidMount()}/>
            case "delete":
            return <CustomerDeleteForm customer={this.state.customer} show_change={()=>this.componentDidMount()}/>
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
        console.log(this.state.customers,"customers")
        
        return(
            <div>
                <div>
                    {/* <h3>Create customer</h3> */}
                    <CustomerCreateFrom/>
                    <ModalForm show={this.state.modal_on} handle_modal={()=>this.handle_modal()} title={this.state.action}>
                        {this.form_switch(this.state.action)}    
                    </ModalForm>
                    
                </div>
                {
                    !this.state.customers?
                    <p>Loading...</p>
                    :
                    <div>
                        <h3>table for Read, Update, Delete</h3>
                        <bs.Table striped bordered hover size="sm" responsive>
                            <thead>
                                <tr>
                                    <th>Actions</th>
                                    {Object.keys(this.state.customers[0]).map((prod_col, idx) =>{
                                        return(
                                        <th key ={idx}>
                                                {prod_col}
                                        </th> 
                                        )
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.customers.map(prod=>{
                                    return(
                                        <tr key={prod.id} className="table-data">
                                            <td className="text-center">
                                                <bs.Button to="/Admin/Edit" onClick={e=>this.action_on_customer(prod,"edit")}>EDIT</bs.Button> <br/><br/>
                                                <bs.Button to="/Admin/Delete" onClick={e=>this.action_on_customer(prod,"delete")}>DELETE</bs.Button><br/>
                                                <bs.Button onClick={e=>{this.props.context.doCreateOneRecord("customer",prod); this.componentDidMount()}}>CLONE</bs.Button>
                                            </td>
                                            {Object.entries(prod).map((item,i)=>{
                                                return(
                                                    <td key={i}>
                                                        {
                                                            item[0]==="customer_date"?
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

export default withFirebase(AdminCustomer)