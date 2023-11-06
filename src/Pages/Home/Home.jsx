import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";

import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";


const Home = () => {
    const blogs = useLoaderData();
    return (
        <div>                        
            <Banner></Banner>
            <RecentBlogs blogs={blogs}></RecentBlogs>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;