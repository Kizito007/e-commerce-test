import React from 'react'
import PlaceholderP from "./assets/PlaceholderP.png"

const CheckoutScreen = () => {
  return (
    <div style={{ margin: "100px 15%" }}>
      <h1>Check Out</h1>
      <div className='checkout-con'>
        <div>
          <h3>Information</h3>
          <form>
            <input type="text" placeholder="Name" /> <br/><br/>
            <input type="text" placeholder="Email" /> <br/><br/>
            <input type="text" placeholder="Address" /> <br/><br/>
            <button className="checkout-btn">Confirm & Pay</button>
          </form>
        </div>
        <div>
          <h3>Cart</h3>
          <div style={{ display: "flex" }}>
          <img style={{ width: "43px", height: "41px" }} src={PlaceholderP} />
          <div style={{ position: "relative", top: "-20px", left: "20px" }}>
              <h3>Product name</h3>
              <span>Qty: 1  </span>
              <span style={{ margin: "0 20px" }}>$19.90</span>
          </div>
          </div>
          <h3>Total: $19.99</h3>
        </div>
      </div>
    </div>
  )
}

export default CheckoutScreen