import React from 'react';
import Hero from '../../layout/Hero/Hero';
import HomeAbout from './HomeAbout';
import HomeServices from './HomeServices';
import hero_image from '../../../images/hero_image.png';
import { Col, Row } from 'reactstrap';
import HomeBanner from './HomeBanner';
import HomeContact from './HomeContact';

const hero = {
    imageSrc : `${hero_image}`,
    imageAlt: "computers and e-logos",
    heroBGColor: "#068587",
}
const spanColor = "#132F40";
const heroTitle = (
    <h1 style={{color: "#fff"}}>
        <span style={{color:`${spanColor}`}}>Zero</span> to launch in <span style={{color:`${spanColor}`}}>One</span> month
    </h1>
);

const subTitle = (
    <h2 style={{color: "#fff"}}>QUANT <span style={{color:`${spanColor}`}}>FIVE</span></h2>
);

const Home = ()=> {
    return (
        <div>
            <Hero 
                heroImage={hero.imageSrc}
                heroBackgroundColor = {hero.heroBGColor}
                heroImageAlt = {hero.imageAlt}
                heroTitle = {heroTitle}
                heroSubtitle = {subTitle}
                />
                <HomeAbout />
                <HomeServices />
                <HomeBanner />
                <HomeContact />
        </div>
    );
}   
export default Home;