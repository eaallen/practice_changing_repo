import React from 'react';
import {withFirebase} from '../Firebase'
import { Link } from 'react-router-dom';
function ItemCard(props) {
  return (
    <Link to={`/ItemDetail/${props.id}`}>
      <div className="text-center card">
          <div className='card-head'>
              {props.title}
          </div>   
          <div className='card-body'>
              <img className='image item_img' src={`/img/${props.id}.jpg`} alt=""/>            
          </div>   
          <div className='card-foot'>
              {props.price}
          </div>
      </div>
    </Link>
  );
}

export default withFirebase(ItemCard);
