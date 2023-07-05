import styled from "styled-components";
import RatingItem from '@mui/material/Rating';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    margin-bottom: 70px;
`

export const TitleDiv = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: start;

    h1{
        max-width: 400px;
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 700;
        font-size: 32.6687px;
        line-height: 45px;
        text-transform: capitalize;
        color: #FFFFFF;
        margin-left: 30px;
    }

    p{
        max-width: 374px;   
        font-style: normal;
        font-weight: 400;
        font-size: 10.8896px;
        line-height: 18px;
        color: #E7E0E0;
        margin-right: 30px;
    }
`

export const SwiperWr = styled.div`
    width: 100%;
    height: 480.76px;
    background-color: #030712;

    .swiper {
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .swiper-pagination-bullet{
        background-color: #5ABA4A !important;
    }

    .swiper-button-prev, .swiper-button-next{
        color: #5ABA4A !important;
    }
`

export const SwiperImg = styled.img`
    width: auto;
    height: 100%;
    padding: 20px;
    margin-right: 50px;
    border-radius: 40px;

    @media (max-width:920px) {
        margin-right: 10px;
    }

    @media (max-width:790px) {
        display: none;
    }
`

export const RespImg = styled.img`
    width: 80px;
    height: 80px;
    display: none;
    position: absolute;
    top: 0px;
    right: 20px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid white;

    @media (max-width:920px) {
        display: block;
    }

    @media (max-width:375px) {
        right: 0;
    }
`

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-left: 50px;
    position: relative;

    h1{
        font-style: normal;
        font-weight: 400;
        font-size: 16.3343px;
        line-height: 19px;
        text-transform: capitalize;
        color: #FFFFFF;
        margin-bottom: 3px;
    }

    h2{
        font-style: normal;
        font-weight: 400;
        font-size: 10.8896px;
        line-height: 19px;
        text-transform: capitalize;
        color: #D4D4D4;
        margin-bottom: 13px;
    }

    p{
        max-width: 357.31px;
        font-style: normal;
        font-weight: 400;
        font-size: 10.8896px;
        line-height: 19px;
        color: #D4D4D4;
        margin-bottom: 13px;
    }

    @media (max-width:920px) {
        margin-left: 10px;
    }

    @media (max-width:790px) {
        p{
            font-size: 10px;
            max-width: 300px;
        }
    }

    @media (max-width:375px) {
        p{
            max-width: 230px;
        }
    }
`

export const Rating = styled(RatingItem)`
    margin-bottom: 12px !important;
    padding: 5px 10px;
    background-color: #3d3d3d;
    border-radius: 10px;
`

