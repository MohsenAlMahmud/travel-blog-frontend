import { Link, useLoaderData } from "react-router-dom";


const AllBlogs = () => {

    const blogs = useLoaderData();
    console.log(blogs)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {blogs.map((blog) =>
                <div key={blog._id}>
                    <div className="card w-96 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{blog.title}</h2>
                            <img src="https://i.ibb.co/TKKJchx/sasha-freemind-n-Xo2-Zs-KHTHg-unsplash.jpg" alt="" />
                            <h2 className="card-title">{blog.shortDescription}</h2>
                            <h2 className="card-title">{blog.category}</h2>
                            <div className="card-actions justify-end">
                                <Link to={`/blogDetails/${blog._id}`}><button className="btn btn-primary">Details</button></Link>
                                <button className="btn btn-ghost">Wish List</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllBlogs;