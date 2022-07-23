import { createContext, useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

// Uncomment to add items to DB
// import allProducts from '../data/shop-data.js';
// import { addCollectionAndDocuments } from '../firebase/firebase.utils';

// import { getCategoriesAndDocuments } from '../firebase/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {}
});

const COLLECTIONS = gql`
  query {
    collections {
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

export const CategoriesProvider = ({ children }) => {
  const { loading, error, data } = useQuery(COLLECTIONS);
  const [categoriesMap, setCategoriesMap] = useState({});

  // console.log('loading:', loading);
  // console.log('data:', data);

  // --- NO LONGER USING THIS NOW (fetching from firebase) SINCE WE'RE USING GRAPHQL --- //
  // useEffect(() => {
  //   // Uncomment to add items to DB
  //   // addCollectionAndDocuments('categories', allProducts); // 'categories' is the name i want for the collection

  //   const getCategoriesMap = async () => {
  //     const categoryMap = await getCategoriesAndDocuments();
  //     // console.log('categoryMap', categoryMap);
  //     setCategoriesMap(categoryMap);
  //   };
  //   getCategoriesMap();
  // }, []);

  useEffect(() => {
    if (data) {
      const { collections } = data;
      const collectionsMap = collections.reduce((acc, collection) => {
        const { title, items } = collection;
        acc[title.toLowerCase()] = items;
        return acc;
      }, {});
      setCategoriesMap(collectionsMap);
    }
  }, [data]);

  const value = { categoriesMap, loading };
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
