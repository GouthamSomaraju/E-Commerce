import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, increaseQuantity, decreaseQuantity, clearCart } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
import './CartPage.css'

const CartPage = () => {
  let navigate = useNavigate()
  let isLoggedIn = localStorage.getItem('user')

  let handleBuyNow = () => {
    if (isLoggedIn) {
      navigate('/payment')
    } else {
      navigate('/login')
    }
  }

  let dispatch = useDispatch()
  let { products, totalPrice } = useSelector(state => state.cart)

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-header">
        <h2>Total Price: Rs. {totalPrice}</h2>
        <div>
          <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button>
          <button className="clear-btn" onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
      </div>
      <div className="cart-items">
        {products.map(product => (
          <div key={product.id} className="cart-card">
            <img src={product.image} alt={product.title} className="cart-img" />
            <h3>{product.title}</h3>
            <p className='product-price'>Rs. {product.price}</p>
            <div className="quantity">
              <button onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
            </div>
            <button className="remove-btn" onClick={() => dispatch(removeItem(product.id))}>Remove Item</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CartPage
