// import axios from "axios";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const AllBlogs = () => {

    const blogs = useLoaderData();
    console.log(blogs)
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // const filteredBlogs = selectedCategory === "All" ? blogs : blogs.filter(blog => blog.category === selectedCategory);
    const filteredBlogs = blogs.filter((blog) => {
        return (
            (selectedCategory === "All" || blog.category === selectedCategory) &&
            ((blog.tittle && blog.tittle.toLowerCase().includes(searchQuery.toLowerCase())) || searchQuery === "")
        );
    });
    const categories = ["All", "Solo Adventure", "Family Exploration", "Romantic Gateway", "Volunteer and Humanitarian Trips", "Group Travel", "Business Travel"];

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Function to add a blog to the user's wish list
    // const handleWishList = (blogId) => {
    //     // Send a request to your server to add the blog to the wish list
    //     fetch(`http://localhost:5000/wishList/${blogId}`, {
    //         method: "POST",
    //     })
    //     .then((response) => {
    //         if (response.ok) {
    //             // Blog added to the wish list successfully
    //             console.log("Blog added to Wish List");
    //         } else {
    //             // Handle error if the blog was not added
    //             console.error("Failed to add blog to Wish List");
    //         }
    //     })
    //     .catch((error) => console.error(error));
    // };
    const handleWishList = (blog) => {
        // blog.preventDefault();


        // const comment = form.comment.value;
        // const email = user?.email;
        const wishListData = {

            blogId: blog._id,
            blogName: blog.name,
            blogTittle: blog.tittle,
            blogCategory: blog.category,
            blogImage: blog.image,
            blogShortDescription: blog.shortDescription,
            blogLongDescription: blog.longDescription,
        }
        console.log(wishListData);

        fetch('http://localhost:5000/wishes', {
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