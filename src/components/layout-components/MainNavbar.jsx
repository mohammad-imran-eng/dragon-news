import { useLoaderData } from 'react-router-dom';
import NewsCard from '../NewsCard';

const MainNavbar = () => {
    const data = useLoaderData();
    return (
        <div>
            <h2 className='font-semibold mb-3'>DRAGON HOME NEWS</h2>
            {
                data.data.map(singleNews=> <NewsCard key={singleNews._id} singleNews={singleNews}/>)
            }
        </div>
    );
};

export default MainNavbar;