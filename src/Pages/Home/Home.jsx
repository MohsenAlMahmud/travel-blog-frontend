import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";

import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";
import TravelEssentialItems from "./TravelEssentialItems";
import BestPlaceToVisit from "./BestPlaceToVisit";


const Home = () => {
    const blogs = useLoaderData();
    return (
        <div>                        
            <Banner></Banner>
            <RecentBlogs blogs={blogs}></RecentBlogs>
            <NewsLetter></NewsLetter>
            <BestPlaceToVisit></BestPlaceToVisit>
            <TravelEssentialItems></TravelEssentialItems>
            <Footer></Footer>
        </div>
    );
};

export default Home;