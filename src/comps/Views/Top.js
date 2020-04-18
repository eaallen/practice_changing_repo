import React from 'react';
import {withFirebase} from '../Firebase'
import * as bs from 'react-bootstrap'
function Top(props) {
  return (
    <div className="bg-dark text-light">
        <bs.Container fluid>
            <bs.Row noGutters>
                <bs.Col className='text-left'>
                    <h4>Kandin's Place</h4>
                                
                </bs.Col>
                <bs.Col>
                    <bs.Row noGutters>
                        <bs.Col>
                        Shop
                        </bs.Col>
                        <bs.Col>
                            About
                        </bs.Col>
                        <bs.Col>
                            Contact
                        </bs.Col>
                    </bs.Row>            
                </bs.Col>
                <bs.Col className='text-right' >
                    <bs.Button>
                        Sign in
                    </bs.Button>
                                
                </bs.Col>
            </bs.Row>
        </bs.Container>
    </div>
  );
}

export default withFirebase(Top);
