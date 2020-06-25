import React from 'react'
import { useRouteMatch, /*useHistory,*/Link} from "react-router-dom";
import Purchase_form from '../Forms/Customer/Purchase_form'
function Purchase(props){
    const match = useRouteMatch('/purchase/:id')
    const id = match.params.id

    return(
        <div>
            this is the purchase page the product id is <b>{id}</b>
            <br/>
            <br/>
            <br/>
            <Purchase_form />
        </div>
    )
}

export default Purchase