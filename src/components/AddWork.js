import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const AddWork = () => {
  return(
  <Add>
   <div className="add-work">
   <div class="rectangle">
   <div className="rectangles">
   <div className="container1">

       <div className="rectangle1">
       <div className="circle1">
         <h4 className="one">01</h4>
       </div>
          <h4 className="heading1">REGISTER YOURSELF</h4>
          <p className="info1">To add your work <br/> register yourself first. </p>
       </div>
     </div>
     <div className="container2">
     
       <div className="rectangle2">
       <div className="circle2">
         <h4 className="two">02</h4>
       </div>
          <h4>ADD DETAILS</h4>
          <p>Add all your details <br/>such as your name, type <br/> of your art, profile <br/> picture, price, etc. </p>
       </div>
     </div>
     {/* <div className="container3">
     <div className="circle3">
         <h4 className="three">03</h4>
       </div>
       <div className="rectangle3">
          <h4>UPLOAD PHOTOS</h4>
          <p>Upload photos of your <br/> Artwork. </p>
       </div>
     </div> */}
            <h2 class="work"><span class="how-to">How to  </span>Add your Work</h2>
            <div class="clickme ">
                <button class="add-your-work"> <a href=""> Add Your Work</a></button>
                </div>
            </div>
            <div class="triangle-down"></div>
        </div>
        
     
     


   </div>
  </Add>
  ) 
}

const Add = styled.section`

.rectangle{
  position: relative;
    width: 100%;
    height: 400px;
    background-color: var(--rectangle);
    margin-top: 30%;
    z-index: 0;
    text-align: center;
    justify-content:center;
    align-items:center;
}
.rectangle1{
  position:absolute;
  text-align:center;
  align-item:center;
  left:6.25%;
  top:-50%;
  background-color: var(--box1);
  height: 400px;
  width: 300px;
   .heading1{
    color: var(--black);
    font-family: 'Abril Fatface', cursive;
    font-weight: bold;
    letter-spacing: 1px;
    margin-top:70px;
  }
  .info1{
    font-size: 2rem;
    font-family: 'Pompiere', cursive;
    font-weight: bolder;
    text-align: center;
    color: var(--circle1);
    margin-top: 15%;
    animation: fadeDown 1s forwards;
    animation-delay: 3s;
  }
}
.circle1{
  position:absolute;
  left:95px;
  top:-15%;
  height: 100px;
  width:100px;
  text-align:center;
  align-item:center;
  background-color: var(--circle1);
  border-radius: 50%; 
  border: 5px solid #BBBBBB;
  z-index: 1;

}

.one
{
    position:absolute;
    top:18%;
    left:18%;
    color: var(--white);
    font-size:3rem;
    
}


.work
{
    position: absolute;
    top:55%;
    left:10%;
    right:10%;
    z-index: 1;
    align-self:center;
    color: white;
    font-family: 'Tangerine', cursive;
    font-size: 4rem;
    word-spacing: 1rem;
    animation: fadeUp 2s forwards;
    animation-delay: 3.6s;
    
}
.how-to
{
    color: #BBBBBB;
}
.add-your-work
{
    position:absolute;
    left:38%;
    right:38%;
    top:76%;
    background-color:#00E1FF;
    border-radius: 20px;
    width: 250px;
    height: 55px;
    cursor: pointer;
    outline: none;
    text-align: center;
    display: inline-block;
    box-shadow: -3px 5px 25px  var(--box);
    border: none;
    animation: fadeDown 1s forwards;
    animation-delay: 3.7s;
}
.add-your-work a
{
    position: center;
    z-index: 2;
    font-size: x-large;
    text-decoration: none;
    letter-spacing: 1.5px;
    color: var(--black);
    font-family: 'Abril Fatface', cursive;
    font-weight: bold;
}
${'' /* .triangle-down
{   
  position:absolute;
  top:100%;
  border-left: 674px solid transparent;
	border-right: 590px solid transparent;
	border-top: 80px solid var(--rectangle);
  filter: drop-shadow(8px 8px 10px gray);
  
   
} */}

`

export default AddWork
