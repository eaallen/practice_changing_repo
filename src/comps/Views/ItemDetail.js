import React from 'react';
import {withFirebase} from '../Firebase'
import * as bs from 'react-bootstrap'
import ItemCard from './ItemCard'
import { useRouteMatch, useHistory} from "react-router-dom";
import ShowCase from './ShowCase'
function ItemDetail(props) {
    const history = useHistory()
    const match = useRouteMatch('/itemDetail/:id')
    const id = match.params.id
  return (
    <div style={{padding:'1rem'}}>
        <bs.Row>
            <bs.Col>
                <div className='image-container'>
                    <img className='image-detail' src={`/img/${id}.jpg`}/>
                </div>
            </bs.Col>
            <bs.Col>
                <div>
                    <h1>Title</h1>
                    <p>
                        Aenean efficitur nisl quis augue finibus, laoreet vestibulum tortor dignissim. Ut auctor dolor odio,
                        in sodales turpis vehicula ut. Sed dapibus massa a sodales convallis. Nam tempor ante sed orci posuere,
                        non sollicitudin sapien finibus. 
                        Phasellus scelerisque nec nulla nec iaculis. Sed vulputate condimentum quam, non lacinia neque aliquam scelerisque
                    </p>
                    <br></br>
                    <p>
                        price: $23.33
                    </p>
                    <bs.Button variant='outline-dark'>Purchase</bs.Button>
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
