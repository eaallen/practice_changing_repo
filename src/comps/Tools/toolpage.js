import React from 'react';
import {withFirebase} from '../Firebase'
import * as bs from 'react-bootstrap'
function ToolPage(props) {
    const col =  []
    const data = []
    const name = null

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
