import React, { useRef, useState, useEffect} from "react";
import "./login.style.scss";

function Login() {
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
          <h1 className="messageInfo">Вы авторизированы!</h1>
          <br />
        </section>
      ) : (
        <div className="login__container">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <form onSubmit={handleSubmit}>
            <div className="login__box">
            <label className="login__label" htmlFor="username">Логин:</label>
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
            </div>
            <div className='login__box'>
            <label className="login__label" htmlFor="password">Пароль:</label>
            <input

              className="login__input"
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              autoComplete="off"
            />
            <div className="login__btnBox"><button className="login__btn">Авторизироваться</button></div>        
            </div>          
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
