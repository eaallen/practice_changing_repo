import React from 'react';
import {withFirebase} from '../../Firebase'
import {Form,Button,Jumbotron} from 'react-bootstrap'
import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const INITIAL_STATE = {    
    email: '',
    student_id: '',
    dw_api: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

class Purchse_form_base extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email,passwordOne } = this.state;
    this.props.context.doCreateUserWithEmailAndPassword(email, passwordOne).then(authUser => {
        this.props.context.updateUserAuth(authUser.user)
        this.setState({ ...INITIAL_STATE });

        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ error });
        this.props.context.doGetQueryRecord('user_info','email','eaallen@byu.edu').then(querySnapshot=>{
        })

      });
    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const isInvalid = this.state.passwordOne !==this.state.passwordTwo || this.state.email ==='' || this.state.passwordOne===''
    const {
        
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;
    return (
        <Jumbotron>
      <div className='customForm'>
          <h3>Sign Up</h3>
        <Form onSubmit={this.onSubmit}>
        <Form.Group>
          <Form.Control 
            
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
        </Form.Group>
        <Form.Group>  
          <Form.Control
            name="passwordOne"
            className='long-input color-box'
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
         </Form.Group>
         <Form.Group>     
          <Form.Control
            name="passwordTwo"
            className='long-input color-box'
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          /> 
          </Form.Group>  
          <Button onClick={this.onSubmit} className='option long-submit' disabled={isInvalid}>
            Sign Up
          </Button>
          {error && <p>{error.message}</p>}

        </Form>
      </div>
      </Jumbotron>
    );
  }
}

const Purchse_form = withRouter(withFirebase(Purchse_form_base));
export default Purchse_form;