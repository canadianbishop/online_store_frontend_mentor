import { nanoid } from "nanoid";
import Card from "./Card";
import "./main.css";
import Data from "./data.json";
import { useEffect, useState } from "react";
import Aside from "./Aside";

export default function Main() {
  const [dets, setDets] = useState([]);
  const [carts, setcarts] = useState([]);

  const items = dets.map((item) => (
    <Card
      key={item.id}
      menu={item}
      setAdd={addItem}
      addcartnum={addToCart}
      subcartnum={subFromCart}
      
    />
  ));

  useEffect(() => {
    const updatedData = Data.map((item) => ({
      ...item,
      id: nanoid(),
      add: false,
      number: 0,
    }));
    setDets(updatedData);
  }, []);

  // add item to cart button
  function addItem(id) {
    setDets((prevDets) => {
      return prevDets.map((item) =>
        item.id === id ? { ...item, add: !item.add } : item
      );
    });
  }

  //   update carted numbers

  function addToCart(id) {
    setDets((prevDets) => {
      return prevDets.map((item) =>
        item.id === id ? { ...item, number: item.number + 1 } : item
      );
    });
  }

  function subFromCart(id) {
    setDets((prevDets) => {
      return prevDets.map((item) =>
        item.id === id ? { ...item, number: item.number - 1 } : item
      );
    });
  }

  return (
    <div className="container container_layout">
      <section className="main">
        <h1>Desserts</h1>
        <div className="card_cont">{items}</div>
      </section>

      {/* aside section */}

      <section className="aside">
        <Aside />
      </section>
    </div>
  );
}

//when i click add to cart button i want to set carts state to an array of object for each card clicked i create a new objct in the array
// after this i will map through the array and update the aside component with the information of each card representing a list item
//the delete icon should also delete list from the dom and the setcarts array
