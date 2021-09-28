import React from 'react';

function Cart() {
  return (
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
  );
}

export default Cart;
