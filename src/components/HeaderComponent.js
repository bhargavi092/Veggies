import React, { Component } from 'react'
import {Jumbotron, Navbar, NavbarBrand,NavbarToggler,Collapse,NavItem,Nav,
Modal,ModalBody,ModalHeader, Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';

 class Header extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isNavOpen:false,
         isModalOpen: false
      }
    }
    toggleNav =()=>{
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    toggleModal =()=>{
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

  render() {
    return (
      <>
           <div>
                <Navbar dark expand='md'>
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className='mr-auto' href='/'><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                    <NavItem>
                                        <NavLink className='nav-link' to='/home'>
                                            <span className='fa fa-home fa-lg'>Home</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className='nav-link' to='/aboutus'>
                                            <span className='fa fa-info fa-lg'>Aboutus</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className='nav-link' to='/menu'>
                                            <span className='fa fa-list fa-lg'>Menu</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className='nav-link' to='/contactus'>
                                            <span className='fa fa-address-card fa-lg'>Contact us</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <Nav className='ml-auto' navbar>
                                    <NavItem>
                                        <Button outline onClick={this.toggleModal}>
                                            <span className='fa fa-sign-in fa-lg'></span>Login
                                        </Button>
                                    </NavItem>
                                </Nav>
                       </Collapse>
                    </div>
                </Navbar>
           </div>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Ristorante con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                
                <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    
                </ModalBody>
            </Modal>
      </>
    )
  }
}
export default Header;


