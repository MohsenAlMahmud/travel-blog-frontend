import { useContext, useState, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../ClientAuthentication/AuthProvider";
import Swal from "sweetalert2";

const BlogDetails = () => {
    const blogs = useLoaderData();
    const { id } = useParams();
    const blog = blogs.find((blog) => blog._id == id);
    console.log(blog)
    const { user } = useContext(AuthContext);
    console.log(user)

    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("");

    useEffect(() => {
        fetch(`https://travel-blog-backend-gamma.vercel.app/comments?blogId=${id}`)
            .then((res) => res.json())
            .then((data) => {
                setComments(data);
            });
    }, [id]);

    const isBlogAuthor = user && user.email === blog.email;

    const [loadingComments, setLoadingComments] = useState(true); // Track if comments are loading

    useEffect(() => {
        // Simulate loading comments
        setTimeout(() => {
            setLoadingComments(false);
        }, 2000); // Simulated 2-second delay
    }, []);
    
    const fetchComments = () => {
        fetch(`https://travel-blog-backend-gamma.vercel.app/comments?blogId=${id}`)
            .then((res) => res.json())
            .then((data) => {
                setComments(data);
            });
    };

    useEffect(() => {
        fetchComments(); // Fetch comments when the component first loads
        // Poll for new comments every 5 seconds (you can adjust the interval)
        const interval = setInterval(fetchComments, 1000);
        return () => clearInterval(interval); // Clear the interval when the component unmounts
    }, [id]);

    const handleComments = (e) => {
        e.preventDefault();

        if (isBlogAuthor) {
            Swal.fire("Can not comment on your own blog");
            return;
        }

        const form = e.target;
        const comment = form.comment.value;
        const email = user?.email;
        const postComment = {
            comment,
            email,
            blogId: blog._id,
        };


        fetch('https://travel-blog-backend-gamma.vercel.app/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(postComment),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setCommentText("");
                    Swal.fire('Your Comment Posted Successfully');
                }
            });
    };



    return (
        <div>
            <div className=" bg-neutral text-neutral-content">
                <div className="card-body items-center">
                    <h2 className="card-title">{blog.tittle}</h2>
                    <img src={blog.image} alt="" />
                    <h2 className="card-title">Category : {blog.category}</h2>
                    <p>Short Description : {blog.shortDescription}</p>
                    <p>Details : {blog.longDescription}</p>
                    <div className="card-actions justify-end">
                        {user && user.email === blog.email && (
                            <Link to={`/updateBlog/${blog._id}`}>
                                <button className="btn btn-primary">Update Blog</button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <h2 className="text-3xl py-4">Comments.....</h2>
            <div className="">
                <div className="py-4">
                    <form onSubmit={handleComments} className="flex">

                        <div className="form-control flex-1">
                            <textarea
                                type="text"
                                name="comment"
                                value={commentText}
                                required
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder="Comments here..."
                                className="textarea textarea-bordered textarea-lg w-full"
                            />
                        </div>
                        <div className="form-control mt-6 flex-6">
                            <input className="btn btn-primary btn-block" type="submit" value="Post" />
                        </div>
                    </form>
                </div>

                <div className="mx-8 border py-4">
                    {comments.map((comment, index) => (
                        <div border key={index} className="">
                            <p>{comment.comment}</p>
                            <div className="flex">
                                <img className="w-4 h-4 rounded-full mx-6" src={comment.photoURL || "https://i.ibb.co/MSHTpdv/user.jpg"} alt="" />
                                <p>Name: {comment.displayName || "User"}</p>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;