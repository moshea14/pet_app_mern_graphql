import { Button, Container, Form, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { useState } from 'react';

import { REGISTER_USER } from '../graphql/mutations';

function AuthForm({isLogin}: {isLogin: boolean}) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    errorMessage: '' 
  });
  const [registerUser] = useMutation(REGISTER_USER)
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await registerUser({
      variables: formData
    });

    console.log(res);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} style={{width: '500px'}} className="mx-auto mt-5">
        <h2 className="text-center mt-3">{isLogin ? 'Log In' : 'Register'}</h2>

        {!isLogin && (
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control name="username" onChange={handleInputChange} autoComplete="username" type="text" placeholder="Enter username" />
          </Form.Group>
        )}

        <Form.Group  className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" onChange={handleInputChange} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" onChange={handleInputChange} autoComplete="current-password" type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          {isLogin ? (
            <Nav.Link className="text-center text-primary" as={NavLink} to="/register" >Don't have an account? Click Here!</Nav.Link>
          ) : (
            <Nav.Link className="text-center text-primary" as={NavLink} to="/login" >Have an account already? Click Here!</Nav.Link>
          )}
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default AuthForm;