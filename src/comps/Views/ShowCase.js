import React from 'react';
import {withFirebase} from '../Firebase'
import * as bs from 'react-bootstrap'
import ItemCard from './ItemCard'
function ShowCase(props) {
    let data =  random_id()

  return (
    <div className="">
        <bs.Jumbotron className='text-dark'>
            <bs.Row>
                <bs.Col md={4}>
                    <ItemCard title='Lorem' price='$23.33' id={data[0]}/>
                </bs.Col>
                <bs.Col md={4}>
                    <ItemCard title='Lorem' price='$23.33'id={data[1]}/>
                </bs.Col>
                <bs.Col md={4}>
                    <ItemCard title='Lorem' price='$23.33'id={data[2]}/>
                </bs.Col>
            </bs.Row>   
        </bs.Jumbotron>    
    </div>
  );
}
const random_id = () =>{
    let arr = [1,2,3,4,5,7,8]
    let arr_id = []
    for(let icount = 1; icount <= 3; icount++){
        let id
        do{
            id = Math.ceil(Math.random()*arr.length)
        }while(arr_id.includes(id))
        arr_id.push(id)
    }
    return arr_id
}
export default withFirebase(ShowCase);
