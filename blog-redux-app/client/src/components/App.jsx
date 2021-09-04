// My Components
import Header from '../components/Utilities/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Posts from './PostsPage/Posts';

// CONSTANTS
const STYLES = {
    "marginTop": "50px",
};


function App() {
    return (
        <div className="ui container">
             <BrowserRouter>
                <Header />
                <div className="ui main text container" style={STYLES}>
                    <Switch>
                        <Route path='/' extact component={Posts} />
                    </Switch>
                </div>
            </BrowserRouter>
           
        </div>
    );
}

export default App;
