import './App.css';
import Main from "../Main";
import {HashRouter, Route} from "react-router-dom";
import Registration from "./components/Registration";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import ForgotPassword from "./components/ForgotPassword";
import NewPassword from "./components/NewPassword";
import Login from "./components/Login";
import Routes from "./routes/Routes";

const App = () => {
    return (
        <HashRouter>
            <Routes/>
            <div>
                <Route path="/login" component={Login}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/not_found" component={NotFound}/>
                <Route path="/forgot_password" component={ForgotPassword}/>
                <Route path="/new_password" component={NewPassword}/>
                <Route path="/test_page" component={Main}/>
            </div>


        </HashRouter>
    );

}

export default App;
