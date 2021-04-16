import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter,FaRegEnvelope} from 'react-icons/fa'
import footerImage from '../assets/footer-image.png'




const Footer = () => {
  return <FooterWrapper><div className="footer-main">
    <div >
      <img className="footer-image" src={footerImage}/>
    </div>
    <div className="entire">
    <ul className="social-icons">
      <li>
        <a href="https://in.linkedin.com/">
          <FaLinkedin/>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/">
          <FaFacebook/>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/">
          <FaInstagram/>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/?lang=en">
          <FaTwitter/>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/?lang=en">
          <FaRegEnvelope/>
        </a>
      </li>
    </ul>
    <div className="center-content">
        <h1>Lorem</h1>
        <p>lorem Ipsum lorem Ipsum <br/> lorem Ipsum lorem Ipsum</p>
    </div>
    <div className="other-page">
     <Link to="/meetOurTeam">
       <h4>Meet Our Team</h4>
     </Link>
     <Link to="/feedback">
       <h4>Feedback</h4>
     </Link>
    </div>
    </div>
  </div>
 </FooterWrapper>
}

const FooterWrapper = styled.footer`
.footer-main{
  position:relative;
}

.footer-image{
  width:100%;
  height:400px;

}
.entire
{
   display: flex;
   flex-direction: row;
   justify-content: space-between;
}
.social-icons{
  position:absolute;
  display:flex;
  flex-direction:column;
  font-size:2rem;
  top:20%;
  left:2%;
  a{
    color:#00EEFF;
    &:hover{
      color:var(--white);
      font-size:2.3rem;
    }
  }
}
.center-content{
  position:absolute;
  left:34%;
  top:20%;
  text-align:center;

  h1{
    font-family: 'Tangerine', cursive;
    font-size:6rem;
    color:#00EEFF;
  }
  p{
    color:var(--white);
    font-size:1.5rem;
  }
}
.other-page{
  position:absolute;
  right:3%;
  top:22%;
  font-family: 'Cabin', sans-serif;
  h4{
    margin-top:3rem;
    font-size:1.3rem;
    color:#00EEFF;
    &:hover{
      color:var(--white);
    }
  }
}

@media (max-width: 909px) 
{
  .center-content{
  position:absolute;
  left:32%;
  top:20%;
  text-align:center;

  h1{
    font-family: 'Tangerine', cursive;
    font-size:4rem;
    color:#00EEFF;
  }
  p{
    color:var(--white);
    font-size:1rem;
  }
}
.other-page{
  position:absolute;
  right:2%;
  top:20%;
  font-family: 'Cabin', sans-serif;
  h4{
    margin-top:3rem;
    font-size:1rem;
    color:#00EEFF;
    &:hover{
      color:var(--white);
    }
  }
}


}
}
`


export default Footer
