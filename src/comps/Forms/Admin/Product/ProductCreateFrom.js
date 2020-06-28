import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import {withFirebase} from './../../../Firebase'
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
                <Row>
                    <Col lg={2}/>
                    <Col lg={8}>
                        <Form>
                            <Form.Group controlId="productName">
                                <Form.Label>Name of Product</Form.Label>
                                <Form.Control type="text"/>
                            </Form.Group>

                            <Form.Group controlId="productDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                            
                            
                                
                                    <Form.Group>
                                        <Form.File id="selectImage" label="Select Image" />  
                                    </Form.Group>
                                
                            <Row>
                                <Col lg={6}>
                                    <Form.Group controlId="productColor">
                                        <Form.Label>Color</Form.Label>
                                        <Form.Control type="text" placeholder="Red, Blue, Yellow, etc." />
                                    </Form.Group>
                                </Col>

                                <Col lg={6}>
                                    <Form.Group controlId="productPrice">
                                        <Form.Label>Products Price</Form.Label>
                                        <Form.Control type="number" placeholder="$"/>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={6}>
                                    <Form.Group controlId="productCatagory">
                                        <Form.Label>Catagory</Form.Label>
                                            <Form.Control as="select">
                                            <option>Men</option>
                                            <option>Women</option>
                                            <option>Children</option>
                                            </Form.Control>
                                    </Form.Group>
                                </Col>

                                <Col lg={6}>
                                    <Form.Group controlId="productType">
                                        <Form.Label>Product Type</Form.Label>
                                            <Form.Control as="select">
                                            <option>Shirt</option>
                                            <option>Pants</option>
                                            <option>Dress</option>
                                            <option>Sandles</option>
                                            </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={6}>
                                    <Form.Group controlId="availableSize">
                                        <Form.Label>Available Size:</Form.Label>
                                            <Form.Control as="select" multiple>
                                                <option>XS</option>
                                                <option>S</option>
                                                <option>M</option>
                                                <option>L</option>
                                                <option>XL</option>
                                            </Form.Control>
                                    </Form.Group>
                                </Col>

                                <Col lg={6}>
                                    <Form.Group controlId="currentSize">
                                        <Form.Label>Product Current Size:</Form.Label>
                                            <Form.Control as="select">
                                                <option>XS</option>
                                                <option>S</option>
                                                <option>M</option>
                                                <option>L</option>
                                                <option>XL</option>
                                            </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Check 
                                    type="switch"
                                    id="productReserved"
                                    label="Is product reserved?"
                                    />

                            <Form.Check 
                                type="switch"
                                id="productCustomize"
                                label="Can size be adjusted?"
                            />

                        </Form>
                    </Col>
                    <Col lg={2}/> 
                </Row>
            </div>
        )
    }
}
export default withFirebase(ProductCreateForm)