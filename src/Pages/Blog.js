import React, { Component } from 'react';
import { Card, Col, Container, Figure, ListGroup, Row } from 'react-bootstrap';
import jscodeImg from '../assets/jscode.jpg';

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md='9'>
                        <Figure className='m-5'>
                            <Figure.Image
                               width={150}
                               height={150}
                               className='mr-3'
                               src={jscodeImg}
                               alt='JScode'
                            />
                            <Figure.Caption>
                                <h5>Blog post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quae illum placeat quisquam, eaque quia vero neque, itaque ducimus cum 
                                    quasi doloribus aperiam eos dignissimos, eum labore esse. Eligendi, veritatis nulla!
                                </p>
                            </Figure.Caption>
                        </Figure>
                        <Figure className='m-5'>
                            <Figure.Image
                               width={150}
                               height={150}
                               className='mr-3'
                               src={jscodeImg}
                               alt='JScode'
                            />
                            <Figure.Caption>
                                <h5>Blog post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quae illum placeat quisquam, eaque quia vero neque, itaque ducimus cum 
                                    quasi doloribus aperiam eos dignissimos, eum labore esse. Eligendi, veritatis nulla!
                                </p>
                            </Figure.Caption>
                        </Figure>
                        <Figure className='m-5'>
                            <Figure.Image
                               width={150}
                               height={150}
                               className='mr-3'
                               src={jscodeImg}
                               alt='JScode'
                            />
                            <Figure.Caption>
                                <h5>Blog post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quae illum placeat quisquam, eaque quia vero neque, itaque ducimus cum 
                                    quasi doloribus aperiam eos dignissimos, eum labore esse. Eligendi, veritatis nulla!
                                </p>
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col md='3'>
                        <h5 className='text-center mt-5'>Categories</h5>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Pyton</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className='mt-2 bg-light'>
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                    Quae illum placeat quisquam, eaque quia vero neque, itaque ducimus cum 
                                    quasi doloribus aperiam eos dignissimos, eum labore esse. Eligendi, veritatis nulla!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}