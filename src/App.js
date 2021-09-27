import React from 'react';

function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30">Корзина</h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              {/* <img width={70} className="mr-20" height={70} src="./sneakers/1.jpg" alt="Sneakers" /> */}
              <div
                style={{ backgroundImage: 'url(./sneakers/1.jpg)' }}
                className="cartItemImg"></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/button-remove.svg" alt="remove" />
            </div>

            <div className="cartItem d-flex align-center mb-20">
              {/* <img width={70} className="mr-20" height={70} src="./sneakers/1.jpg" alt="Sneakers" /> */}
              <div
                style={{ backgroundImage: 'url(./sneakers/1.jpg)' }}
                className="cartItemImg"></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/button-remove.svg" alt="remove" />
            </div>
          </div>
          
          <ul className = 'cartTotalBlock'>
            <li className="d-flex">
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li className="d-flex">
              <span>Налог 5%</span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/logo.png" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30">
            <img width={40} height={40} src="/cart.svg" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={40} height={40} src="/user.svg" />
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/search.svg" alt="search" />
            <input placeholder="Поиск" />
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="./heard-unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="./sneakers/1.jpg" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/btnPlus.svg" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="./sneakers/2.jpg" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/btnPlus.svg" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="./sneakers/3.jpg" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/btnPlus.svg" />
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="./sneakers/4.jpg" />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/btnPlus.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// 22:35
