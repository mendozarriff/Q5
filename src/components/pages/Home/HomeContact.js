import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';
import FloatingLabelInput from 'react-floating-label-input';
const HomeContact = ({onChange, onBlur, onFocus, value}) => {

    return (
        <Jumbotron className="home-contact">
            <Container>
            <Row>
                <Col><h3>Let’s Chat.</h3></Col>
            </Row>
            <Row>
                <Col sm="12" md="6">
                    <p>Use the form in below to contact us regarding your development enquiry. Please be as detailed as possible. Include your industry along with any specific document requests. To help us best service your enquiry, we recommend that you first describe the issue you’re having before telling us what you want to achieve. You may also email or call us to make an appointment.</p>
                    <p>For job opportunities, please email us your resume. We’re always looking for new and  exceptional talent to lead the firm into uncharted fields of practice.</p>
                </Col>
                <Col sm="12" md="6">
                    <Form>
                    <FormGroup>
                    <div style={{ fontSize: 14}}>
                    <FloatingLabelInput
                        id="example-3"
                        label="FIRST NAME"
                        onBlur={onBlur}
                        onChange={onChange}
                        onFocus={onFocus}
                        value={value}
                        type="text"
                        />
                    </div>
                    </FormGroup>
                    <FormGroup>
                    <div style={{ fontSize: 14}}>
                    <FloatingLabelInput
                        id="example-3"
                        label="LAST NAME"
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        type="text"
                        />
                    </div>
                    </FormGroup>
                    <FormGroup>
                    <div style={{ fontSize: 14}}>
                    <FloatingLabelInput
                        id="example-3"
                        label="EMAIL"
                        onBlur={onBlur}
                        onChange={onChange}
                        onFocus={onFocus}
                        value={value}
                        type="email"
                        />
                    </div>
                    </FormGroup>
                    <FormGroup>
                        <Input type="textarea" name="message" id="HOW CAN WE HELP?" />
                    </FormGroup>
                    <Button>SUBMIT</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </Jumbotron>
    );
}
export default HomeContact;