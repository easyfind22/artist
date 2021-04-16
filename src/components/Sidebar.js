import React from 'react'
import { usePaintingsContext } from '../context/paintings_context'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { links } from '../utils/constants'
import styled from 'styled-components'
import CartButtons from './CartButtons'
import HeartButtons from './HeartButtons'


const Sidebar = () => {

const {isSidebarOpen,closeSidebar} = usePaintingsContext();


  return (
    <SidebarContainer>
      <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
       <div className='sidebar-header'>
         <h1>Lorem</h1>
         <button className='close-btn' type='button' onClick={closeSidebar}>
           <FaTimes/>
         </button>
       </div>
       <ul className="links">
         {links.map(({id,text,url})=>{
           return <li key={id}>
             <Link to={url} onClick={closeSidebar}>{text}</Link>
           </li>
         })}
    
       </ul>

       <div className="otherThree">
       <HeartButtons />
         <CartButtons/>
       </div>
       </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    h1{
      font-family:'tangerine',cursive;
      font-size:5rem;
      color:var(--box1);
    }
  }
  .close-btn {
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--box3);
    transition: var(--transition);
    cursor: pointer;
    margin-top: 0.2rem;
  }

  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1rem;
    font-weight:bolder;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--white);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--circle2);
    color: var(--black);
    font-size:1.1rem;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--rectangle);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
.heart-container{
 position:absolute;
 top:70%;
 left:20%;

}
.cart-btn{
  position:absolute;
  top:70%;
  left:45%;
  color:var(--white);
}
.auth-btn{
  position:absolute;
  top:70%;
  left:60%;
  color:white;
  font-size:1.3rem;
}

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
