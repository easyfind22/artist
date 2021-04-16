
import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import HeartButtons from './HeartButtons'
import {usePaintingsContext } from '../context/paintings_context'
import artisticImage from '../assets/artistic-image.png'


const Nav = () => {

const {openSidebar} = usePaintingsContext()

  return <NavContainer><div classname="nav-center">
  <img className="navbar-image" src={artisticImage}/>
    <div className="nav-header">
    
      <Link to="/">
        <h1 className="heading">Lorem</h1>
      </Link>

      <div  className="nav-toggle" onClick={openSidebar}>
        <FaBars/>
      </div>
    </div>
    <ul className="nav-links">
      {links.map((link)=> {
       const {id, text,url} = link;
       return <li key={id}>
         <Link to={url}>{text}</Link>
       </li>
      })}
    </ul>
    <HeartButtons/>
    <CartButtons/>
  </div></NavContainer>
}

const NavContainer = styled.nav`


  .nav-center {

    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 8vh;
    
    
  }
  .navbar-image{
    height:80px;
    width:100%;
    position:relative;
    z-index:0;

  }
  .nav-header {
    font-family: 'Tangerine', cursive;
    padding: 0;
    margin-left:1rem;
    margin-top:1rem;
    
    z-index: 1;
    opacity: 1;
    animation: scale 1s forwards;
    
    .heading{
       font-size:4rem;
       color:var(--heading);
       position:absolute;
       z-index:1;
       margin-top:-6rem;
       
    }
  }
  .nav-toggle {
     
    svg {
      display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,60%);
        font-size: 2.5rem;
        cursor: pointer;
        color:var(--heading);
      
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: grid;
  }
  .heart-btn-wrapper{
    display:grid;
  }
  .login{
    display:none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      
    }
    .nav-header{
        margin:1rem;
        .heading{
            font-size:5rem;
        }
    }
    .navbar-image{

    position:relative;
    z-index:0;
  }
    .nav-links {
       position:absolute;
       top:1.9rem;
        display: flex;
        justify-content: space-around;
        width: 40%;
        margin-left:30%;
        ${'' /* margin-top:-10.5rem; */}
        
        z-index: 1;
        font-weight:bold;
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
      li{
          &:hover{
              color:var(--box1);
          }
      }
  
    }

    .cart-btn-wrapper {
      display: grid;
    }
    .heart-btn-wrapper{
    display:grid;
  }
  .login{
    display:flex;
  }

  }
`

export default Nav

