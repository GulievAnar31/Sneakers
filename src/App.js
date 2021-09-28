import React from 'react';
import Cart from './components/Cart';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
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

        <div className="d-flex">
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default App;

// 22:35
