// Write your code here

import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const updatedList = cartList.map(
        eachList => eachList.price * eachList.quantity,
      )
      console.log(updatedList)
      const priceSum = updatedList.reduce((a, b) => a + b, 0)
      console.log(priceSum)

      return (
        <div className="cart-summary-container">
          <h1 className="cart-summary-heading">
            Order Total:
            <span className="cart-summary-amount"> Rs {`${priceSum}/-`}</span>
          </h1>
          <p className="cart-summary-paragraph">
            {cartList.length} Items in Cart
          </p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
