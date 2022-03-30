import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
    }
    
    render() {
        return (
            <React.Fragment>
            <Container className='d-flex justify-content-center'>
                <h1>Sign in form</h1>
            </Container>
            <Container className='d-flex justify-content-center'>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Login</Form.Label>
                            <Form.Control placeholder="login" name="login" value={this.state.login} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Sign in
                        </Button>
                        <Link to="/">Back</Link> 
                    </Form>
                
            </Container>
            </React.Fragment>
        );
    }

}

export default LoginPage;