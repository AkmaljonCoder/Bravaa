import React, { useState } from 'react'
import { Button, ButtonWr, CloseBtn, Container, Paragraph, Title, VidButton, VideoTitle, VideoWr, Wrapper } from './style'
import VidButtonImg from '../../assets/VidButton.png'

const Header = () => {
  const [isClosed, setIsClosed] = useState(false);

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
          <VidButton onClick={()=>setIsClosed(true)}>
            <img src={VidButtonImg} alt="" />
            <h3>Watch Video</h3>
          </VidButton>
        </ButtonWr>
      </Wrapper>

      <VideoWr className={isClosed===true? 'video-wrapper' : ''}>
        <CloseBtn onClick={()=>setIsClosed(false)}/>
        <VideoTitle>Full body workout tutorial!</VideoTitle>
        <iframe className='video' width="960" height="515" src="https://www.youtube.com/embed/xCykac8elPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </VideoWr>
    </Container>
  )
}

export default Header