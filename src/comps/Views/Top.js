import React from 'react';
import {withFirebase} from '../Firebase'
import * as bs from 'react-bootstrap'
function Home(props) {
  return (
    <div className="bg-dark">
       <h4>Blog site</h4>
    </div>
  );
}

export default withFirebase(Home);
