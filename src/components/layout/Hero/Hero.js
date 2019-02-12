import React from 'react';
import PropTypes from 'prop-types';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

const Hero = ({heroImage, heroImageAlt ,heroBackgroundColor, heroTitle, heroSubtitle, heroOptionalText}) => {
    return (
        <Jumbotron style={{background: `${heroBackgroundColor}`}}>
            <Container>
                <Row>
                    <Col xs="12" className="hero-subtitle">
                    {heroSubtitle}
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="7" className="hero-title"> {heroTitle}</Col>
                    <Col xs="12" sm="5" className="hero-image"><img src={heroImage} alt={heroImageAlt} /></Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}
export default Hero;

Hero.propTypes = {
    heroImage: PropTypes.string.isRequired,
    heroImageAlt: PropTypes.string.isRequired,
    heroTitle: PropTypes.object.isRequired,
    heroSubtitle: PropTypes.object.isRequired,
    heroBackgroundColor: PropTypes.string.isRequired,
    heroOptionalText: PropTypes.string
}

