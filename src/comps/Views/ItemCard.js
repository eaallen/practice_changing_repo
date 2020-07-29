import React from 'react';
import {withFirebase} from '../Firebase'
import { Link } from 'react-router-dom';
class ItemCard extends React.Component {
  constructor(props){
    super(props)
    this.state={
      img: null,
    }
  }

  render(){
    return (
      <Link to={`/ItemDetail/${this.props.product.id}`}>
        <div className="text-center card">
            <div className='card-head'>
                {this.props.product.product_name}
            </div>   
            <div className='card-body'>
                <img className='image item_img' src={this.props.product.image_name} alt="IMG HERE <<<"/>            
            </div>   
            <div className='card-foot'>
                ${this.props.product.product_price}
            </div>
        </div>
      </Link>
    );
  }
}

export default withFirebase(ItemCard);
