import React from 'react'
import { Card, CardsWr, Container, TitleDiv } from './style'

// nececcary images

import Barbell from '../../assets/Fields/barbell.png';
import Running from '../../assets/Fields/running.png';
import Arm from '../../assets/Fields/arm.png';
import Lifting from '../../assets/Fields/lifting.png';

const Fields = () => {
  return (
    <>
        <Container>
            <TitleDiv>
              <h1>
              our program build
              your best body
              </h1>
            </TitleDiv>
            <CardsWr>
              <Card>
                <img src={Barbell} alt="" />
                <h2>strenght</h2>
                <p>Value proposition investor churn rate pitch.</p>
                <h3>join now</h3>
                <div className="ani-div"></div>
              </Card>
              <Card>
                <img src={Running} alt="" />
                <h2>physical fitness</h2>
                <p>Value proposition investor churn rate pitch.</p>
                <h3>join now</h3>
                <div className="ani-div"></div>
              </Card>
              <Card>
                <img src={Arm} alt="" />
                <h2>flex muscle</h2>
                <p>Value proposition investor churn rate pitch.</p>
                <h3>join now</h3>
                <div className="ani-div"></div>
              </Card>
              <Card>
                <img src={Lifting} alt="" />
                <h2>fat lose</h2>
                <p>Value proposition investor churn rate pitch.</p>
                <h3>join now</h3>
                <div className="ani-div"></div>
              </Card>
            </CardsWr>
        </Container>
    </>
  )
}

export default Fields