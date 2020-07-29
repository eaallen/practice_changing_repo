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
                <bs.Col lg={6}>
                    <div className='image-container'>
                        <img className='image-detail' src={item.image_name} alt=""/>
                    </div>
                </bs.Col>
                <bs.Col lg={6}>
                    <div>
                        <h1>{item.product_name}</h1>
                        <p>
                            {item.product_description}
                        </p>
                        <br/>
                        <bs.Form.Label>Size</bs.Form.Label>
                        <bs.Form.Control 
                            as="select"
                            name="product_catagory"
                        >
                            {Object.entries(item.avaliable_sizes).map(elem => {
                                if(elem[1]){
                                    return(
                                        <option key={elem[0]}>{elem[0].toUpperCase()}</option>
                                    )
                                }
                            })}
                        </bs.Form.Control>

                        <br></br>
                        <p>
                            Price: ${item.product_price}
                        </p>
                        <Link className="btn btn-dark" to={`/purchase/${id}`}>Add to Cart</Link>
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
