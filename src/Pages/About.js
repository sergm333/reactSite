import React, { Component } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import galleryoneImg from '../assets/galleryone.jpg';
import gallerytwoImg from '../assets/gallerytwo.jpg';
import gallerythreeImg from '../assets/gallerythree.jpg';
import galleryfourImg from '../assets/galleryfour.jpg';
import galleryfiveImg from '../assets/galleryfive.jpg';

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
                    <Row style={{marginTop: '50px'}}>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column'>
                                <Nav.Item style={{cursor: 'pointer'}}>
                                    <Nav.Link eventKey='first'>Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item style={{cursor: 'pointer'}}>
                                    <Nav.Link eventKey='second'>Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item style={{cursor: 'pointer'}}>
                                    <Nav.Link eventKey='third'>Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item style={{cursor: 'pointer'}}>
                                    <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item style={{cursor: 'pointer'}}>
                                    <Nav.Link eventKey='fifht'>Libraries</Nav.Link>
                                </Nav.Item> 
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <img style={{maxWidth: '100%', width: '100%'}} src={galleryoneImg}/>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quae illum placeat quisquam, eaque quia vero neque, itaque ducimus cum 
                                    quasi doloribus aperiam eos dignissimos, eum labore esse. Eligendi, veritatis nulla! 
                                    </p>  
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <img style={{maxWidth: '100%', width: '100%'}} src={gallerytwoImg}/>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quae illum placeat quisquam, eaque quia vero neque, itaque ducimus cum 
                                    quasi doloribus aperiam eos dignissimos, eum labore esse. Eligendi, veritatis nulla! 
                                    </p>  
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    <img style={{maxWidth: '100%', width: '100%'}} src={gallerythreeImg}/>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quae illum placeat quisquam, eaque quia vero neque, itaque ducimus cum 
                                    quasi doloribus aperiam eos dignissimos, eum labore esse. Eligendi, veritatis nulla! 
                                    </p>  
                                </Tab.Pane>
                                <Tab.Pane eventKey='fourth'>
                                    <img style={{maxWidth: '100%', width: '100%'}} src={galleryfourImg}/>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quae illum placeat quisquam, eaque quia vero neque, itaque ducimus cum 
                                    quasi doloribus aperiam eos dignissimos, eum labore esse. Eligendi, veritatis nulla! 
                                    </p>  
                                </Tab.Pane>
                                <Tab.Pane eventKey='fifht'>
                                    <img style={{maxWidth: '100%', width: '100%'}} src={galleryfiveImg}/>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quae illum placeat quisquam, eaque quia vero neque, itaque ducimus cum 
                                    quasi doloribus aperiam eos dignissimos, eum labore esse. Eligendi, veritatis nulla! 
                                    </p>  
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}