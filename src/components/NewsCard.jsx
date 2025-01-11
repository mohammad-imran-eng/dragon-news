
import React from 'react';
import { FaEye, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ singleNews }) => {
    console.log(singleNews);
    
  return (
        <div className="card w-full bg-base-100 shadow-lg mb-5">
      <figure>
        <img src={singleNews.image_url} alt="Thumbnail" className="w-full h-96 object-cover" />
      </figure>
      <div className="card-body p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <img src={singleNews.thumbnail_url} alt="Author" className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-sm font-medium">{singleNews.author.name}</p>
              <p className="text-xs text-gray-500">{new Date(singleNews.author.published_date).toDateString()}</p>
            </div>
          </div>
          <button className="btn btn-ghost btn-circle">
            <FaShareAlt className="text-gray-600" />
          </button>
        </div>
        <h2 className="card-title text-lg font-bold">{singleNews.title}</h2>
        <p className="text-sm text-gray-600">
          {singleNews.details.length > 100 ? `${singleNews.details.substring(0, 100)}...` : singleNews.details}
        </p>
        <div className="card-actions mt-4 justify-between">
          <div className="flex items-center space-x-1 text-yellow-500">
            <span className="text-xl font-bold">{singleNews.rating.number}</span>
            <span className="text-sm">{singleNews.rating.badge}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <FaEye />
            <span>{singleNews.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
