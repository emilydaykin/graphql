// Displays all gifts for each category in DB
// path is `/shop/:category` for each category in DB
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import ProductCard from '../ProductCard';
import Loader from '../Loader';
import Footer from '../Footer';

const GET_CATEGORY = gql`
  query ($title: String) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const Category = () => {
  const { category } = useParams();

  const { loading, error, data } = useQuery(GET_CATEGORY, {
    variables: {
      title: category
    }
  });

  useEffect(() => {
    if (data) {
      // nested destructure
      const {
        getCollectionsByTitle: { items }
      } = data;
      setProducts(items);
    }
  }, [category, data]);

  const [products, setProducts] = useState([]);

  return (
    <>
      <div className='shop'>
        <div className='shop__section'>
          <h1 className='shop__category shop__category--individual'>{category} gifts</h1>
          {loading || !products ? (
            <Loader />
          ) : (
            <div className='product-group product-group--individual'>
              {products.map((product) => (
                <ProductCard product={product} key={product.id} preview={false} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
