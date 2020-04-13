import React from 'react';
import {withFirebase} from '../Firebase'
import * as bs from 'react-bootstrap'
function ItemCard(props) {
  return (
    <div className="text-center card">
        <div className='card-head'>
            {props.title}
        </div>   
        <div className='card-body'>
            <img className='image item_img' src={`/img/${props.id}.jpg`}/>
            
        </div>   
        <div className='card-foot'>
            {props.price}
        </div>
    </div>
  );
}

export default withFirebase(ItemCard);
