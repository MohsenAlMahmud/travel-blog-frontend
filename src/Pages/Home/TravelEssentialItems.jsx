

const TravelEssentialItems = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold text-center py-8 mt-20">TRAVEL ESSENTIALS ITEMS</h2>
            <div className="grid grid-cols-5">
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/4jLw1HL/shoes.webp" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">$250</h2>
                            <p>Shoes</p>
                            <div className="card-actions">
                                <button className="btn btn-accent">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/0nhL0Zf/tripod.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">$200</h2>
                            <p>Camera Tripod</p>
                            <div className="card-actions">
                                <button className="btn btn-accent">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/cTph6NC/rain-coat.webp" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">$200</h2>
                            <p>Raincoat</p>
                            <div className="card-actions">
                                <button className="btn btn-accent">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/SRNYVwL/canon-eos-1500d-dslr-camera-with-18-55-mm-and-55-250-mm-dual-lens-kit-491362609-i-4-1200wx1200h-500x.webp" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">$1800</h2>
                            <p>DSLR Camera</p>
                            <div className="card-actions">
                                <button className="btn btn-accent">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/Ydzs5sf/water-bottle.webp" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">$17</h2>
                            <p>Water Bottle</p>
                            <div className="card-actions">
                                <button className="btn btn-accent">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelEssentialItems;