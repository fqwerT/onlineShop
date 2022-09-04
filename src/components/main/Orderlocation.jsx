import React, { useRef, useState, useEffect } from "react";
import "./login.style.scss";
import MapBtn from "./OrderMapBtn";

function Location() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section className="message">
          <h1 className="messageInfo">Адрес подтвержден</h1>
          <br />
        </section>
      ) : (
        <div className="login__container">
          <form onSubmit={handleSubmit}>
            <div className="login__box">
              <label className="login__label" htmlFor="username">
                Адресс
              </label>
              <input
              
                className="login__input"
                type="text"
                ref={userRef}
                id="username"
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                
                />
              <div className="login__btnBox">
                <button className="login__btn">Подтвердить</button>
                <MapBtn/>
              </div>
            </div>

         
          </form>
        </div>
      )}
    </>
  );
}

export default Location;
