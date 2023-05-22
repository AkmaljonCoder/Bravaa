import React from 'react'
import { Container, LinkWr, Paragraph, TextDiv, Title } from './style'

import Tick from '../../assets/Opportunities/tick.svg'

import FirstPic from '../../assets/Opportunities/first.png';
import SecondPic from '../../assets/Opportunities/second.png';
import ThirdPic from '../../assets/Opportunities/third.png';

const Opportunities = () => {
  return (
    <Container>
        <TextDiv>
            <Title>why join us?</Title>
            <Paragraph>
                Value proposition investor churn 
                rate pitch partnership success 
                crowdsource. Entrepreneur first 
                mover advantage niche Low hanging 
                fruit iteration infographic. Churn 
                rate analytics.
            </Paragraph>
            <LinkWr>
                <img src={Tick} alt="" />
                <h3>we have prOfessional best trainer</h3>
            </LinkWr>
            <LinkWr>
                <img src={Tick} alt="" />
                <h3>free join community</h3>
            </LinkWr>
            <LinkWr>
                <img src={Tick} alt="" />
                <h3>one free program for new members</h3>
            </LinkWr>
            <LinkWr>
                <img src={Tick} alt="" />
                <h3>100+ awards</h3>
            </LinkWr>
        </TextDiv>
    </Container>
  )
}

export default Opportunities