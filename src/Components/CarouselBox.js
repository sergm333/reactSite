import React, { Component } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import fairytailoneImg from '../assets/fairytailone.jpg';
import fairytailtwoImg from '../assets/fairytailtwo.jpg';
import fairytailthreeImg from '../assets/fairytailthree.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
            <Container>
                <Row className='justify-content-center'>
                    <Carousel style={{maxWidth: '1000px', width: '100%', marginTop: '50px'}}>
                        <Carousel.Item>
                            <img
                            className='d-block'
                            src={fairytailoneImg}
                            alt='Fairytail'
                            style={{width: '100%'}}
                            />
                            <Carousel.Caption>
                                <h3>Fairytail image</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipising elit.Quidem, est?</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className='d-block'
                            src={fairytailtwoImg}
                            alt='Fairytail'
                            style={{width: '100%'}}
                            />
                            <Carousel.Caption>
                                <h3>Fairytail image</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipising elit.Quidem, est?</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                            className='d-block'
                            src={fairytailthreeImg}
                            alt='Fairytail'
                            style={{width: '100%'}}
                            />
                            <Carousel.Caption>
                                <h3>Fairytail image</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipising elit.Quidem, est?</p>
                            </Carousel.Caption>
                        </Carousel.Item>                    
                    </Carousel>
                </Row>
            </Container>
        )
    }
}