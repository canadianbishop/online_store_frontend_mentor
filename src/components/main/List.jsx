 import './main.css'
 
 export default function List(props){
      console.log(props.listDets)
      return(
            <li>
            <h4>{props.listDets.name}</h4>
            <div className="carted_items">
              <span>{props.listDets.number}x</span>
              <p>@${props.listDets.price} ${props.listDets.price * props.listDets.number}</p>
              <div onClick={()=>props.onDelete(props.listDets.id)}>
                <img src="/images/icon-remove-item.svg" alt="" />
              </div>
            </div>
          </li>
      )
}