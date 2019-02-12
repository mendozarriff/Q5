import React from 'react';
import { Container, Row, Col } from 'reactstrap'
import { Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';
const HomeContact = () => {
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
                    <Input type="text" name="firstname" id="firstName" placeholder="FIRST NAME" />
                    </FormGroup>
                    <FormGroup>
                    <Input type="text" name="lastname" id="lastName" placeholder="LAST NAME" />
                    </FormGroup>
                    <FormGroup>
                    <Input type="text" name="email" id="email" placeholder="EMAIL" />
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