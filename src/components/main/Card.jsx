import "./card.css";
export default function Card(props) {
console.log(props)
  return (
    <div className="card_container">
      <div className="img_container">
        <img src={props.menu.image.desktop} alt="img" />
      </div>
      <div className="dish_infos">
        <p>{props.menu.category}</p>
        <p>{props.menu.name}</p>
        <p>${props.menu.price}</p>
      </div>
      {props.menu.add ? (
        <button type="button" className="addcart_btn btn-bg">
          <div className="increament" onClick={()=>props.subcartnum(props.menu.id)} >
            <img src="/images/icon-decrement-quantity.svg" alt="img" />
          </div>{" "}
          <span>{props.menu.number}</span>
          <div className="decreament" onClick={()=>props.addcartnum(props.menu.id)}>
            <img src="/images/icon-increment-quantity.svg" alt="img" />
          </div>
        </button>
      ) : (
        <button type="button" className="btn" onClick={()=> props.setAdd(props.menu.id)}>
          <div>
            <img src="/images/icon-add-to-cart.svg" alt="img" />
          </div>
          Add to cart
        </button>
      )}
    </div>
  );
}

// i want to display either of two buttons based on a condition
