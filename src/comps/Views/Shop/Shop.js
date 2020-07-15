import React from 'react'
import * as bs from 'react-bootstrap'
import { withFirebase } from '../../Firebase'
import ItemCard from '../ItemCard'
class ShopBase extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: [1,2,3,4,5,7,8]
        }
    }
    componentDidMount = async() =>{
        // get products
    }
    render(){
        return(
            <div>
                <div className="text-center">
                    <h1>
                        The Shop
                    </h1>
                </div>
                <bs.CardColumns>
                    {this.props.context.products.map(item=>{
                        return(
                            <ItemCard product={item} key={item.id}/>
                        )
                    })}
                </bs.CardColumns>
            </div>
        )
    }
}

const Shop = withFirebase(ShopBase)
export default Shop