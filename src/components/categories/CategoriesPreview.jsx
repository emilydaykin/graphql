import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryCarousel from './CategoryCarousel';
import Loader from '../Loader';
import Footer from '../Footer';

const CategoriesPreview = () => {
  const { categoriesMap, loading } = useContext(CategoriesContext);
  const navigate = useNavigate();

  const redirectToCategory = (category) => {
    // console.log(`${category} category clicked`);
    navigate(`/shop/${category}`);
  };

  return (
    <>
      <div className='shop'>
        {loading ? (
          <Loader />
        ) : (
          Object.keys(categoriesMap).map((title) => (
            <div key={title} className='shop__section'>
              <h1 className='shop__category'>
                {title} <span onClick={() => redirectToCategory(title)}>&rarr;</span>
              </h1>
              <CategoryCarousel categoriesMap={categoriesMap} title={title} />
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default CategoriesPreview;
