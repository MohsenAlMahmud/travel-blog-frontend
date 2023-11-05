

const NewsLetter = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/GF0kTG8/news-letter-image.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold py-4">FINDING THE PERFECT TRAILS TO HIKE IS EASY WITH NEWSLETTER</h1>
                        
                        <div className="flex gap-3">
                            <div className="flex gap-3">
                                <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                                <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div>
                                <button className="btn btn-accent">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;