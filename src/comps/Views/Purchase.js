import React from 'react'
import { useRouteMatch, /*useHistory,*/} from "react-router-dom";
import PurchaseForm from '../Forms/Customer/PurchaseForm'
function Purchase(props){
    const match = useRouteMatch('/purchase/:id')
    const id = match.params.id

    return(
        <div>
            this is the purchase page the product id is <b>{id}</b>
            <br/>
            <br/>
            <br/>
            <PurchaseForm />
        </div>
    )
}

export default Purchase