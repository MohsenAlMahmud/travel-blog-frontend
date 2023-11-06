

const WishList = () => {
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
                        <button>Remove</button>

                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default WishList;