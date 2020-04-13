import React from 'react';
import {withFirebase} from '../Firebase'
import * as bs from 'react-bootstrap'
function Home(props) {
  return (
    <div className="bg-dark text-light">
        <bs.Row>
            <bs.Col className='text-left'>
                <h4>Kandin's Place</h4>
                            
            </bs.Col>
            <bs.Col>
                <bs.Row>
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
            <bs.Col className='text-right'>
                <bs.Button>
                    Sign in
                </bs.Button>
                            
            </bs.Col>
        </bs.Row>
       
    </div>
  );
}

export default withFirebase(Home);
