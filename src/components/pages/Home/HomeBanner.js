import React from 'react';
import { Container, Jumbotron } from 'reactstrap';

const HomeBanner = () => {
    return (
        <Jumbotron style={{background: "#F2B133"}} className="home-banner">
                <h5>“Customers don’t care how much time something takes to buid. They care only if it servers their needs”</h5>
                <p>— ERIC RIES</p>
        </Jumbotron>

    );
}
export default HomeBanner;