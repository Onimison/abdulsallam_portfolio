import Link from 'next/link';
import React from 'react';
import {AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  {
  return (
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", color: "black"}}>
            <Span>Abdulsallam</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#work">
            <NavLink>Work</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#About">
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <NavLink>Contact</NavLink>
          </Link>
        </li>
        
      </Div2>
      <Div3>
        <SocialIcons href="https://instagram.com">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
    
  )
  }
export default Header;
