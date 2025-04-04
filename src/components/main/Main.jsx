import { nanoid } from "nanoid";
import Card from "./Card";
import "./main.css";
import Data from "./data.json";
import { useEffect, useState } from "react";
import List from "./List";

export default function Main() {
  const [dets, setDets] = useState([]);
  const [carts, setcarts] = useState([]);

  // here i am mapping through the dets array and creating a card componet from each element
  const items = dets.map((item) => (
    <Card
      key={item.id}
      menu={item}
      setAdd={addItem}
      addcartnum={addToCart}
      subcartnum={subFromCart}
    />
  ));

  // here i am mapping through the carts array to produce a list item from each element

  const cartedList = carts.map((item) => (
    <List key={item.id} listDets={item} onDelete={deleteCartItem} />
  ));

  // here i am modifying the data recieved before passing it to the dets state

  useEffect(() => {
    const updatedData = Data.map((item) => ({
      ...item,
      id: nanoid(),
      add: false,
      number: 0,
    }));
    setDets(updatedData);
  }, []);

  // add item to cart button.. this flips dets.add from false to true
  function addItem(id) {
    setDets((prevDets) => {
      return prevDets.map((item) =>
        item.id === id ? { ...item, add: !item.add } : item
      );
    });
  }

  //   update carted numbers.. this function helps increment det.number by 1

  function addToCart(id) {
    setDets((prevDets) => {
      return prevDets.map((item) =>
        item.id === id ? { ...item, number: item.number + 1 } : item
      );
    });

    // setting list of carted items
    setcarts((prevcart) => {
      // check if cart item already exists
      const exists = prevcart.find((item) => item.id === id);
      if (exists) {
        return prevcart.map((item) => {
          return item.id === id ? { ...item, number: item.number + 1 } : item;
        });
      } else {
        const newItem = dets.find((item) => item.id === id);
        // check if selected item exists inside the initial state.. if it doest return cart
        if (!newItem) return prevcart;
        return [...prevcart, { ...newItem, number: 1 }];
      }
    });
  }

  // this fnction helps subtract number of intended items  basically the opposite of the initial function..dets.number - 1
  function subFromCart(id) {
    setDets((prevDets) => {
      return prevDets.map((item) =>
        item.id === id ? { ...item, number: item.number - 1 } : item
      );
    });

    // setting list of carted items
    setcarts((prevcart) => {
      return prevcart
        .map((item) =>
          item.id === id ? { ...item, number: item.number - 1 } : item
        )
        .filter((item) => item.number > 0);
    });
  }

  // calculating the total amount of orders

  const total = carts.reduce((acc, cur) => acc + cur.price * cur.number, 0);

  // this function deletes cartlist items

  function deleteCartItem(id) {
    setcarts((prevcart) => prevcart.filter((cartLi) => cartLi.id !== id));
  }

  return (
    <div className="container container_layout">
      <section className="main">
        <h1>Desserts</h1>
        <div className="card_cont">{items}</div>
      </section>

      {/* aside section */}

      <section className="aside">
        <div className="cart_details">
          <h2>your cart ({carts.length})</h2>
          {carts.length === 0 && (
            <div>
              <img src="/images/illustration-empty-cart.svg" alt="img" />
              <p>your added items will appear here</p>
            </div>
          )}

          {carts.length && (
            <div className="carted_items_container">
              <ul>{cartedList}</ul>

              <div className="carts_total">
                <div className="total">
                  <span>order total</span>
                  <span>${total}</span>
                </div>
                <div className="msg_container">
                  <img src="/images/icon-carbon-neutral.svg" alt="" />
                  <p>this is a carbon neutral delivery</p>
                </div>
                <button type="button" className="btn-bg order_btn">
                  Confirm Order
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
