import React from 'react'


function FunctionalComponent(props){
    // const [bool, setBool] = React.useState(true)
    return(
        <div>
            {/* JSX here */}
        </div>
    )
}


// import React from 'react'
class ClassComponent extends React.Component{
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