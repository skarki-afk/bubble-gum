import "./browse.css"
import {Link} from "react-router-dom"

const Login = () =>{
    return(
        <div className="browse">
            <h3 className="browse-title"> login </h3>
            <div className="browse-form">
                <div className="browse-label">
                    <label forhtml="username" className="browse-pass">username</label>
                    <input type="text" className="field" required/>
                </div>
                <div className="browse-label">
                    <label forhtml="password" className="browse-pass" >password</label>
                    <input type="password" className="field" required/>
                </div>
                <Link to="/home" className="browse-link">
                    <button className="browse-btn">
                        login
                    </button>
                </Link>
                <Link to="/signup" className="link">
                    <p className="sign-link">Don't have an account? Sign up now.</p>
                </Link>
            </div>
        </div>
    )
}

export default Login;