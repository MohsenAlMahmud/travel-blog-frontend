import Swal from "sweetalert2";

const handleNewsLetter = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    if (email) {
        Swal.fire('Thank you for subscribing to our newsletter');
    }
};

const NewsLetter = () => {
    return (
        <div>
            <div className="hero mt-20">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/GF0kTG8/news-letter-image.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold py-4">FINDING THE PERFECT TRAILS TO HIKE IS EASY WITH NEWSLETTER</h1>

                        <div className="flex gap-3">
                            <form className="flex gap-3" onSubmit={handleNewsLetter}>
                                <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                                <input type="email" name="email" placeholder="Email" className="input input-bordered w-full max-w-xs" required />
                                <button type="submit" className="btn btn-accent">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
