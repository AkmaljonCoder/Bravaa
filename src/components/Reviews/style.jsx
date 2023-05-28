import styled from "styled-components";
import RatingItem from '@mui/material/Rating';

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
    }

    .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .swiper-pagination-bullet{
        background-color: #5ABA4A !important;
    }
`

export const SwiperImg = styled.img`
    width: auto;
    height: 100%;
    margin-right: 50px;
`

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-left: 50px;

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
`

export const Rating = styled(RatingItem)`
    margin-bottom: 12px !important;
    padding: 5px 10px;
    background-color: #3d3d3d;
    border-radius: 10px;
`

export const ControlDiv = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Control = styled.div`
    width: 43px;
    height: 43px;
    background-color: #5ABA4A;
    border-radius: 50%;
`

