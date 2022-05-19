import "./browse.css"
import {Link} from "react-router-dom"

const SignUp = () =>{
    return(
        <div className="browse">
            <h3 className="browse-title"> sign up </h3>
            <div className="browse-form">
                <div className="browse-label">
                    <label forhtml="username" className="browse-pass">fullname</label>
                    <input type="text" className="field" required/>
                </div>
                <div className="browse-label">
                    <label forhtml="email" className="browse-pass" >e-mail</label>
                    <input type="email" className="field" required/>
                </div>
                <div className="browse-label">
                    <label forhtml="password" className="browse-pass" >password</label>
                    <input type="password" className="field" required/>
                </div>
                <div className="browse-label">
                    <label forhtml="confirm-password" className="browse-pass" >confirm-password</label>
                    <input type="password" className="field" required/>
                </div>
                <Link to="/" className="browse-link">
                    <button className="browse-btn">
                        sign up
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default SignUp;