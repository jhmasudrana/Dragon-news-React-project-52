import { Link } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";




const Login = () => {
 

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const from = new FormData(e.currentTarget);
        const email = from.get('email')
        const password = from.get('password')
        console.log(email, password)
      
    }


    return (
        <div>
            <Navber></Navber>
            <h1 className="text-3xl text-center">Please Login</h1>
            <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 text mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center mt-4"> Do not have an account <Link to='/register' className=" text-blue-800 font-bold  underline">Register</Link></p>
        </div>
    );
};

export default Login;