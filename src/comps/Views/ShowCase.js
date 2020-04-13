import React from 'react';
import {withFirebase} from '../Firebase'
import * as bs from 'react-bootstrap'
function ShowCase(props) {
  return (
    <div className="">
        <bs.Row>
            <bs.Col>
                p
            </bs.Col>
            <bs.Col>
            p
            </bs.Col>
            <bs.Col>
            p
            </bs.Col>
        </bs.Row>       
    </div>
  );
}

export default withFirebase(ShowCase);
