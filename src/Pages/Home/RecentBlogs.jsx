import { Link } from "react-router-dom";

const RecentBlogs = ({blogs}) => {    
    const sortedBlogs = blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));    
    const recentBlogs = sortedBlogs.slice(0, 6);

    return (
        <div>
            <h2 className="text-5xl font-bold py-6">Recently Uploaded Blogs...</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentBlogs.map((blog) => (
                    <div key={blog._id} className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{blog.tittle}</h2>
                        <img src={blog.image} alt="" />
                        <h2 className="card-title">{blog.shortDescription}</h2>
                        <h2 className="card-title">{blog.category}</h2>
                        <div className="card-actions justify-end">
                            <Link to={`/blogDetails/${blog._id}`}>
                                <button className="btn btn-primary">Details</button>
                            </Link>
                            {/* <Link to={`/wishList/${user._id}`}> */}
                                <button className="btn btn-ghost">Wish List</button>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
                ))}
            </div>
            
        </div>
    );
};

export default RecentBlogs;