import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'
import CartSummary from '../CartSummary'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const removeAll = () => {
        removeAllCartItems()
      }

      return (
        <>
          <button type="button" className="remove-button1" onClick={removeAll}>
            <h1 className="remove-all-heading">Remove All</h1>
          </button>
          <ul className="cart-list">
            {cartList.map(eachCartItem => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>
          <CartSummary />
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
