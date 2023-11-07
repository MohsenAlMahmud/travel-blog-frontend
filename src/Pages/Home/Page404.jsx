import { Link } from "react-router-dom";


const Page404 = () => {
    return (
        <div className="flex justify-center text-center mt-64">
            <div>
                <h1 className="text-5xl font-bold p-4">Page Not Found</h1>
                <h3 className="text-2xl font-semibold p-4">This URL is Not Correct</h3>
                <Link className="text-2xl font-semibold underline p-4">Go to Home</Link>
            </div>
        </div>
    );
};

export default Page404;