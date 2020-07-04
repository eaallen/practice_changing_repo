import React from 'react'
import { withFirebase } from '../../Firebase'

export const AppContext = React.createContext()
class AdminCtx extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            bool: true
        }
        this.actions = {
            test:this.test,
            updateUserAuth:this.updateUserAuth
        }
    }
    componentDidMount = async() =>{

    }
    updateUserAuth = () =>{
        this.props.context.updateUserAuth()
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
export default withFirebase(AdminCtx)