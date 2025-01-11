import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-200 p-2">
            <p className="bg-[#D72050] text-base-100 px-4 py-2">Latest</p>
            <Marquee className="py-2" pauseOnHover='true' speed={100}>
            <Link>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ut laborum pariatur nisi a aliquid accusantium quidem tempore blanditiis itaque magnam dignissimos rem deserunt placeat, asperiores reprehenderit culpa repellendus eligendi!</Link>
            </Marquee>
            
        </div>
    );
};

export default LatestNews;