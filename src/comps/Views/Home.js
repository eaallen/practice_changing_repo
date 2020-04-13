import React from 'react';
import {withFirebase} from '../Firebase'
import * as bs from 'react-bootstrap'
let images = [1,2,3]
function Home(props) {
    const [img,setImg] = React.useState(1)
    // setInterval(_next(), 1000)
    const _next = ()=>{
        console.log('before',images)
        let holder = images.shift()
        console.log('during',holder, images)        
        images.push(holder)
        console.log('after',images)
        setImg(images[0])
    }
  return (
    <div>
        <bs.Row>
            <bs.Col>
                <div className='home-img'>
                    <img className='image' src={`/img/${img}.jpg`} />
                </div>
                <div className='btn btn-primary pos' onClick={e=>_next(e)}>
                    next>
                </div>
            </bs.Col>
        </bs.Row>
       <bs.Row >
            <bs.Col>
                <h1>
                    Research                     
                </h1>
                
                <p>
                Get a better understanding of the most and least successful campaigns on record. Use the pre-made search options to 
                quickly see visual over views and details about outliers. Use the data provided to execute a successful GoFundMe campaign.  
                </p>
                
            </bs.Col>
            <bs.Col>
                <h1>
                    Predict
                </h1>
                <p>
                Learn how a future GoFundME campaign might fair when published. Our Machine Learning algorithms take the parameters
                    provided and return a predicted amount of donors and the total funds that could be raised.                     
                </p>
            </bs.Col>
            <bs.Col>
                <h1>
                    SandBox SQL
                </h1>
                <p>
                Explore the data with an unlimited amount of possibilities. SandBox SQL gives you the freedom of writing SQL with out worrying about UPDATE, DROP, etc.
                This is possible because SandBox SQL was purposely designed for data viewing only.                     
                </p>
            </bs.Col>
        </bs.Row> 
        <bs.Jumbotron>
           <h1>
               Clothes with a story.
           </h1>
        </bs.Jumbotron>
        <bs.Row  className='center-bs.Row'>
            <bs.Col>
                <h1>
                   Made with Love                        
                </h1>
              
                <p>
                Get a better understanding of the most and least successful campaigns on record. Use the pre-made search options to 
                quickly see visual over views and details about outliers. Use the data provided to execute a successful GoFundMe campaign.  
                </p>
             
            </bs.Col>
            <bs.Col>
                <h1>
                   Real History
                </h1>
                <p>
                Learn how a future GoFundME campaign might fair when published. Our Machine Learning algorithms take the parameters
                    provided and return a predicted amount of donors and the total funds that could be raised.                     
                </p>
            </bs.Col>
            <bs.Col>
                <h1>
                   YeeeHaaaw
                </h1>
                <p>
                Explore the data with an unlimited amount of possibilities. SandBox SQL gives you the freedom of writing SQL with out worrying about UPDATE, DROP, etc.
                This is possible because SandBox SQL was purposely designed for data viewing only.                     
                </p>
            </bs.Col>
        </bs.Row> 


    </div>
  );
}

export default withFirebase(Home);
