import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
    return (
        <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            {/* If Any One use Wrong Path I dont Have 404 page thats why i use it  */}
            <Redirect to="/" />    
        </Switch>
        <Footer />
        </>
    )
}

export default App;

