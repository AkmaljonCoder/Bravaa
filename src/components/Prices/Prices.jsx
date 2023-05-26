import React from 'react'
import { Button, Card, CardsDiv, Container, LinkWr, TitleDiv } from './style'
import Tick from '../../assets/Prices/tick.svg';
import Cross from '../../assets/Prices/cross.svg';

const Prices = () => {
  return (
    <Container>
      <TitleDiv>
        <h1>our pricing plan</h1>
        <p>
          Partnership  testing buzz leverage 
          bandwidth seed round funding niche 
          market investor startup stock client 
          holy grail design prototype.
        </p>
      </TitleDiv>
      <CardsDiv>

        <Card>
          <h2>Basic Plan</h2>
          <h1>$110</h1>
          <LinkWr>
            <img src={Tick} alt="" />
            <h3>5 days in a weak</h3>
          </LinkWr>
          <LinkWr>
            <img src={Tick} alt="" />
            <h3>01 sweatshirt</h3>
          </LinkWr>
          <LinkWr>
            <img src={Tick} alt="" />
            <h3>01 bottle of protein</h3>
          </LinkWr>
          <LinkWr>
            <img src={Cross} alt="" />
            <h3>access to videos</h3>
          </LinkWr>
          <LinkWr className='end'>
            <img src={Cross} alt="" />
            <h3>access to videos</h3>
          </LinkWr>
          <Button>Join Now</Button>
        </Card>

        <Card>
          <h2>Weekly Plan</h2>
          <h1>$90</h1>
          <LinkWr>
            <img src={Tick} alt="" />
            <h3>5 days in a weak</h3>
          </LinkWr>
          <LinkWr>
            <img src={Tick} alt="" />
            <h3>01 sweatshirt</h3>
          </LinkWr>
          <LinkWr>
            <img src={Tick} alt="" />
            <h3>01 bottle of protein</h3>
          </LinkWr>
          <LinkWr>
            <img src={Tick} alt="" />
            <h3>access to videos</h3>
          </LinkWr>
          <LinkWr className='end'>
            <img src={Cross} alt="" />
            <h3>access to videos</h3>
          </LinkWr>
          <Button>Join Now</Button>
        </Card>

        <Card>
          <h2>Monthly Plan</h2>
          <h1>$380</h1>
          <LinkWr>
            <img src={Tick} alt="" />
            <h3>5 days in a weak</h3>
          </LinkWr>
          <LinkWr>
            <img src={Tick} alt="" />
            <h3>01 sweatshirt</h3>
          </LinkWr>
          <LinkWr>
            <img src={Tick} alt="" />
            <h3>01 bottle of protein</h3>
          </LinkWr>
          <LinkWr>
            <img src={Tick} alt="" />
            <h3>access to videos</h3>
          </LinkWr>
          <LinkWr className='end'>
            <img src={Tick} alt="" />
            <h3>access to videos</h3>
          </LinkWr>
          <Button>Join Now</Button>
        </Card>

      </CardsDiv>
    </Container>
  )
}

export default Prices