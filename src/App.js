import React from 'react'
import './App.css';
import { NavigationBar, Home, About, Ranking, Seasonal, Character, Footer } from './components'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import "react-datepicker/dist/react-datepicker.css";

import './assets/styles/navbar.css'
import './assets/styles/home.css'
import './assets/styles/about.css'
import './assets/styles/ranking.css'
import './assets/styles/character.css'
import './assets/styles/seasonal.css'
import './assets/styles/footer.css'

const App = () => {
    return (
        <div className="App">
            <Router>
                <NavigationBar/>
                <div className="body-container">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/seasonal" component={Seasonal}/>
                        <Route exact path="/:top" component={Ranking}/>
                        <Route exact path="/character/:id" component={Character}/>
                    </Switch>
                </div>
            </Router>
            <Footer/>
        </div>
    )
}

export default App