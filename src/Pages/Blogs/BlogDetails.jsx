import { Link, useLoaderData, useParams } from "react-router-dom";


const BlogDetails = () => {

    const blogs = useLoaderData();
    const { id } = useParams();
    const blog = blogs.find(blog => blog._id == id);
    console.log(blog);

    return (
        <div>
            <div className=" bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{blog.title}</h2>
                    <img src="https://i.ibb.co/TKKJchx/sasha-freemind-n-Xo2-Zs-KHTHg-unsplash.jpg" alt="" />
                    <h2 className="card-title">Category : {blog.category}</h2>
                    <p>Short Description : {blog.shortDescription}</p>
                    <p>Details : {blog.longDescription}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/updateBlog/${blog._id}`}><button className="btn btn-primary">Update Blog</button></Link>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BlogDetails;