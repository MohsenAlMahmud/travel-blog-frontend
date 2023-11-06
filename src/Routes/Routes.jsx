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
                element: <AddBlog></AddBlog>
            },
            {
                path: "allBlogs",
                element: <AllBlogs></AllBlogs>,
                loader: () => fetch(`http://localhost:5000/blogs`)
            },
            {
                path: "/blogDetails/:id",
                element: <BlogDetails></BlogDetails>,
                loader: () => fetch(`http://localhost:5000/blogs`)
            },
            {
                path: "/updateBlog/:id",
                element: <UpdateBlog></UpdateBlog>,
                loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
            },
            {
                path: "/wishList/:id",
                element: <WishList></WishList>,
                loader: () => fetch(`http://localhost:5000/blogs`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
]);

export default router;