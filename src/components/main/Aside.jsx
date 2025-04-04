 import './main.css'
 
 export default function Aside(){
      return(
            <div className="cart_details">
          <h2>your cart (0)</h2>
          {/* <div>
            <img src="/images/illustration-empty-cart.svg" alt="img" />
            <p>your added items will appear here</p>
          </div> */}

          <div className="carted_items_container">
            <ul>
              <li>
                <h4>vanilla pancake</h4>
                <div className="carted_items">
                  <span>2x</span>
                  <p>@$20 $550</p>
                  <div>
                    <img src="/images/icon-remove-item.svg" alt="" />
                  </div>
                </div>
              </li>
              <li>
                <h4>vanilla pancake</h4>
                <div className="carted_items">
                  <span>2x</span>
                  <p>@$20 $550</p>
                  <div>
                    <img src="/images/icon-remove-item.svg" alt="" />
                  </div>
                </div>
              </li>
            </ul>

            <div className="carts_total">
                  <div className="total">
                        <span>order total</span>
                        <span>$46.50</span>
                  </div>
                  <div className="msg_container"><img src="/images/icon-carbon-neutral.svg" alt="" /><p>this is a carbon neutral delivery</p></div>
                  <button type="button" className="btn-bg order_btn">Confirm Order</button>
            </div>
          </div>
        </div>
      )
}