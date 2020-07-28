import React from 'react';
import {withFirebase} from '../Firebase'
import * as bs from 'react-bootstrap'
import { useRouteMatch, /*useHistory,*/Link} from "react-router-dom";
import ShowCase from './ShowCase'
function ItemDetail(props) {
    // const history = useHistory()
    const match = useRouteMatch('/itemDetail/:id')
    const id = match.params.id
    const item = props.context.products.filter(x=> x.id === id)[0] // get the propper item
    return (
        <div style={{padding:'1rem'}}>
            <bs.Row>
                <bs.Col>
                    <div className='image-container'>
                        <img className='image-detail' src={`/img/${2}.jpg`} alt=""/>
                    </div>
                </bs.Col>
                <bs.Col>
                    <div>
                        <h1>{item.product_name}</h1>
                        <p>
                            {item.product_description}
                        </p>
                        <br></br>
                        <p>
                            ${item.product_price}
                        </p>
                        <Link className="btn btn-dark" to={`/purchase/${id}`}>Purchase</Link>
                    </div>
                </bs.Col>
            </bs.Row>
            <h2 className='text-center'> More Top Picks</h2>
            <bs.Row>
                <ShowCase/>
            </bs.Row>
        </div>
    );
}

export default withFirebase(ItemDetail);
