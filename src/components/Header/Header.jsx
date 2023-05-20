import React from 'react'
import { Button, ButtonWr, Container, Paragraph, Title, VidButton, Wrapper } from './style'
import VidButtonImg from '../../assets/VidButton.png'

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Help For Ideal Body Fitness</Title>
        <Paragraph>
        Craftmanship inexpensive runway 
        stylish waistline trendwatching 
        sleeveless urban skirt comfortable 
        posture glitter hair. Signature condition 
        high heels artistic urban.
        </Paragraph>
        <ButtonWr>
          <Button>Get Started</Button>
          <VidButton>
            <img src={VidButtonImg} alt="" />
            <h3>Watch Video</h3>
          </VidButton>
        </ButtonWr>
      </Wrapper>
    </Container>
  )
}

export default Header