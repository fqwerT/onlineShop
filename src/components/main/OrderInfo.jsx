import React from "react";
import './info.style.scss'



function OrderInfo({item, showDopInfo, setShowDopInfo}) {
    return(
        <div className="order__container" key='1'>
        <h1 className="order__Infoitem">Брэнд: {item.brand}</h1>
        <h1 className="order__Infoitem">{item.type}</h1>
        <h1 className="order__Infoitem">Цена: {item.price}</h1>
        <button className="order__btn" onClick={() => setShowDopInfo(!showDopInfo)}>
          Подробнее..
        </button>
        {showDopInfo && (
          <div className="order__dopInfo">
            <h1>Цвет: {item.color}</h1>
            <h1>Материал: {item.matherial}</h1>
            <h1>Колличество: {item.amount}</h1>
          </div>    
        )}
        </div>
    )
}

export default OrderInfo;