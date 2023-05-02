import React from "react";
import "./Payment.css";


const Payment = () => {
  const [itemCount, setItemCount] = React.useState(1);
  return (
    <>
      <br />
      <br />
      <div class="card-pay">
        <div class="row">
          <div class="col-md-8 cart">
            <div class="title">
              <div class="row">
                <div class="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div class="col align-self-center text-right text-muted">
                  {itemCount} items
                </div>
              </div>
            </div>
            <div class="row border-top border-bottom">
              <div class="row main-pay align-items-center">
                {/* <div class="col-2"><img class="img-fluid" src="https://i.imgur.com/1GrakTl.jpg"/></div> */}
                <div class="col">
                  <div class="row text-muted">Pizza</div>
                  <div class="row">Pizza Express Margherita</div>
                </div>
                <div class="col">
                  <a
                   
                    onClick={() => {
                      setItemCount(Math.max(itemCount - 1, 0));
                    }}
                  >
                    -
                    &nbsp; &nbsp;
                  </a>
                  <a>
                    {itemCount}
                  </a>
                  <a
                   
                    onClick={() => {
                      setItemCount(Math.max(itemCount + 1, 0));
                    }}
                  >
                     &nbsp; &nbsp;
                    +
                  </a>
                </div>
                <div class="col">
                  ₹ { 550 * itemCount} <span class="close">&#10005;</span>
                </div>
              </div>
            </div>
            {/* <div class="row">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="https://i.imgur.com/ba3tvGm.jpg"/></div>
                            <div class="col">
                                <div class="row text-muted">Shirt</div>
                                <div class="row">Cotton T-shirt</div>
                            </div>
                            <div class="col">
                                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                            </div>
                            <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
                        </div>
                    </div>
                    <div class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="https://i.imgur.com/pHQ3xT3.jpg"/></div>
                            <div class="col">
                                <div class="row text-muted">Shirt</div>
                                <div class="row">Cotton T-shirt</div>
                            </div>
                            <div class="col">
                                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                            </div>
                            <div class="col">&euro; 44.00 <span class="close">&#10005;</span></div>
                        </div>
                    </div> */}
            <div class="back-to-shop">
              <a href="/">
                <span class="text-muted">Back to shop</span>
              </a>
            </div>
          </div>
          <div class="col-md-4 summary">
            <div>
              <h5>
                <b>Summary</b>
              </h5>
            </div>
            <hr />
            <div class="row">
              <div class="col" style={{ paddingLeft: 0 }}>
                &nbsp; &nbsp; Item 1
              </div>
              <div class="col text-right">₹  { 550 * itemCount}</div>
            </div>
            <form class="form-pay">
              <p>SHIPPING</p>
              <select>
                <option class="text-muted">Standard-Delivery- ₹ 50.00</option>
              </select>
              <p>GIVE CODE</p>
              <input id="code" placeholder="Enter your code" />
            </form>
            <div
              class="row"
              style={{
                borderTop: "1px solid rgba(0,0,0,.1)",
                padding: "2vh 0",
              }}
            >
              <div class="col">TOTAL PRICE</div>
              <div class="col text-right">₹  { 550 * itemCount + 50}.00</div>
            </div>
            <button class="btn-pay">CHECKOUT</button>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Payment;
