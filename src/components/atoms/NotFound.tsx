import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#1A1A1A] flex flex-col items-center justify-center text-white text-center">
            <div className="text-6xl font-bold">404</div>
            <div className="text-xl mt-2 uppercase">Page Not Found</div>
            <Link to={"/"} className="uppercase cursor-pointer text-[#9B30FF]">Go Back</Link>
        </div>
    );
};

export default NotFound;