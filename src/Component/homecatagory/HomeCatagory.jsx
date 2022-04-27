import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import './homecatagory.scss'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const HomeCatagory=({homeCategory})=>{
    return(
        <>
        <section>
            <Container>
                {
                    homeCategory.sort((first,second)=>first.order>second.order ? 1:-1).map((catagory)=>(
                        catagory.order>0 ? 
                            <Row key={catagory.key} className="sorting-alternate mt-3 mb-5 row-shadow">
                            <Col xs={4} md={4} lg={4} className="catagory-image">
                                <Image src={catagory.imageUrl} alt={catagory.name} className='w-100'/>
                            </Col>
                            <Col xs={8} md={8} lg={8} className="catagory-text d-flex align-items-center justify-content-center">
                                <div className='text-center'>
                                    <h2 className='catagory-head'>{catagory.name}</h2>
                                    <p>{catagory.description}</p>
                                    <Link to="/pplpage"  className='btn btn-danger'>Explore {catagory.key}</Link>
                                </div>

                            </Col>
                            </Row> : null
                        )
                    )
                }
            </Container>
        </section>    
             
        </>
    )
}
export default HomeCatagory;