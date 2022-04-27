import React from 'react';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
const Pplsidebar=({catagory,sortCatagory})=>{
    return(
                <Col md={3} className="product-sidebar">
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                    <ul className="nav nav-pills flex-column mb-auto">
                        {
                            catagory.map(catagory=>(
                                <li className="nav-item" key={catagory.id}>
                                     <Button variant="link" 
                                     className='text-decoration-none text-secondary font-weight-bold catagory-text' 
                                     onClick={()=>sortCatagory(catagory.id)}>
                                         {catagory.name}
                                     </Button>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                  </Col>
    )
}
export default Pplsidebar;