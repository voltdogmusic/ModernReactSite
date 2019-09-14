import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Button} from "react-bootstrap";


class SignInForm extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text   className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                </Form>
                <Button className = 'hvr-icon-forward'id ="lastButton">

                    Sign up
                    <i className="fa fa-chevron-circle-right hvr-icon" id ="forwardIcon"></i>
                </Button>
            </div>
        );
    }
}

SignInForm.propTypes = {};

export default SignInForm;
