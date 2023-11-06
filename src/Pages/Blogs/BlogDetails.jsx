import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../ClientAuthentication/AuthProvider";
import Swal from "sweetalert2";
// import { useState, useEffect } from "react";

const BlogDetails = () => {

    const blogs = useLoaderData();
    const { id } = useParams();
    const blog = blogs.find(blog => blog._id == id);
    console.log(blog);
    const {user} = useContext(AuthContext);
    console.log({user})

    const handleComments = (e) =>{
        e.preventDefault();

        const form = e.target;
        const comment = form.comment.value;
        const email = user?.email;
        const postComment = {
            comment,
            email
        }
        console.log(postComment);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postComment)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire('Your Comment Posted Successfully')
            }
        })
    }
    

    return (
        <div>
            <div className=" bg-neutral text-neutral-content">
                <div className="card-body items-center">
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
            <div className="py-4">
                <h2 className="text-3xl py-4">Comments.....</h2>
                <form onSubmit={handleComments} className="card-body">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                    
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <textarea type="date" name="comment" placeholder="Comments here..." className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                        
                    </div>
                    
                </div>
                <div className="form-control mt-6">
                    
                    <input className="btn btn-primary btn-block" type="submit" value="Post" />
                </div>
            </form>
                
            </div>

        </div>
    );
};

export default BlogDetails;