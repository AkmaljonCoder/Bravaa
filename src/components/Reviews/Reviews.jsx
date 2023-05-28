import React from 'react'
import { Container, ControlDiv, Rating, SwiperImg, SwiperWr, TextDiv, TitleDiv } from './style'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import {ImageData} from './data'

const Reviews = () => {

  console.log(ImageData);

  return (
    <Container>
      <TitleDiv>
        <h1>what our happy clients say about us</h1>
        <p>
          Hackathon early adopters innovator iPad 
          facebook infographic pitch growth hacking. 
          Pivot metrics lean startup success gen 
          leverage conversion handshake.
        </p>
      </TitleDiv>
      <SwiperWr>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {ImageData?.map((item,index)=>{
            return(
              <SwiperSlide key={index}>
                <SwiperImg src={item.img} alt="" />
                <TextDiv>
                  <h1>{item.name}</h1>
                  <h2>member</h2>
                  <Rating name="read-only" value={item.rate} readOnly />
                  <p>
                    Assets learning curve vesting period 
                    direct mailing scrum project ramen user 
                    experience first mover advantage infographic 
                    early adopters. Sales marketing freemium 
                    termsheet MVP interaction design focus early 
                    adopters hypotheses creative facebook 
                    nondisclosure agreement android prototype.
                  </p>
                  <p>
                    Assets learning curve vesting period direct 
                    mailing scrum project ramen user experience 
                    first mover advantage infographic early adopters. 
                    Sales marketing freemium.
                  </p>
                </TextDiv>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </SwiperWr>
      <ControlDiv>
        
      </ControlDiv>
    </Container>
  )
}

export default Reviews
