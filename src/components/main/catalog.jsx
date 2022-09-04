import React from "react";
import { useState } from "react";
import "./catalog.style.scss";
import Filter from "./filter";
import Rate from "./rating";

function Catalog({
  itemList,
  setSelectFilter,
  selectFilter,
  setMatherialFilter,
  matherialFilter,
  setSearchPriceFilter,
  searchPriceFilter,
  item,
  HandleClick,
  rating,
  setRating
  
}) {
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("");

  return (
    <div className="container">
      <Filter
        selected={selected}
        setSelected={setSelected}
        selected2={selected2}
        setSelected2={setSelected2}
        setSelectFilter={setSelectFilter}
        selectFilter={selectFilter}
        setSearchPriceFilter={setSearchPriceFilter}
        searchPriceFilter={searchPriceFilter}
        setMatherialFilter={setMatherialFilter}
        matherialFilter={matherialFilter}
      />
      <div className="container__catalog">
        {itemList.map((item) => (
          <div id={item.id} key={item.id} className="container__item">
            <img
              src={item.itemUrl}
              className="container__illustration"
              alt="img"
            />
            <div className="container__info">
              <div className="container__infoItem">
                <h3>Цена:</h3>
                <p className="container__price">{item.price}</p>
              </div>
              Брэнд:
              <img
                id={item.id}
                alt={item.brand}
                src={item.logoUrl}
                className="container__logo"
              />
              <div className="container__dopInfo">
                <div className="container__dopInfoItem">
                  <h3>Модель:</h3>
                  <h3>{item.type}</h3>
                </div>
                <div className="container__dopInfoItem">
                  <h3>Maтериал:</h3>
                  <h3>{item.matherial}</h3>
                </div>
                <Rate id={item.id} rating={rating} setRating={setRating} key={item.id}/>
                <h3 className='container__add' onClick={() => HandleClick(item)}>+ В корзину</h3>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}
export default Catalog;
