import React, { useEffect, useState } from 'react'
import { Container, Rating, SwiperImg, SwiperWr, TextDiv, TitleDiv } from './style'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// image data
import {ImageData} from './data'


const Reviews = () => {

  
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [globalbolen, setglobalbolen] = useState(true);
  
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      if(windowDimensions.width>768){
        setglobalbolen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    console.log(windowDimensions)
  }, [setWindowDimensions])

  return (
    <Container>
      {/* <TitleDiv>
        <h1>what our happy clients say about us</h1>
        <p>
          Hackathon early adopters innovator iPad 
          facebook infographic pitch growth hacking. 
          Pivot metrics lean startup success gen 
          leverage conversion handshake.
        </p>
      </TitleDiv> */}
      <SwiperWr>
        <Swiper
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        >
          {ImageData?.map((item,index)=>{
            return(
              <SwiperSlide key={index}>
                <SwiperImg src={item.img} />
                <TextDiv>
                  <h1>{item.name}</h1>
                  <h2>Member</h2>
                  <Rating value={item.rate} readOnly/>
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
    </Container>
  )
}

export default Reviews
