import React from "react";
import { useState } from "react";
import "./catalog.style.scss";
import Filter from "../filters/filter";
import Title from "../titles/comments";

function Catalog({
  itemList,
  setSelectFilter,
  selectFilter,
  setMatherialFilter,
  matherialFilter,
  setSearchPriceFilter,
  searchPriceFilter,
  HandleClick,
}) {
  const [selected, setSelected] = useState("");
  const [selected2, setSelected2] = useState("");
  const [addFeedback, setAddFeedBack] = useState(false);
  
 

  
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
          <div className="container__item" key={item.price}>
            <img
              src={item.itemUrl}
              className="container__illustration"
              alt="img"
            />
            <div className="container__info">
              <div className="container__infoItem"></div>
              Брэнд:
              <img
                id={item.id}
                alt={item.brand}
                src={item.logoUrl}
                className="container__logo"
              />
              <div className="container__dopInfo">
                <div className="container__dopInfoItem">
                  <h3>{item.type}</h3>
                </div>
                <div className="container__dopInfoItem">
                  <h3>Maтериал:</h3>
                  <h3>{item.matherial}</h3>
                </div>
                <a className="container__add" onClick={() => HandleClick(item)}>
                  Цена:{item.price}
                </a>
                <div className="container__addFeedBack">
                  <button
                    className="container__addFeedbackBtn"
                    onClick={() => setAddFeedBack(!addFeedback)}
                  >
                    Добавить комменатрий
                  </button>
                  {addFeedback && <Title />}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Catalog;
