import { Link, useLoaderData } from "react-router-dom";
import Header from "./Header";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetails = () => {
  const news = useLoaderData();
  const data = news.data[0];
  console.log(data);

  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header />
        <div className="grid md:grid-cols-12 gap-3">
          <div className="col-span-9">
            <h3 className="font-semibold text-[20px] mb-2">Dragon news</h3>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img
                  src={data.image_url}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>{data.details}</p>
                <div className="card-actions justify-start">
                  <Link to={`/category/${data?.category_id}`} className="btn bg-[#D72050] text-white mt-2"> <FaArrowLeftLong /> All news in this category</Link>
                </div>
              </div>
            </div>
          </div>
          <aside className="col-span-3">
            <SocialLogin />
            <FindUs />
          </aside>
        </div>
      </header>
    </div>
  );
};

export default NewsDetails;
