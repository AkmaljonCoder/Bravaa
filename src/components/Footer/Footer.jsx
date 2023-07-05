import React from 'react'
import { Container, FacebookIc, FirstDiv, InstagramIc, List, ListTitle, ListWr, Logo, Paragraph, SecondDiv, TwitterIc } from './style'

import Image from '../../assets/footer_logo.svg'

const Footer = () => {
  return (
    <Container>
        <FirstDiv>
            <Logo src={Image} />
            <Paragraph>
                User experience iPhone backing 
                focus responsive web design 
                leverage analytics.
            </Paragraph>
            <div className="social-media">
                <FacebookIc/>
                <TwitterIc/>
                <InstagramIc/>
            </div>
        </FirstDiv>

        <SecondDiv>
            <ListWr>
                <ListTitle>Services</ListTitle>
                <List>flex muscle</List>
                <List>physical fitness</List>
                <List>fat lose</List>
                <List>strength</List>
            </ListWr>
            <ListWr>
                <ListTitle>pricing</ListTitle>
                <List>basic plan</List>
                <List>weakly plan</List>
                <List>monthly plan</List>
            </ListWr>
            <ListWr>
                <ListTitle>company</ListTitle>
                <List>about us</List>
                <List>careers</List>
                <List>customers</List>
                <List>partners</List>
            </ListWr>
            <ListWr>
                <ListTitle>support</ListTitle>
                <List>faqs</List>
                <List>contact us</List>
            </ListWr>
        </SecondDiv>
    </Container>
  )
}

export default Footer