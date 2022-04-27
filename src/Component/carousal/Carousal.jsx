import React from 'react';
import './carousal.scss';
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Carousal =({banners})=>{
    return(
        <>
        <section>
         {banners.length>0 &&
           <Container>
                <Row>
                    <Col>
                        <Carousel className='clantshadow' variant="dark">
                            {banners.map(bannerImg=>{
                                const {bannerImageUrl,bannerImageAlt,isActive,order,id}=bannerImg
                                return(
                                <Carousel.Item key={id}>
                                    <img className="d-block w-100" src={bannerImageUrl} alt={bannerImageAlt}/>
                                    <Carousel.Caption className='invisible'>
                                        <h1>{bannerImageAlt}</h1>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )})}
                        </Carousel>
                    </Col>
                </Row>
            </Container>}
        </section>
        </>
       
    )
}
export default Carousal;