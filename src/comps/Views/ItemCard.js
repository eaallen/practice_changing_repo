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
  
  componentDidMount = async() =>{
    let image = await this.props.context.getImgURL(this.props.product.image_name)
    this.setState({img:image})
  }

  render(){
    if(!this.state.img){
      return<div>loading</div>
    }
    return (
      <Link to={`/ItemDetail/${this.props.product.id}`}>
        <div className="text-center card">
            <div className='card-head'>
                {this.props.product.product_name}
            </div>   
            <div className='card-body'>
                <img className='image item_img' src={this.state.img} alt="IMG HERE <<<"/>            
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
