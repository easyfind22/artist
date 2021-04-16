import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import headerImage from '../assets/website-header.jpg'


const Hero = () => {
  return (
  <HeaderImage>
   <article className="main-image">
     <img  className="header-image" src={headerImage}/>
     <div className="buttons">
      <div className="button-container1">
          <button className="btn1"><a>ADD YOUR WORK</a></button>
      </div>
      <div className="button-container2">
        <button className="btn2"><a>EXPLORE PAINTINGS</a></button>
      </div>
   </div>
   </article>

  </HeaderImage>
  )
}

const HeaderImage = styled.section`
.main-image{
  margin-top:-4.5%;
}
.header-image
{
    width: 100%;
   height: 520px;
   position:relative;
   z-index: 0;
   
}
.buttons{
  position:absolute;
  top:37%;
}
.btn1{
  margin-left:8%;
  background-color:var(--login);
  width:310px;
  height:60px;
  border:none;
  border-radius:15px;
 
  a{
    color:var(--white);
    font-family: 'Abril Fatface', cursive;
    font-weight:bold;
    letter-spacing:1.5px;
    font-size:20px;
  }
}
.btn2{
  margin-top:6%;
  margin-left:16%;
  background-color:var(--explorebtn);
  width:310px;
  height:60px;
  border:none;
  border-radius:15px;
  a{
    color:var(--black);
    font-family: 'Abril Fatface', cursive;
    font-weight:bold;
    letter-spacing:1.5px;
    font-size:20px;
  }
}
@media (max-width: 728px){
  .buttons{
  position:absolute;
  top:37%;
}
.btn1{
  margin-left:8%;
  background-color:var(--login);
  width:250px;
  height:50px;
  border:none;
  border-radius:15px;
 
  a{
    color:var(--white);
    font-family: 'Abril Fatface', cursive;
    font-weight:bold;
    letter-spacing:1.5px;
    font-size:17px;
  }
}
.btn2{
  margin-top:6%;
  margin-left:16%;
  background-color:var(--explorebtn);
  width:250px;
  height:50px;
  border:none;
  border-radius:15px;
  a{
    color:var(--black);
    font-family: 'Abril Fatface', cursive;
    font-weight:bold;
    letter-spacing:1.5px;
    font-size:17px;
  }
}
}

@media (min-width: 992px) {
  .main-image{
    margin-top:-3%;
  }
  .header-image
{
    width: 100%;
   height: 520px;
   position:relative;
   z-index: 0;
  
}
.buttons{
  position:absolute;
  top:37%;
}
.btn1{
  margin-left:8%;
  background-color:var(--login);
  width:350px;
  height:70px;
  border:none;
  border-radius:15px;
 
  a{
    color:var(--white);
    font-family: 'Abril Fatface', cursive;
    font-weight:bold;
    letter-spacing:1.5px;
    font-size:20px;
  }
}
.btn2{
  margin-top:6%;
  margin-left:16%;
  background-color:var(--explorebtn);
  width:350px;
  height:70px;
  border:none;
  border-radius:15px;
  a{
    color:var(--black);
    font-family: 'Abril Fatface', cursive;
    font-weight:bold;
    letter-spacing:1.5px;
    font-size:20px;
  }
}
}
`

export default Hero
