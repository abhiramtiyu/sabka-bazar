import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./footer.scss"
const Footer=()=>{
    return(
        <>
            <footer className='footer-background'>
                <Container>
                    <Row>
                        <Col>
                            <p className='mt-2'>Copyright &copy; 2011-2018 Sabka Bazar Grocery SUpllies Pvt Ltd</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
export default Footer;