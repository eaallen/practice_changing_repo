import React from 'react'
export const AppContext = React.createContext()

import React from 'react'
class AdminCtx extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            bool: true
        }
        this.actions = {
            
        }
    }

    render(){
        return(
            <div>
                <AppContext.Provider value={{...this.state, ...this.actions }}>
                    {this.props.children}
                </AppContext.Provider>
            </div>
        )
    }
}
export default AdminCtx