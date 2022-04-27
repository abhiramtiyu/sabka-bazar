import { useState } from "react";
import Form from 'react-bootstrap/Form'

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;
  
    const handleFocus = (e) => {
      setFocused(true);
    };
  
    return (
      <div className="formInput">
           <Form.Group className="form-floating mb-3" controlId="firstName">
                                <Form.Control 
                                 {...inputProps}
                                 onChange={onChange}
                                 onBlur={handleFocus}
                                className="inputtype" 
                                onFocus={() =>
                                    inputProps.name === "confirmPassword" && setFocused(true)
                                  }
                                  focused={focused.toString()}/>
                                <Form.Label>{label}</Form.Label>
                                <span>{errorMessage}</span>
                            </Form.Group>
      </div>
    );
  };
  export default FormInput;