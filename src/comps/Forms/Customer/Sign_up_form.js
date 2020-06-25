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

class Sign_up_form_base extends React.Component {
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
    
    return (
        <Jumbotron>
            <div className='customForm'>
            <h3>Sign Up</h3>
        <Form onSubmit={this.onSubmit}>
        <Form.Group>
          <Form.Control 
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
            required
          />
        </Form.Group>
        <Form.Group>  
          <Form.Control
            name="passwordOne"
            className='long-input color-box'
            value={this.state.passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
            required
          />
         </Form.Group>
         <Form.Group>     
          <Form.Control
            name="passwordTwo"
            className='long-input color-box'
            value={this.state.passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
            required
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

const Sign_up_form = withRouter(withFirebase(Sign_up_form_base));
export default Sign_up_form;