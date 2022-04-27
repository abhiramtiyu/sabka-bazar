import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Link } from 'react-router-dom';
import './pagenotfound.scss'
const Pagenotfound=()=>{
    return(
        <>
        <Container>
            <Row>
                <Col md="12" className='text-center'>
                            <h1>Oops!</h1>
                            <h2>
                                404 Not Found</h2>
                            <div className="error-details">
                                Sorry, an error has occured, Requested page not found!
                            </div>
                            <div className="error-actions">
                            <Link to="/" className="btn btn-primary btn-lg">
                                    Take Me Home </Link>
                            </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Pagenotfound;