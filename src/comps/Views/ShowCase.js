import React from 'react';
import {withFirebase} from '../Firebase'
import * as bs from 'react-bootstrap'
import ItemCard from './ItemCard'
function ShowCase(props) {
    let data =  random_id(props.context.products)
    console.log("affter random_id")
  return (
    <div className="">
        <bs.Jumbotron className='text-dark'>
            <bs.Row>
                {data.map((item,idx)=>{
                    return(
                        <bs.Col md={4} key={idx}>
                            <ItemCard product={item}/>
                        </bs.Col>
                    )
                })}
            </bs.Row>   
        </bs.Jumbotron>    
    </div>
  );
}
const random_id = (array_of_products) =>{
    console.log("Arr------>",array_of_products)
    let arr = array_of_products
    // let arr_id = []
    // for(let icount = 1; icount <= 3; icount++){
    //     let id
    //     do{
    //         id = Math.ceil(Math.random()*arr.length)
    //     }while(arr_id.includes(id))
    //     arr_id.push(id)
    // }
    return arr
}
export default withFirebase(ShowCase);
