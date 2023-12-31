import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateBlog = () => {

    const singleBlog = useLoaderData();
    
    console.log(singleBlog)


    const handleUpdateBlog = async (e) => {
        e.preventDefault();
        const form = e.target;
        const tittle = form.tittle.value;
        const image = form.image.value;
        const category = form.category.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;
        const blogData = { image, tittle, category, shortDescription, longDescription };
        console.log(blogData);

     

        axios.put(`https://travel-blog-backend-gamma.vercel.app/blogs/${singleBlog._id}`, blogData, {
            headers: {
              'Content-Type': 'application/json',
            }
          })       
            .then((response) => {
              console.log(response.data);
              Swal.fire('Blog Updated Successfully')
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    }

    return (
        <div className="w-9/12 mx-auto">
            
            <h2 className="text-4xl text-center py-16">Update Existing Blog</h2>
            <form onSubmit={handleUpdateBlog} className="lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Name</span>
                    </label>
                    <input type="text" defaultValue={singleBlog?.name} name="name" placeholder="Your Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Tittle</span>
                    </label>
                    <input type="text" defaultValue={singleBlog?.tittle} name="tittle" placeholder="tittle" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Insert Image URL</span>
                    </label>
                    <input type="text" defaultValue={singleBlog?.imageURL} name="image" placeholder="Image" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Category</span>
                    </label>
                    <select name="category" className="select select-bordered w-full " defaultValue={singleBlog?.category}>
                        <option defaultValue="">Pick your Travel Category</option>
                        <option  value="Solo Adventure">Solo Adventure</option>
                        <option  value="Family Exploration">Family Exploration</option>
                        <option  value="Romantic Gateway">Romantic Getaway</option>
                        <option  value="Volunteer and Humanitarian Trips">Volunteer and Humanitarian Trips</option>
                        <option  value="Group Travel">Group Travel</option>
                        <option  value="Business Travel">Business Travel</option>
                    </select>
                </div>



                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Short Description</span>
                    </label>
                    <input type="text" defaultValue={singleBlog?.shortDescription} name="shortDescription" placeholder="Description" className="input input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Detail Description</span>
                    </label>
                    <input type="text" defaultValue={singleBlog?.longDescription} name="longDescription" placeholder="Detail Description" className="input input-bordered" />
                </div>


                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>

            </form>


        </div>
    );
};

export default UpdateBlog;