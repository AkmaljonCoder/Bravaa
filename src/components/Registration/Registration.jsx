import React from 'react'
import {Container, Form, Mode} from './style'
import { useState } from 'react';

const Registration = () => {
  const [sign, setSign] = useState('up');

  return (
    <Container>
      <Form>
        <Mode>
          <button onClick={()=>setSign('up')}>sign up</button>
          <button onClick={()=>setSign('in')}>sign in</button>
          <div className={`switcher ${sign==='up'? 'up' : 'in'}`}></div>
        </Mode>
      </Form>
    </Container>
  )
}

export default Registration