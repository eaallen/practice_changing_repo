import React from 'react';
import logo from './logo.svg';
import './App.css';
import {withFirebase} from './comps/Firebase'
function Home(props) {
  return (
    <div>
        Hello world
    </div>
  );
}

export default withFirebase(Home);
