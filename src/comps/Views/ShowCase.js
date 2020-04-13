import React from 'react';
import {withFirebase} from '../Firebase'
import * as bs from 'react-bootstrap'
import ItemCard from './ItemCard'
function ShowCase(props) {
  return (
    <div className="">
        <bs.Row>
            <bs.Col>
                <ItemCard title='Lorem' price='$23.33' id={1}/>
            </bs.Col>
            <bs.Col>
                <ItemCard title='Lorem' price='$23.33'id={2}/>
            </bs.Col>
            <bs.Col>
                <ItemCard title='Lorem' price='$23.33'id={3}/>
            </bs.Col>
        </bs.Row>       
    </div>
  );
}

export default withFirebase(ShowCase);
