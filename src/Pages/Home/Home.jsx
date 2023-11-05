import Banner from "./Banner";
import Footer from "./Footer";

import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";


const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;