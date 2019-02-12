import React from 'react';
import { Container, Col, Row, Button, Jumbotron } from 'reactstrap';

const HomeAbout = () => {
    return (
        <Jumbotron className="home-about">
        <Container >
        <Row>
            <Col xs="12" md="8">
                <h3>Building products from scratch since 2015</h3>
                <p>Headquartered in Berkeley, our firm specializes in developing products from the seed of an idea to the final working product. Our motto is idea to launch in 1 month. As previous startup founders ourselves, we understand the need for speed without sacrificing quality. Let us handle your development while you figure out the market, go to launch strategy, and talk to your customers. Since we're previous startup founders too, we can also help a little with that.</p>
                <p>Currently, our engineers are all from Berkeley so you have the peace of mind of working with engineers from the top Computer Science University in the world. We guarantee quality.
                </p>
                <p>Get in touch with us to set up a consultation, or use the contact form at the bottom of this page to enquire whether our services are right for you.</p>
                <Button>LEARN MORE</Button>
            </Col>
            <Col  className="home-about__aside" xs="12" md="4">
                <h3>Contact</h3>
                <h4>LOCATION</h4>
                <p>1810 Bonita Ave.
                Barkeley, CA 94709</p>
                <h4>CONTACT</h4>
                <p>patrick@quanfive.org
                (850)764-3189</p>
            </Col>
        </Row>
        </Container>
        </Jumbotron>
    );
}
export default HomeAbout;