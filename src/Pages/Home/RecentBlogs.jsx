import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../ClientAuthentication/AuthProvider";

const RecentBlogs = ({blogs}) => {  
    const {user} = useContext(AuthContext)
    console.log(blogs)  
    const sortedBlogs = blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));    
    const recentBlogs = sortedBlogs.slice(0, 6);
    const handleWishList = (blog) => {
       
        const wishListData = {

            blogId: blog._id,
            userEmail: user.email,
            blogName: blog.name,
            blogEmail: blog.email,
            blogTittle: blog.tittle,
            blogCategory: blog.category,
            blogImage: blog.image,
            blogShortDescription: blog.shortDescription,
            blogLongDescription: blog.longDescription,
        }
        console.log(wishListData);

        fetch('https://travel-blog-backend-gamma.vercel.app/wishes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishListData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire('Your Wishes Added Successfully')
                }
            })
    
    }

    return (
        <div>
            <h2 className="text-5xl font-bold py-6 mt-20 text-center">Recently Uploaded Blogs...</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentBlogs.map((blog) => (
                    <div key={blog._id} className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center">
                        <h2 className="card-title">{blog.tittle}</h2>
                        <img src={blog.image} alt="" />
                        <h2 className="card-title"> Short Description : {blog.shortDescription}</h2>
                        <h2 className="card-title">Category : {blog.category}</h2>
                        <div className="card-actions justify-end">
                            <Link to={`/blogDetails/${blog._id}`}>
                                <button className="btn btn-ghost">Details</button>
                            </Link>                            
                            <button className="btn btn-ghost" onClick={() => handleWishList(blog)}>Add to Wish List</button>                           
                        </div>
                    </div>
                </div>
                ))}
            </div>
            
        </div>
    );
};

export default RecentBlogs;