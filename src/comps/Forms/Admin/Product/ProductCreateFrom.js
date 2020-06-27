import React from 'react'
import { Form } from 'react-bootstrap'
class ProductCreateForm extends React.Component{
    constructor(props){
        super(props)
        
        // this.state = {
        //     bool: true
        // }
    }

    render(){
        return(
            <div>
                <Form>
                    <Form.Group>
                        <Form.Control
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control
                            type="text"
                        />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}
export default withFirebase(ProductCreateForm)