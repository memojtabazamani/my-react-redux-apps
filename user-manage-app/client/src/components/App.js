import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route  } from 'react-router-dom';

import SignUpForm from './registrition/SignUpForm';
import LoginForm from './registrition/LoginForm';

// Dashboard Componenets
import Dashboard  from './posts/Dashboard';
import EditPost  from './posts/EditPost';
import CreatePost from './posts/CreatePost';
import DeletePost from './posts/DeletePost';

import Header from './Header';

const App = () => {
    return (
        <div className='ui container wrapper'>
            <BrowserRouter>
                <Header />
                <Route path="/" exact />
                <Route path="/registrition" component={SignUpForm} />
                <Route path="/login" component={LoginForm} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/dashboard/posts/edit/:id" component={EditPost} />
                <Route path="/dashboard/posts/create/" component={CreatePost} />
                <Route path="/dashboard/posts/delete/:id" component={DeletePost} />
            </BrowserRouter>
        </div>
    )
}

export default App;
