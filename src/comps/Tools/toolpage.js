import React from 'react';
import {withFirebase} from '../Firebase'
import * as bs from 'react-bootstrap'
function ToolPage(props) {
    const col =  ['customer_email','customer_size']
    const data = [
        ['eli@fake.com','l'],
        ['beth@fake.com','m'],
        ['kandin@fake.com','xs'],
        ['alex@fake.com','l'],
        ['admin@fake.com','xl']
    ]
    const name = 'customer'

  return (
    <div>
       <bs.Row >
            <bs.Col>
            
                <bs.Button onClick={e=>props.context.loadFakeData(col, data, name)} disabled={true}>push fake data</bs.Button>                  
                
                
                
            </bs.Col>
        </bs.Row> 
    </div>
  );
}

export default withFirebase(ToolPage);
