import React,{useContext} from 'react';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/esm/Row';
import {CartContext} from "../../context/cartContext";

const Pplproduct=({product,msg})=>{
    
  const context = useContext(CartContext);
  
  const buy =(e)=>{
    context.addProductToCart(e)
  }
  
    return(
        <Col md={9}>
                    <div className="product-section pt-4">
                        <Row>
                        {
                            product.map(products=>{
                                const {name,imageURL,description,price,stock,category,sku,id} = products;
                                return(

                                     <Col md={6} lg={3} sm={6} key={id} className="mb-5 each-prod">
                                          <Card className='border-0 shadow-sm'>
                                          <Card.Title className='product-title mb-3'>{name}</Card.Title>
                                                <Card.Img variant="top" src={imageURL} alt={name}/>
                                                <Card.Body>
                                                    <Card.Text className='desc-texts'>
                                                            {description}
                                                    </Card.Text>
                                                    <div className='d-flex justify-content-sm-between align-items-center'>
                                                        <span className='prod-price'>MRP Rs.{price}</span>
                                                        <Button variant="danger" onClick={()=>buy(products)}>Buy Now</Button>
                                                    </div>
                                                </Card.Body>
                                         </Card>
                                         
                                    </Col>
                                )
                            })
                        }
                            <Col className='text-center pt-5'>
                                {msg? <h2>Didn't Find any product</h2> : null}
                            </Col>
                        </Row>
                    </div>
                  </Col>
    )
}
export default Pplproduct;