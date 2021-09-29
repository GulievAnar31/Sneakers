import React from 'react';
import styles from './Cart.module.scss'

const Cart = ({image, name, salary}) => {
  const [liked, setLiked] = React.useState(false)

  const liker = () => {
    setLiked(!liked);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={liker}
          src={liked ? './heard-liked.svg' : './heard-unliked.svg'}
          alt="unliked"
        />
      </div>
      <img width={133} height={112} src={image} />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена: </span>
          <b>{salary}.</b>
        </div>
        <button className={styles.button}>
          <img width={11} height={11} src="/btnPlus.svg" />
        </button>
      </div>
    </div>
  );
}

export default Cart;
