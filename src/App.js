import React from 'react';
import Header from './components/layout/Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Portfolio from './components/pages/Portfolio';
import GetInTouch from './components/pages/GetInTouch';
const App = ()=>{
	return (
		<Router>
            <div>
                <Header />
                <Route exact path="/" render={props => (
                    <div>
                        <Home />
                    </div>
                )} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/getInTouch" component={GetInTouch} />
                <Route path="/about" component={About} />
            </div>
		</Router>
	);
}
export default App;
