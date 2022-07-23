import CategoryPoster from './CategoryPoster';

const Categories = () => {
  const categories = [
    {
      id: 1,
      key: 'hats',
      title: 'Hats',
      imageURL:
        'https://images.unsplash.com/photo-1533055640609-24b498dfd74c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGF0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 2,
      key: 'jackets',
      title: 'Jackets',
      imageURL:
        'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8amFja2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 3,
      key: 'mens',
      title: 'Mens',
      imageURL:
        'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVucyUyMGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 4,
      key: 'sneakers',
      title: 'Sneakers',
      imageURL:
        'https://images.unsplash.com/photo-1588273565869-a06552c35ef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHNuZWFrZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 5,
      key: 'womens',
      title: 'Womens',
      imageURL:
        'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW5zJTIwY2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    }
  ];

  return (
    <div className='categories'>
      {categories.map((category) => (
        <CategoryPoster key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
