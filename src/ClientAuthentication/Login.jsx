import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";
import app from "../firebase/firebase.config";
import { useContext } from "react";


// import app from "../firebase/firebase.config";
// import { GoogleAuthProvider } from "firebase/auth";




const Login = () => {

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()

    const { signIn } = useContext(AuthContext);

    const location = useLocation();

    const navigate = useNavigate();

    console.log(location)

    
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                Swal.fire('You are successfully login')                
                
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
                
            })
    }

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                Swal.fire('You are successfully login')
                              
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
                Swal.fire('Invalid User')
            })
    }

    return (
        <div className="w-9/12 mx-auto">
            
            <h2 className="text-4xl text-center py-16">Please Login</h2>
            <form onSubmit={handleLogin} className="lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>

            </form>
            <p className="text-center mt-4">Do not have an account? <Link to='/register' className="text-blue-500">Register</Link></p>
            <div className="w-1/2 mx-auto">
                <button onClick={handleGoogleSignIn} className="btn btn-accent w-full mt-4">Google Login</button>
            </div>
        </div>
    );
};

export default Login;