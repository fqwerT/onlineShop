import React from "react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./filter.style.scss";

function Filter({
  selected,
  setSelected,
  selected2,
  setSelected2,
  setSelectFilter,
  setSearchPriceFilter,
  searchPriceFilter,
  setMatherialFilter,
  matherialFilter,
}) {
  const [itemList, setItemList] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get("http://localhost:3001/itemList");
      setItemList(res.data);
    };
    fetchItems();
  }, []);



  const changeItemFilter = useCallback((name, id) => {
    setSelected(name);
    setSelectFilter(name);
  }, []);

  const clearItemFilter = useCallback((name, id) => {
    setSelected("");
    setSelectFilter("");
  }, []);

  const changeMatherialFilter = useCallback((matherial, id) => {
    setSelected2(matherial);
    setMatherialFilter(matherial);
  }, []);

  const clearMatherialFilter = useCallback((matherial, id) => {
    setSelected2("");
    setMatherialFilter("");
  }, []);

  return (
    <div className="filter">
      <div className="filter__btn" onClick={(e) => setIsActive(!isActive)}>
        <div className="filter__brandName">
          <h3 className="filter__brandNameItem">Брэнд:</h3>
          <h3 className="filter__brandNameItem">{selected}</h3>
          <h3
            className="filter__clearFilter"
            onClick={(e) => clearItemFilter(itemList.brand)}
          >
            x
          </h3>
        </div>
      </div>
      {isActive && (
        <div className="filter__selectContent">
          {itemList.map((item) => (
            <div
              className="filter__item"
              onClick={() => changeItemFilter(item.brand)}
            >
              <h3 className="filter__linkItem">{item.brand}</h3>
            </div>
          ))}
        </div>
      )}
      <div className="filter__price">
        <input
          onChange={(e) => setSearchPriceFilter(e.target.value)}
          value={searchPriceFilter}
          className="filter__priceValue"
          placeholder="Цена"

         
        ></input>
      </div>
      <div className="filter__matherial">
        <div
          className="filter__matherialBtn"
          onClick={(e) => setIsActive2(!isActive2)}
        >
          <div className="filter__buttonTittle">
            <h3>Материал:</h3>
            <h3>{selected2}</h3>
            <h3
              className="filter__clearFilter"
              onClick={(e) => clearMatherialFilter(itemList.name)}
            >
              x
            </h3>
          </div>
        </div>
        {isActive2 && (
          <div className="filter__matherialBody">
            {itemList.map((item) => (
              <div
                className="filter__bodyItem"
                onClick={() => changeMatherialFilter(item.matherial)}
              >
                {" "}
                <div className="filter__itemLink">
                  <h3>{item.matherial}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Filter;
