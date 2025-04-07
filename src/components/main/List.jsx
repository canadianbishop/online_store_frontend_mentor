import "./main.css";

export default function List(props) {
  return (
    <li>
      <h4>{props.listDets.name}</h4>
      <div className="carted_items">
        <span>{props.listDets.number}x</span>
        <p>
          @${props.listDets.price} $
          {props.listDets.price * props.listDets.number}
        </p>
        <div onClick={() => props.onDelete(props.listDets.id)}>
          <img src="/images/icon-remove-item.svg" alt="" />
        </div>
      </div>
    </li>
  );
}

export function Confirmed_li(props) {

  // console.log(props.confirmed)

  return (
    <li>
      <div className="product_info">
        <img src={props.confirmed.image.desktop} alt="" />
        <div className="product_name">
          <p> {props.confirmed.name}</p>
          <p>
            <span className="num">{props.confirmed.number}x</span>{" "}
            <span className="product_price">@${props.confirmed.price}</span>
          </p>
        </div>
      </div>
      <p>${props.confirmed.number * props.confirmed.price}</p>
    </li>
  );
}

