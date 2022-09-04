import React, { useState } from "react";
import "./order.style.scss";
import OrderInfo from "./OrderInfo";
import Login from "./OrderLogin";
import Location from "./Orderlocation";
import Payment from "./OrderPayment";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function InfoOrder({ cart, setShowOrder, showOrder }) {
  const [showDopInfo, setShowDopInfo] = useState(false);
  const [info, setInfo] = useState(true);
  const [login, setLogin] = useState(false);
  const [location, setLocation] = useState(false);
  const [payment, setPayment] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const HandleSwitcher = () => {
    setInfo(false);
    setLogin(false);
    setLocation(false);
    setPayment(false);
    setLoading(true);
    setSuccess(false);

    setTimeout(() => {
      setInfo(false);
      setLogin(false);
      setLocation(false);
      setPayment(false);
      setLoading(false);
      setSuccess(true);
    }, 5000);
  };

  const HandleSetInfo = () => {
    setInfo(true);
    setLogin(false);
    setLocation(false);
    setPayment(false);
    setLoading(false);
    setSuccess(false);
  };

  const HandleSetLogin = () => {
    setInfo(false);
    setLogin(true);
    setLocation(false);
    setPayment(false);
    setLoading(false);
    setSuccess(false);
  };

  const HandleSetLocation = () => {
    setShowDopInfo(false);
    setInfo(false);
    setLogin(false);
    setLocation(true);
    setPayment(false);
    setLoading(false);
    setSuccess(false);
  };

  const HandleSetPayment = () => {
    setInfo(false);
    setLogin(false);
    setLocation(false);
    setPayment(true);
    setLoading(false);
    setSuccess(false);
  };

  return (
    <div>
      {cart.map((item) => (
        <div className="order">
          <div className="order__body">
            <div className="order__chooseOption">
              <button
                className="order__item"
                onClick={() => HandleSetInfo(!info)}
              >
                O товаре
              </button>
              <button
                className="order__item"
                onClick={() => HandleSetLogin(!login)}
              >
                Логин
              </button>
              <button
                className="order__item"
                onClick={() => HandleSetLocation(!location)}
              >
                Адрес
              </button>
              <button
                className="order__item"
                onClick={() => HandleSetPayment(!payment)}
              >
                Оплата
              </button>
              <button
                onClick={() => setShowOrder(!showOrder)}
                className="order__close"
              >
                закрыть
              </button>
            </div>
            <div className="order__content">
              {info && (
                <OrderInfo
                  item={item}
                  showDopInfo={showDopInfo}
                  setShowDopInfo={setShowDopInfo}
                />
              )}
              {login && <Login />}
              {location && <Location />}
              {payment && (
                <>
                  <Payment />
                  <button
                    className="order__closeBtn"
                    onClick={() => HandleSwitcher()}
                  >
                    Завершить
                  </button>
                </>
              )}

              {loading && (
                <>
                  <ClimbingBoxLoader
                    loading={loading}
                    size={25}
                    className="loading"
                  />
                </>
              )}

              {success && <h1 className="successMsg">Заявка успешно сформирована!</h1>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoOrder;
