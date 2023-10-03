import React from 'react'
import {CloseIc, Container, Form, Mode} from './style'
import { useState } from 'react';

const Registration = ({reg, setReg, sign, setSign}) => {

  return (
    <Container className={reg ? 'show-reg' : 'hide-reg'}>
      <Form>
        <Mode>
          <button onClick={()=>setSign('up')}>sign up</button>
          <button onClick={()=>setSign('in')}>sign in</button>
          <div className={`switcher ${sign==='up'? 'up' : 'in'}`}></div>
        </Mode>
      </Form>
      <CloseIc onClick={()=>setReg(false)} />
    </Container>
  )
}

export default Registration