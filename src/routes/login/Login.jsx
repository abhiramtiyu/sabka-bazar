import React, { useState,useEffect } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import "./login.scss";
import { useNavigate } from 'react-router-dom';

const Login=()=>{
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
    const handleSubmit = (e) => {
      e.preventDefault(); 
      setFormErrors({})
      const validateObj = validate(formValues);
      if(Object.keys(validateObj).length >0){
        setFormErrors(validateObj)
        return

      }
      else{
        setIsSubmit(false);
        navigate('../', { replace: true })
    }
      
    };
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      const strongRegex = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
      
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if(!strongRegex.test(values.password)){
        errors.password = "Password should contain atleast 6 character and  include atleast 1 number and 1 alphabet";
      }
      return errors;
    };
    
    return(
        <section className='page-annime'>

            <Container>
                <Row className='mt-5 mb-5'>
                    <Col md={{ span: 5, offset: 1 }}>
                        <h1 className='loginhead mb-3'>Login</h1>
                        <p className='loginsubhead'>Get Access to your order, Whishlist and Recommendations</p>
                        {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : null}
                    </Col>
                    <Col md={5}>
                    <Form onSubmit={handleSubmit}>
                            <Form.Group className="form-floating mb-3" controlId="formBasicEmail">
                                <Form.Control
                                type="text"
                                name="email"
                                className="inputtype" 
                                placeholder="Email"
                                value={formValues.email}
                                onChange={handleChange}
                                />
                                <Form.Label>Email</Form.Label>
                                <Form.Text className="text-danger">
                                {formErrors.email}
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="form-floating mb-3" controlId="formBasicPassword">
                              
                                <Form.Control
                                type="password"
                                name="password"
                                className="inputtype" 
                                placeholder="Password"
                                value={formValues.password}
                                onChange={handleChange}
                                />
                                <Form.Label>Password</Form.Label>
                                <Form.Text className="text-danger">
                                    {formErrors.password}
                                </Form.Text>
                            </Form.Group>
                            <div className="d-grid gap-2 pt-4">
                                <Button variant="danger" type="submit">
                                  Login
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
       
    )
}
export default Login;