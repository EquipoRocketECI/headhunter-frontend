import React, { Component } from 'react';

import './App.css';
import logo from './components/logo.svg';
import { Login } from './components/Login';
import { SignIn } from './components/SignIn';
import { Explore } from './components/ExploreComponent/Explore';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoggedIn: JSON.parse(localStorage.getItem('recordar')) };
        const isLogged = JSON.parse(localStorage.getItem('recordar'));
        this.state = { isLoggedIn: isLogged }
        this.handleClick = this.handleClick.bind(this);
    }
    changeView() {
        const newLogin = this.state.isLoggedIn === false ? true : false;
        this.setState({ isLoggedIn: newLogin });

    }



    render() {

        const LoginView = () => (
            <Login/>
        );

        const SignInView = () => (
            <SignIn/>
        );
        
        const ExploreView = () => (

            <Explore/>
        );
     

        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">HeadHunter</h1>
                    </header>

                    <br />
                    <br />
                    <h4>Login: {localStorage.getItem('recordar')}</h4>

                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/SignIn">SignIn</Link></li> 
                        
                    </ul>
                    <div>
                        <Route exact path="/" component={LoginView} />
                         <Route path="/SignIn" component={SignInView} />
                         <Route path="/explore" render={ExploreView}/>
                    </div>

                </div>
            </Router>
        );
    }
    handleClick(e) {
        if (localStorage.getItem('recordar') == 'true') {
            localStorage.setItem("recordar", false)
            this.changeView();
        }


    }


}

export default App;