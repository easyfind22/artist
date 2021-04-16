import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { usePaintingsContext } from '../context/paintings_context'

const HeartButtons = () => {

  const { closeSidebar } = usePaintingsContext()
  
  return <Wishlist className="heart-btn-wrapper">
      <Link to="/wishlist" className="heart-btn" onClick={closeSidebar}>
          <span className="heart-container">
            <FaHeart/>
           </span>
      </Link>
  </Wishlist>
}

const Wishlist  = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .heart-btn {
    font-size: 1.8rem;
    letter-spacing: var(--spacing);
    color: var(--heart);
    display:flex;

    align-items: center;
  }
  .heart-container {
    display: flex;
    align-items: center;
    position: absolute;
    right:25%;
    top:5%;
    svg {
      height:2rem;
      
    }
  }

  ${'' /* .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  } */}
`
export default HeartButtons
