import React from 'react'
export default class MultiSelect extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            bool: true
        }
    }
    handleChange = (e) =>{
        console.log("multi!", e.target.checked)
        const val = e.target.checked
        const name = e.target.name
        this.props.change_avaliable_sizes(val,name)
    }

    handleChange_cart = (e) =>{
        console.log("multi!", e.target.checked)
        const val = e.target.checked
        const id = e.target.id
        this.props.change_selected_products(val,id)
    }
    render(){
        if(this.props.cart){
            return(
                <div>
                    {Object.values(this.props.opt).map(item=>{
                        console.log("item---->", item)
                        return(
                            <div key={item.product.id+"key"}>
                                <input 
                                    type="checkbox" 
                                    name={item.product.product_name}
                                    id={item.product.id} 
                                    checked={item.selected} 
                                    onChange={e=> this.handleChange_cart(e)}
                                /> {item.product.product_name} 
                                 
                            </div>
                        )
                    })}
                </div>
            )
    
        }
        return(
            <div>
                {Object.entries(this.props.opt).map(item=>{
                    return(
                        <div key={item}>
                            <input 
                                type="checkbox" 
                                name={item[0]} 
                                checked={item[1]} 
                                onChange={e=> this.handleChange(e)}
                            /> 
                            {item[0].toUpperCase()}
                        </div>
                    )
                })}
            </div>
        )
    }
}