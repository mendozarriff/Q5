import React from 'react';
import { Container, Col, Row, Jumbotron } from 'reactstrap';
import logo from '../../../images/q5_logo.png';
import FooterNav from './FooterNav';

const Footer = () => {
    return (
        <Jumbotron className="footer" style={{background: "#132F40"}}>
            <Container>
                <Row  style={{textAlign: "center"}}>
                    <Col xs="12" className ="hide-indesktop"><img src={logo} style={{width:"70px"}} alt="q5 logo"/></Col>
                </Row>
                <Row style={{textAlign: "center"}}>
                    <Col xs="12" className="footer-navbar">
                        <FooterNav />
                    </Col>
                </Row>
                <Row style={{textAlign: "center"}}>
                    <Col xs="12" md="4">
                        <p className="left-alignment" style={{color:"#D0D0D0"}}>Quant Five is a boutique software development firm that develops software for some of the most innovative individuals and emerging companies in the tech and entertainment industries.</p>
                    </Col>
                    <Col className ="hide-inmobile" xs="12" md="4"><img src={logo} style={{width:"70px"}} alt="q5 logo"/>
                    </Col>
                    <Col xs="12"  md="4">
                        <p className="right-alignment" style={{color:"#D0D0D0"}}>(850) 764-3189 patrick@quantfive.org
                        1810 Bonita Ave. 
                        Berkeley, CA 94709
                        development | startup advising</p>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}
export default Footer;