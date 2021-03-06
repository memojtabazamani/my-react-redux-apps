import { BrowserRouter, Route, Switch } from 'react-router-dom';
// My Components
import Layout from './layouts/layout';
import LoginLayout from './layouts/login/login'

// CONSTANTS
const STYLES = {
    "marginTop": "50px",
};

const getMobileLayout = (props) => {
    console.log("name");
    let pathName = window.location.href || "";
    if (pathName.includes("/login")) return <LoginLayout title={"ورود/ثبت نام"} />

    return <Layout />

};

function App(props) {
    return (
       
        <>
            {getMobileLayout(props)}
        </>
        
    );
}

export default App;
