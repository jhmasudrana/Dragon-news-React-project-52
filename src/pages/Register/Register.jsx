import { Link } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";




const Register = () => {
    
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const from = new FormData(e.currentTarget);
         const email = from.get('email')
         const password = from.get('password')
         const name = from.get('name')
         const photo = from.get('photo')
         console.log(email, password, name, photo);
        

   
       }
       
    return (
        <div>
            <Navber></Navber>
            <h1 className="text-3xl font-bold text-center mt-6">Register your account </h1>
           <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 text mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered" required />
                </div>
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
                    <button className="btn btn-primary">Sing Up</button>
                </div>
            </form>
            <p className="text-center mt-4"> Already have an account <Link to='/login' className=" text-blue-800 font-bold  underline">Login</Link></p>
        </div>
    );
};

export default Register;