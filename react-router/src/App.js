import React from 'react';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Card from './components/Card'

function App(){
    return(
        <BrowserRouter>
            <div className="App">
                <Navbar></Navbar>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/About" component={About}></Route>
                    <Route path="/Contact" component={Contact}></Route>
                    <Route path='/:user' component={Card}></Route>
                </Switch>
                
            </div>
        </BrowserRouter>
        
    )
}

export default App;