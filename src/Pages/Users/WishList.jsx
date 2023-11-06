import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const WishList = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        // Fetch the blog by ID
        fetch(`/blogs/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setBlog(data))
            .catch((error) => console.error(error));
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>This is the wish list</h2>
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center">
                    <h2 className="card-title">{blog.tittle}</h2>
                    <img src={blog.image} alt="" />
                    <h2 className="card-title">Category: {blog.category}</h2>
                    <p>Short Description: {blog.shortDescription}</p>
                    <p>Details: {blog.longDescription}</p>
                    <div className="card-actions justify-end">
                        <button>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishList;
