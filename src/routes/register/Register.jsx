import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import FormInput from '../../Component/forminputs/FormInput'
import './register.scss'

const Register =()=>{
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    
      const inputs = [
        {
          id: 1,
          name: "firstName",
          type: "text",
          placeholder: "First Name",
          errorMessage:
            "First Name should be 3-16 characters and shouldn't include any special character!",
          label: "First Name",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
            id: 2,
            name: "lastName",
            type: "text",
            placeholder: "Last Name",
            errorMessage:
              "Last name should be 3-16 characters and shouldn't include any special character!",
            label: "Last aame",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
          },
        {
          id: 3,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "It should be a valid email address!",
          label: "Email",
          required: true,
        },
        {
          id: 4,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage:
            "Password should be atleast 6 characters and include at least 1 letter, 1 number",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
          required: true,
        },
        {
          id: 5,
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm Password",
          errorMessage: "Passwords don't match!",
          label: "Confirm Password",
          pattern: values.password,
          required: true,
        },
      ];
    
      const handleSubmit = (e) => {
        e.preventDefault();
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    return(
        <>
            <section className='page-annime'>
            <Container>
                <Row className='mt-5 mb-5'>
                    <Col md={{ span: 5, offset: 1 }}>
                        <h1 className='loginhead mb-3'>Signup</h1>
                        <p className='loginsubhead'>We do not share your personal details with anyone.</p>
                    </Col>
                    <Col md={5}>
                    <form onSubmit={handleSubmit}>
                        {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                        ))}
                        <div className="d-grid gap-2 pt-4">
                                <Button variant="danger" type="submit">
                                  Signup
                                </Button>
                            </div>
                    </form>   
                    </Col>
                </Row>
            </Container>
        </section>
       
        </>
    )
}

export default Register;