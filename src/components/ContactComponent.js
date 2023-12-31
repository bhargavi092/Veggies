import React ,{Component} from 'react';
import { Breadcrumb,BreadcrumbItem,Form,FormGroup,Label,Input,Col, Row ,Button,strong ,FormFeedback} from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstname:'',
         lastname:'',
         telnum:'',
         email:'',
         agree:false,
         contactType: 'Tel.',
         message:'',
         touched :{
            firstname:false,
            lastname:false,
            telnum:false,
            email:false  
         }
      };
      this.handleBlur=this.handleBlur.bind(this);
    }

    handleInputChange = (event)=>{
        const value=event.target.type ==='checkbox'? event.target.checked : event.target.value;
        const name = event.target.name;

        this.setState({
            [name]:value
        })
    }

    handleSubmit= (event)=>{
        console.log('Current State is:'+ JSON.stringify(this.state));
        alert('Current State is:' + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur =(field)=>(event)=>{
        this.setState({
            touched :{ ...this.state.touched,[field]:true}
        })
    }

    validate(firstname,lastname,telnum,email){
        const errors ={
            firstname:'',
            lastname:'',
            telnum:'',
            email:''
        };
        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname='First Name should be >= 3 characters';
        else if ( this.state.touched.firstname && firstname.length > 15)
            errors.firstname='First Name should be <= 15 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 15)
            errors.lastname = 'Last Name should be <= 15 characters';

        const reg =/^\d[6-9]\d{9}$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if (this.state.touched.email && !regex.test(email))
            errors.email = 'email should be valid';
        
        return errors;
    }

    render(){
        const errors = this.validate(this.state.firstname,this.state.lastname,this.state.telnum,this.state.email);

        return(
            <div className="container">
                
                <div className='row'>
                    <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem  active>contact us</BreadcrumbItem>
                    </Breadcrumb>
                        <div className='col-12'>
                            <h3>Contact Us</h3>
                            <hr/>
                        </div>
                </div>
    
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className='row row-content'>
                    <div className='col-12'>
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className='col-12 col-md-9'>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor='firstname' md={2}>First name</Label>
                                <Col md={10}>
                                    <Input type='text' id='firstname' name='firstname' 
                                    placeholder="First Name" value={this.state.firstname} 
                                    valid= {errors.firstname === ''}
                                    invalid ={errors.firstname !==''}
                                    onBlur={this.handleBlur('firstname')}
                                    onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='lastname' md={2}>Last name</Label>
                                <Col md={10}>
                                    <Input type='text' id='lastname' name='lastname' 
                                    placeholder="Last Name" value={this.state.lastname} 
                                    valid= {errors.lastname === ''}
                                    invalid ={errors.lastname !==''}
                                    onBlur={this.handleBlur('lastname')}
                                    onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='telnum' md={2}> Contact Tel number</Label>
                                <Col md={10}>
                                    <Input type='tel' id='telnum' name='telnum' 
                                    placeholder="Tel. number" value={this.state.telnum} 
                                    valid={errors.telnum ===''}
                                     invalid={errors.telnum !== ''}
                                     onBlur={this.handleBlur('telnum')}
                                    onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.telnum}</FormFeedback>
                                   
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor='email' md={2}> Email</Label>
                                <Col md={10}>
                                    <Input type='email' id='email' name='email' 
                                    placeholder="Email" value={this.state.email}
                                    valid={errors.email ===''}
                                     invalid={errors.email !== ''}
                                     onBlur={this.handleBlur('email')}
                                    onChange={this.handleInputChange}  />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6 , offset:1}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name='agree' 
                                            checked={this.state.agree} 
                                            onChange={this.handleInputChange} />{ ''}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:2 , offset:1}}>
                                    <Input type='select'  name='contactType' 
                                     value={this.state.email} 
                                     onChange={this.handleInputChange} >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                    <Col md={10}>
                                        <Input type="textarea" id="message" name="message"
                                            rows="12"
                                            value={this.state.message} 
                                            onChange={this.handleInputChange} ></Input>
                                    </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
   
}

export default Contact;