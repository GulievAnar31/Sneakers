import React from 'react';
import Cart from './components/Cart';
import Header from './components/Header';
import Drawer from './components/Drawer';

const sneakers = [
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    salary: '12 999 руб',
    image: './sneakers/1.jpg',
  },
  { name: 'Мужские Кроссовки Nike Air Max 270', salary: '12 999 руб', image: './sneakers/2.jpg' },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    salary: '8 999 руб',
    image: './sneakers/3.jpg',
  },
  {
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    salary: '8 499 руб',
    image: './sneakers/4.jpg',
  },
];

function App() {
  const sneaker = sneakers.map((item, index) => {
    return <Cart name={item.name} salary={item.salary} image={item.image} key={index} />;
  });

  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/search.svg" alt="search" />
            <input placeholder="Поиск" />
          </div>
        </div>

        <div className="d-flex">{sneaker}</div>
      </div>
    </div>
  );
}

export default App;
