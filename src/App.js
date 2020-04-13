import React from 'react';
import logo from './logo.svg';
import './App.css';
import {withFirebase} from './comps/Firebase'
import * as bs from 'react-bootstrap'
import Home from './comps/Views/Home'
import Top from './comps/Views/Top'

function App(props) {
  return (
    <div>
      <bs.Container>
        <div className='bg-dark text-light'>
          <bs.Row noGutters>
            <bs.Col>
              <Top/>
            </bs.Col>
          </bs.Row>
        
          <bs.Row noGutters>
            <bs.Col>
              <Home/>
            </bs.Col>
          </bs.Row>
        </div>
      </bs.Container>
    </div>
  );
}

export default withFirebase(App);
