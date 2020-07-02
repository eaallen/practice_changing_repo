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
        this.props.avaliable_sizes(val,name)
    }
    render(){
        return(
            <div>
                {this.props.opt.map(item=>{
                    return(
                        <div key={item}>
                            <input type="checkbox" name={item} onChange={e=> this.handleChange(e)}/> {item.toUpperCase()}
                        </div>
                    )
                })}
            </div>
        )
    }
}