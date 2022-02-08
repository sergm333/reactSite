import React, { Component } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';
import logo from './logo192.png'; //путь к рисунку логотипа

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
                    <Container>
                        <Link className='navbar-brand' to='/' style={{display: 'flex', alignItems: 'center'}}>
                            <img
                            src={logo}
                            height='30'
                            width='30'
                            className='d-inline-block align-top'
                            alt='Logo'
                            /> <p style={{margin: '0'}}>React site</p>
                        </Link>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <Link className='nav-link' to='/'>Home</Link>
                                <Link className='nav-link' to='/about'>About</Link>
                                <Link className='nav-link' to='/contacts'>Contacts</Link>
                                <Link className='nav-link' to='/blog'>Blog</Link>
                            </Nav>
                            <Form style={{display: 'flex'}}>
                                <FormControl
                                    type='text'
                                    placeholder='Search'
                                    className='mr-sm-2'
                                />
                                <Button variant='outline-info'>Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>  
                <Routes>                    
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About/>} />
                    <Route exact path="/contacts" element={<Contacts/>} />
                    <Route exact path="/blog" element={<Blog/>} />                    
                </Routes>                  
            </>
        );
    }
}