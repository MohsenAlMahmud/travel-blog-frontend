import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import AddBlog from "../Pages/Blogs/AddBlog";
import AllBlogs from "../Pages/Blogs/AllBlogs";
import UpdateBlog from "../Pages/Blogs/UpdateBlog";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import Login from "../ClientAuthentication/Login";
import Register from "../ClientAuthentication/Register";
import WishList from "../Pages/Users/WishList";
import FeaturedBlogs from "../Pages/Users/FeaturedBlogs";
import Page404 from "../Pages/Home/Page404";
import PrivateRoute from "../PrivateRoute";
// import PrivateRoute from "../PrivateRoute";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/blogs`)
            },
            {
                path: "addBlog",
                element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute>,
            },
            {
                path: "allBlogs",
                element: <AllBlogs></AllBlogs>,
                loader: () => fetch(`http://localhost:5000/blogs`)
            },
            {
                path: "/blogDetails/:id",
                element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
                loader: () => fetch(`http://localhost:5000/blogs`)
            },
            {
                path: "/updateBlog/:id",
                element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
            },
            {
                path: "/users",
                element: <PrivateRoute><FeaturedBlogs></FeaturedBlogs></PrivateRoute>,
                
            },
            {
                path: "/wishList",
                element: <WishList></WishList>,
                loader: () => fetch(`http://localhost:5000/wishes`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/*',
                element: <Page404></Page404>
            },
        ]
    },
]);

export default router;