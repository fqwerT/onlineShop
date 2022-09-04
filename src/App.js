import React from "react";
import Header from "./components/header/header.jsx";
import Catalog from "./components/main/catalog.jsx";
import { useState, useMemo, useEffect } from "react";
import axios from "axios";
import Cart from "./components/main/cart.jsx";

function App() {
  const [selectFilter, setSelectFilter] = useState("");
  const [matherialFilter, setMatherialFilter] = useState("");
  const [itemList, setItemList] = useState([]);
  const [searchPriceFilter, setSearchPriceFilter] = useState("");
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [rating, setRating] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get("http://localhost:3001/itemList");
      setItemList(res.data);
    };
    fetchItems();
  }, []);


  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const HandleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };


  useEffect(() => {}, [selectFilter]);
  useEffect(() => {}, [searchPriceFilter]);
  useEffect(() => {}, [matherialFilter]);

  const filter = useMemo(() => {
    if (selectFilter !== "") {
      return itemList.filter((item) => item.brand === selectFilter);
    }

    if (matherialFilter !== "") {
      return itemList.filter((item) => item.matherial === matherialFilter);
    }

    if (searchPriceFilter !== "") {
      return itemList
        .map((item) => {
          if (
            item.price.toString().toLowerCase() <=
            searchPriceFilter.toLowerCase()
          )
            return item;
          else return false;
        })
        .filter((el) => el);
    } else {
      return itemList;
    }
  }, [selectFilter, itemList, searchPriceFilter, matherialFilter]);

  return (
    <div className="App">
      <Header setShow={setShow} size={cart.length} />
      <main>
      {show ? (
        <Catalog
          itemList={filter}
          selectFilter={selectFilter}
          setSelectFilter={setSelectFilter}
          matherialFilter={matherialFilter}
          setMatherialFilter={setMatherialFilter}
          searchPriceFilter={searchPriceFilter}
          setSearchPriceFilter={setSearchPriceFilter}
          cart={cart}
          setCVarts={setCart}
          HandleClick={HandleClick}
          rating={rating}
          setRating={setRating}/>

          

          ) : (
            <Cart cart={cart} setCart={setCart} handleChange={handleChange} rating={rating} />
      )}
      </main>
    </div>
  );
}

export default App;
