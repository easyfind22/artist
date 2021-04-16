import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { usePaintingsContext } from '../context/paintings_context'


const CartButtons = () => {

const { closeSidebar } = usePaintingsContext()

  return <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
          <span className="cart-container">
            <FaShoppingCart/>
            <span className="cart-value">12</span>
          </span>
      </Link>
      <div className="login">
      <button type='button' className="auth-btn">
        LOGIN <FaUserPlus/>
      </button>
      </div>
  </Wrapper>
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    font-size: 1.8rem;
    letter-spacing: var(--spacing);
    color: var(--heading);
    display:flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: absolute;
    right:18%;
    top:5%;
    svg {
      height:2rem;
      
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--box1);
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.9rem;
    font-weight:bolder;
    color: var(--black);
    padding: 12px;
  }
  .auth-btn {
   
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    color: var(--black);
    letter-spacing:1px;
    font-size: 1.1rem;
    font-weight:bold;
    display:flex;
    align-items: center;
    position: absolute;
    right:6%;
    top:5.3%;
    svg {
      font-size:1.1rem;
      margin-left:5px;
    }
    &:hover{
      color:var(--box1);
    }
  }
`
export default CartButtons
