import React from 'react';

const Cart = ({image, name, salary}) => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="./heard-unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src={image} />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{salary}.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/btnPlus.svg" />
        </button>
      </div>
    </div>
  );
}

export default Cart;
