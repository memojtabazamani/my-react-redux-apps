import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route  } from 'react-router-dom';

import SignUpForm from './registrition/SignUpForm';
import LoginForm from './registrition/LoginForm';
import Dashboard  from './posts/Dashboard';

import Header from './Header';

const App = () => {
    return (
        <div className='ui container wrapper'>
            <BrowserRouter>
                <Header />
                <Route path="/" exact />
                <Route path="/registrition" component={SignUpForm} />
                <Route path="/login" component={LoginForm} />
                <Route path="/dashboard" component={Dashboard} />
            </BrowserRouter>
        </div>
    )
}

export default App;
