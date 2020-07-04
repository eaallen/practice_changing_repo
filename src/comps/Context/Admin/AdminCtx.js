import React from 'react'
import Firebase from '../../Firebase'
export const AppContext = React.createContext()
class AdminCtx extends Firebase{
    constructor(props){
        super(props)
        
        this.state = {
            bool: true
        }
        this.actions = {
            test:this.test,
        }
    }
    componentDidMount = async() =>{

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