import { Link, NavLink } from "react-router-dom";
import user from '../../../assets/user.png'


const Navber = () => {

    

    const navlinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/career">Career</NavLink></li>
            <li><NavLink to='/login'>Login</NavLink></li>
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user} alt="User Avatar" />
                        </div>
                    </label>
                   
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Navber;
