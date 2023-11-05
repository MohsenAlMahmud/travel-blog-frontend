

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/87XqRk8/banner-2.png)' }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold text-white">Perfect Place For Your Travel Story</h1>
                        
                        <button className="btn btn-accent">View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;