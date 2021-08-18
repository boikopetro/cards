import { Link } from "react-router-dom"

const Routes = () => {
    return (
        <div>
            <div><Link to='/login'>Login</Link></div>
            <div><Link to='/registration'>Registration Page</Link></div>
            <div><Link to='/profile'>Profile Page</Link></div>
            <div><Link to='/not_found'>NotFound Page</Link></div>
            <div><Link to='/forgot_password'>ForgotPassword Page</Link></div>
            <div><Link to='/new_password'>NewPassword Page</Link></div>
            <div><Link to='/test_page'>TestPage Page</Link></div>
        </div>
    )
}

export default Routes