import React, { useState } from 'react'
import { BackImg, Button, Container, Input, InputWr, Paragraph, Title } from './style'

import BImg from '../../assets/Star.svg'

const Submit = () => {
    const [value, setValue] = useState('');

  return (
    <Container>
        <Title>subcribe our daily tips</Title>
        <Paragraph>
            Hackathon early adopters innovator 
            iPad facebook infographic pitch growth 
            hacking. Pivot metrics lean startup.
        </Paragraph>
        <InputWr>
            <Input onChange={(e)=>setValue(e.target.value)} value={value} placeholder='Enter email adress'/>
            <Button onClick={()=>setValue('')}>Subscribe</Button>
        </InputWr>

        <BackImg draggable='false' src={BImg}/>
    </Container>
  )
}

export default Submit