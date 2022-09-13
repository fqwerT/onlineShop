import React, { useState, useEffect } from "react";
import "./cart.style.scss";
import Order from "../order/Order";
import Amount from "../Amount/Amount";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

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
                <Amount />
              </div>
              <div>
                <h3 className="cart__inf">Цена: {item.price}</h3>
                <button
                  className="cart__btn"
                  onClick={() => handleRemove(item.id)}
                >
                  Убрать
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export { Cart };
