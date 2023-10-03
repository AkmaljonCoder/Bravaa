import React, { useEffect, useState } from 'react';
import { Button, ButtonWr, Container, Link, LinkWr, Logo, Menus } from './style';
import LogoImg from '../../assets/bravaa.svg';

import {BurgerSpin as Burger} from 'react-burger-icons' // react burger icon

const Navbar = ({setReg, setSign}) => {
  const [isClosed, setIsClosed] = useState(false);
  const toggleClosed = () => setIsClosed(!isClosed);

  const [scroll, setScroll] = useState(false);

    const changeColor = ()=>{
        if(window.scrollY >= 50){
        setScroll(true)
        }else{
        setScroll(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll',changeColor, true)
        return ()=>{
        window.removeEventListener('scroll',changeColor)
        }
    }, [])

    const Scrolling = (val) => {
      window.scrollTo({
        top:val,
        behavior:'smooth'
      })
    }

  return (
    <div className={scroll===false? 'navbar1' : 'navbar2'}>
      <Container>
        <Logo onClick={()=>Scrolling(0)} src={LogoImg} />

        <div className='burgir' onClick={toggleClosed}>
          <Burger isClosed={isClosed}/>
        </div>

        <LinkWr>
          <Link onClick={()=>Scrolling(0)}>Home</Link>
          <Link onClick={()=>Scrolling(550)}>Program</Link>
          <Link onClick={()=>Scrolling(1000)}>Community</Link>
          <Link onClick={()=>Scrolling(1600)}>Pricing</Link>
          <h3>|</h3>
          <Link onClick={()=>{setReg(true);setSign('in')}}>Sign In</Link>
          <Button onClick={()=>{setReg(true);setSign('up')}}>Sign Up</Button>
        </LinkWr>

        <Menus className={`${isClosed===true? 'open-menu' : ''}`}>
          <h2 onClick={()=>{setIsClosed(false);Scrolling(0)}} style={{animationDelay:'0.1s'}}>Home</h2>
          <h2 onClick={()=>{setIsClosed(false);Scrolling(450)}} style={{animationDelay:'0.2s'}}>Program</h2>
          <h2 onClick={()=>{setIsClosed(false);Scrolling(1750)}} style={{animationDelay:'0.3s'}}>Community</h2>
          <h2 onClick={()=>{setIsClosed(false);Scrolling(3100)}} style={{animationDelay:'0.4s'}}>Pricing</h2>
          <ButtonWr>
            <h2 style={{animationDelay:'0.5s'}} className='sign-in'>Sign In</h2>
            <h2 style={{animationDelay:'0.5s'}} className='middle'>|</h2>
            <h2 style={{animationDelay:'0.5s'}} className='sign-up'>Sign Up</h2>
          </ButtonWr>
        </Menus>

      </Container>
    </div>
  )
}

export default Navbar