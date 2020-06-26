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

    render(){
        return(
            <div>
                <div className="text-center">
                    <h1>
                        The Shop
                    </h1>
                </div>
                <bs.CardColumns>
                    {this.state.data.map(item=>{
                        return(
                            <ItemCard title='Lorem' price='$23.33'id={item} key={item}/>
                        )
                    })}
                </bs.CardColumns>
            </div>
        )
    }
}

const Shop = withFirebase(ShopBase)
export default Shop