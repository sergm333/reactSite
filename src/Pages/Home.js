import React, { Component } from 'react';
import { Container, Card, CardGroup, Button } from 'react-bootstrap';
import CarouselBox from '../Components/CarouselBox';
import teamoneImg from '../assets/teamone.jpg';
import teamtwoImg from '../assets/teamtwo.jpg';
import teamthreeImg from '../assets/teamthree.jpg';

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
                <Container>
                    <h2 className='text-center m-4'>Our team</h2>
                    <CardGroup className='m-4'>
                        <Card bg='warning'>
                            <Card.Img
                                variant='top'
                                src={teamoneImg}
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Voluptas fugiat laboriasam dicta.
                                </Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg='info'>                            
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Voluptas fugiat laboriasam dicta.
                                </Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>
                            <Card.Img
                                variant='bottom'
                                src={teamtwoImg}
                            />
                        </Card>
                        <Card bg='success'>
                            <Card.Img
                                variant='top'
                                src={teamthreeImg}
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Voluptas fugiat laboriasam dicta.
                                </Card.Text>
                                <Button variant='primary'>About team</Button>
                            </Card.Body>
                        </Card>                        
                    </CardGroup>
                </Container>
           </> 
        );
    }
}