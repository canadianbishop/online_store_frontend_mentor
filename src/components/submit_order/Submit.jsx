
import{Confirmed_li} from '../main/List'
import './submit.css'
export default function Submit(props){
const cart = props.carts
const total =  cart.reduce((acc,ele)=>( acc + ele.number * ele.price),0)
      // console.log(props.li)
      return(
            <div className="submit_container">
                  <div className='submit_div'>
                      <img src="/images/icon-order-confirmed.svg" alt="" />  
                      <h2>order cofirmed</h2>
                      <p>we hope you enjoy you food</p>
                      <ul>
                       {props.li}
                      </ul>
                      <div className='order_total '>
                        <p>Order Total</p>
                        <p>${total}</p>
                      </div>
                      <button className='order_btn btn-bg' onClick={props.onClear}> start new order</button>
                  </div>
            </div>
      )
}