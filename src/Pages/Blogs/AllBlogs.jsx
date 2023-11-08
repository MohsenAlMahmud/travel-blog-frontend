// import axios from "axios";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const AllBlogs = () => {

    const blogs = useLoaderData();
    console.log(blogs)
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
   
    const filteredBlogs = blogs.filter((blog) => {
        return (
            (selectedCategory === "All" || blog?.category === selectedCategory) &&
            ((blog?.tittle && blog?.tittle.toLowerCase().includes(searchQuery.toLowerCase())) || searchQuery === "")
        );
    });
    const categories = ["All", "Solo Adventure", "Family Exploration", "Romantic Gateway", "Volunteer and Humanitarian Trips", "Group Travel", "Business Travel"];

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    };

    
    const handleWishList = (blog) => {
        
        const wishListData = {

            blogId: blog._id,
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
            <div className="flex justify-between mr-8">
                <div className="filter-dropdown py-6">
                    <select className="p-3 rounded" id="category" name="category" value={selectedCategory} onChange={handleCategoryChange}>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="search-bar py-6 ">
                    <input
                        type="text"
                        placeholder="Search by tittle"
                        value={searchQuery}
                        onChange={handleSearchQueryChange}
                        className="p-3 rounded"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {filteredBlogs.map((blog) =>
                    <div key={blog._id}>
                        <div className="card w-96 bg-neutral text-neutral-content">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{blog.tittle}</h2>
                                <img src={blog.image} alt="" />
                                <h2 className="card-title">{blog.shortDescription}</h2>
                                <h2 className="card-title">{blog.category}</h2>
                                <div className="card-actions justify-end">
                                    <Link to={`/blogDetails/${blog._id}`}>
                                        <button className="btn btn-primary">Details</button>
                                    </Link>
                                    
                                    <button className="btn btn-ghost" onClick={() => handleWishList(blog)}>Add to Wish List</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllBlogs;