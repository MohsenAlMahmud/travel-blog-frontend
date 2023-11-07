import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../ClientAuthentication/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/addBlog"}>Add Blog</NavLink></li>
                            <li><NavLink to={"/allBlogs"}>All Blogs</NavLink></li>
                            <li><NavLink to={"/users"}>Featured Blogs</NavLink></li>
                            <li><NavLink to={"/wishList"}>Wish List</NavLink></li>


                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">TRAVEL BLOG</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/addBlog"}>Add Blog</NavLink></li>
                        <li><NavLink to={"/allBlogs"}>All Blogs</NavLink></li>
                        <li><NavLink to={"/users"}>Featured Blogs</NavLink></li>
                        <li><NavLink to={"/wishList"}>Wish List</NavLink></li>


                    </ul>
                </div>
                <div className="navbar-end p-4 hidden lg:flex">
                    {
                        user ?
                            <><span className="px-3"><img className="w-12 rounded-full" src={user.photoURL ? user.photoURL : "https://i.ibb.co/MSHTpdv/user.jpg"} alt="picture" /></span><button onClick={handleSignOut} className="btn btn-ghost">Sign Out</button></>

                            :
                            <><span className="px-3"><Link to='/register'><button className="btn btn-ghost">Register</button></Link></span><Link to='/login'><button className="btn btn-ghost">Login</button></Link></>
                            
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;