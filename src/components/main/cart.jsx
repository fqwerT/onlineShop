import React, { useState, useEffect } from "react";
import "./cart.style.scss";
import Order from "./Order.jsx";

const Cart = ({ cart, setCart, handleChange}) => {
  const [price, setPrice] = useState(0);
  const [showOrder, setShowOrder] = useState(false);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article className="cart">
      <div className="cart__container">
        {cart.map((item) => (
          <div className="cart__box" key={item.id}>
            <img className="cart__img" src={item.itemUrl} alt="illustration" />
            <div className="cart__options">
              <h3 className="cart__inf">{item.type}</h3>
              <div>
                <button
                  className="cart__btn"
                  onClick={() => handleChange(item, 1)}
                >
                  +
                </button>
                <span className="cart__inf">{item.amount}</span>
                <button
                  className="cart__btn"
                  onClick={() => handleChange(item, -1)}
                >
                  -
                </button>
              </div>
              <div>
                <h3 className="cart__inf">Цена: {item.price}</h3>
                <button
                  className="cart__btn"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart__total">
        <h3 className="cart__totalPrice">Общая цена корзины </h3>
        <h3 className="cart__totalPrice">- {price} Руб</h3>
      </div>
      <button className='cart__makeOrder'onClick={() => setShowOrder(!showOrder)}>Оформить заказ</button>
      {showOrder && (   
          <Order
            cart={cart}
            setShowOrder={setShowOrder}
            showOrder={showOrder}
          />
      )}
    </article>
  );
};

export default Cart;
