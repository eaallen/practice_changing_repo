import React from 'react';
import logo from './logo.svg';
import './App.css';
import {withFirebase} from './comps/Firebase'
import * as bs from 'react-bootstrap'
import Home from './comps/Views/Home'
import Top from './comps/Views/Top'
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetail from './comps/Views/ItemDetail';
import ScrollToTop from './constanst/ScrollTop';

function App(props) {
  return (
    <div>
      <bs.Container>
        <div className='text-dark'>
          <bs.Row noGutters>
            <bs.Col>
              <Top/>
            </bs.Col>
          </bs.Row>
        
          <bs.Row >
            <bs.Col>
              <div style={{padding:'1rem'}}>
              <Router>
                <ScrollToTop>
                <Switch>
                  <Route path='/itemDetail/:id'>
                    <ItemDetail/>
                  </Route>
                  <Route path='/'>
                    <Home/>
                  </Route>
                </Switch>
                </ScrollToTop>
              </Router>
              </div>
            </bs.Col>
          </bs.Row>
        </div>
      </bs.Container>
    </div>
  );
}

export default withFirebase(App);
