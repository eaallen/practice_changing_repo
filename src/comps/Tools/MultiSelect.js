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
    render(){
        return(
            <div>
                {Object.entries(this.props.opt).map(item=>{
                    return(
                        <div key={item}>
                            <input type="checkbox" name={item[0]} checked={item[1]} onChange={e=> this.handleChange(e)}/> {item[0].toUpperCase()}
                        </div>
                    )
                })}
            </div>
        )
    }
}