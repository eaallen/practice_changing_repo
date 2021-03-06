import { withFirebase } from "../../../Firebase"
import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import produce from 'immer'
import MultiSelect from '../../../Tools/MultiSelect'
let arr = []
class ProductUpdateForm extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            //  key:value
            product_name:this.props.product.product_name,
            product_description:this.props.product.product_description,
            image_name: this.props.product.image_name,
            product_color:this.props.product.product_color,
            product_price:this.props.product.product_price,
            product_catagory:this.props.product.product_catagory,
            product_type:this.props.product.product_type,
            avaliable_sizes:this.props.product.avaliable_sizes,
            product_current_size:this.props.product.product_current_size,
            product_reserved:this.props.product.product_reserved,
            product_customize:this.props.product_customize || false,
            timestamp: this.props.timestamp
        }
    }
    handleChange(e){
        console.log(e.target)
        this.setState({[e.target.name]:e.target.value})
    }
    avaliable_sizes(e){
        const val = e.target.value
        
        if(arr.indexOf(val)<0){
            arr.push(val)
        }else{
            const idx = arr.indexOf(val)
            arr.filter(item => item!==val )
        }
        console.log("muilti--->",arr)
    // this.setState(state=> produce(state, draft=>{
    //         if(draft.avaliable_sizes.indexOf(val)<0){
    //             draft.avaliable_sizes.push(val)
    //         }else{
    //             const idx = draft.avaliable_sizes.indexOf(val)
    //             draft.avaliable_sizes.filter(item => item!==val )
    //         }
    //     }))
    }
    change_avaliable_sizes = (val,size_name) => { // val: bool size_name: string
        this.setState(state=> produce(state, draft=>{
            draft.avaliable_sizes[size_name] = val
        }))
        console.log("val", val)
    }
    handleSubmit = async(e) =>{
        e.preventDefault()
        let state = {...this.state}
        state.timestamp = this.state.timestamp
        delete state.file
        console.log("submit!!", this.state, this.props.product.id)
        await this.props.context.doUpdateOneRecord("product", state, this.props.product.id) // collection, obj, id
        await this.props.context.postImg(this.state.file, this.state.image_name)
        this.props.show_change()
    }

    handleImage = (e) =>{
        let files = e.target.files
        let picture_name =  files[0].name
        this.setState({image_name:picture_name, file:files[0]})
    }

    render(){
        console.log("state of ProductUpdateForm{}",this.state)
        return(
            <div>
                <p>
                    Update product <strong>{this.props.product.product_name}</strong>  ({this.props.product.id})
                </p>
                <Row>
                    <Col lg={2}/>
                    <Col lg={8}>
                        <Form onSubmit={e=>this.handleSubmit(e)}>
                            <Form.Group controlId="productName">
                                <Form.Label>Name of Product</Form.Label>
                                <Form.Control 
                                    type="text"
                                    name="product_name"
                                    value={this.state.product_name}
                                    onChange={e => this.handleChange(e)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="productDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" 
                                    rows="3" 
                                    name="product_description"
                                    value={this.state.product_description}
                                    onChange={e => this.handleChange(e)}
                                    required
                                />
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.File 
                                    id="selectImage" 
                                    label="Select Image" 
                                    name="image_name"
                                    onChange={e => this.handleImage(e)}
                                    />  
                            </Form.Group>
                                
                            <Row>
                                <Col lg={6}>
                                    <Form.Group controlId="productColor">
                                        <Form.Label>Color</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Red, Blue, Yellow, etc."
                                            name="product_color"
                                            value={this.state.product_color}
                                            onChange={e => this.handleChange(e)}
                                            required
                                            />
                                    </Form.Group>
                                </Col>

                                <Col lg={6}>
                                    <Form.Group controlId="productPrice">
                                        <Form.Label>Products Price</Form.Label>
                                        <Form.Control 
                                            type="number" 
                                            placeholder="$"
                                            name="product_price"
                                            value={this.state.product_price}
                                            onChange={e => this.handleChange(e)}
                                            required
                                            />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg={6}>
                                    <Form.Group controlId="productCatagory">
                                        <Form.Label>Catagory</Form.Label>
                                            <Form.Control 
                                                as="select"
                                                name="product_catagory"
                                                value={this.state.product_catagory}
                                                onChange={e => this.handleChange(e)}
                                                >
                                            <option>Men</option>
                                            <option>Women</option>
                                            <option>Children</option>
                                            </Form.Control>
                                    </Form.Group>
                                </Col>

                                <Col lg={6}>
                                    <Form.Group controlId="productType">
                                        <Form.Label>Product Type</Form.Label>
                                            <Form.Control 
                                                as="select"
                                                name="product_type"
                                                value={this.state.product_type}
                                                onChange={e => this.handleChange(e)}
                                            >
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
                                    <Form.Group controlId="avaliableSize">
                                        <Form.Label>Available Size:</Form.Label>
                                        <MultiSelect opt={this.state.avaliable_sizes} change_avaliable_sizes={this.change_avaliable_sizes}/>
                                    </Form.Group>
                                </Col>

                                <Col lg={6}>
                                    <Form.Group controlId="currentSize">
                                        <Form.Label>Product Current Size:</Form.Label>
                                            <Form.Control 
                                                as="select"
                                                name="product_current_size"
                                                value={this.state.product_current_size}
                                                onChange={e => this.handleChange(e)}
                                            >
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
                                // type="switch"
                                id="productReserved"
                                label="Is product reserved?"
                                name="product_reserved"
                                value={this.state.product_reserved}
                                onChange={e => this.handleChange(e)}
                            />

                            <Form.Check 
                                // type="switch"
                                id="productCustomize"
                                label="Can size be adjusted?"
                                name="product_customize"
                                // value={this.state.product_customize}
                                value={true}
                                onChange={e => this.handleChange(e)}
                            />
                            
                            <br/>

                            <Button variant="primary" type="submit">
                                Create
                            </Button>
                        </Form>
                    </Col>
                    <Col lg={2}/> 
                </Row>
                {/* JSX here */}
            </div>
        )
    }
}
export default withFirebase(ProductUpdateForm)