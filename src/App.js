import React from 'react';
import Header from './components/layout/Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Portfolio from './components/pages/Portfolio';
import GetInTouch from './components/pages/GetInTouch';
import Footer from './components/layout/Footer/Footer';
const App = ()=>{
	return (
		<Router>
            <div>
                <Header />
                <Route exact path="/" render={props => (
                        <Home />
                )} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/getInTouch" component={GetInTouch} />
                <Route path="/about" component={About} />
                <Footer />
            </div>
		</Router>
	);
}
export default App;
