import styled from 'styled-components';
import Background from '../../assets/background.png'
import { Close } from '@mui/icons-material';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    justify-content: center;

    .video-wrapper{
        display: flex;
    }

    @media (max-width:600px) {
        background-position: left;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`

export const Title = styled.h1`
    width: 350px;
    font-family: 'Playfair Display', sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 51.7254px;
    line-height: 65px;
    text-transform: capitalize;
    color: #FFFFFF;
    margin-left: 30px;
    margin-bottom: 15px;

    @media (max-width:600px) {
        font-size: 40px;
        width: 300px;
    }

    @media (max-width:375px) {
        width: 200px;
        font-size: 28px;
        line-height: 45px;
    }
`

export const Paragraph = styled.p`
    width: 358px;
    font-weight: 400;
    font-size: 10.8896px;
    line-height: 18px;
    color: #D5D5D5;
    margin-left: 30px;
    margin-bottom: 27px;

    @media (max-width:600px) {
        width: 300px;   
    }

    @media (max-width:375px) {
        width: 250px;
        font-size: 10px;
    } 
`

export const ButtonWr = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
`

export const Button = styled.button`
    width: 122.51px;
    height: 38.11px;
    background: #5ABA4A;
    border: 1px solid #5ABA4A;
    border-radius: 2.04179px;
    font-weight: 600;
    font-size: 12.2507px;
    line-height: 20px;
    text-transform: capitalize;
    color: #FFFFFF;
    cursor: pointer;
    margin-right: 24px;
    transition: all ease 0.3s;
    &:hover{
        background-color: rgb(0,0,0,0);
        color: #5ABA4A;
    }

    @media (max-width:375px) {
        width: 100px;
        height: 38px;
    }
`

export const VidButton = styled.div`
    height: 38.11px;
    cursor: pointer;
    line-height: 20px;
    text-transform: capitalize;
    display: flex;
    align-items: center;

    img{
        width: 32px;
        height: 32px;
        object-fit: contain;
        margin-right: 13px;
        transition: all ease 0.3s;
    }

    h3{
        font-weight: 400;
        font-size: 12.2507px;
        line-height: 20px;
        text-transform: capitalize;
        color: #FFFFFF;
        transition: all ease 0.3s;
    }

    &:hover h3{
        color: #5ABA4A;
    }

    @media (max-width:375px) {
        width: 100px;
        height: 38px;
    }
    
`

export const VideoWr = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    backdrop-filter: blur(20px);
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .video{
        width: 60% !important;
        height: 400px !important;
    }

    @media (max-width:768px) {
        .video{
            width: 500px !important;
            height: 300px !important;
        }
    }

    @media (max-width:590px) {
        .video{
            width: 80% !important;
            height: 300px !important;
        }
    }
`

export const VideoTitle = styled.h1`
    font-size: 50px;
    font-family: 'Playfair Display';
    color: white;
    margin-bottom: 30px;
    text-align: center;

    @media (max-width:768px) {
        max-width: calc(100% - 30px);
        font-size: 35px;
    }
`

export const CloseBtn = styled(Close)`
    width: 35px !important;
    height: 35px !important;
    color: white !important;
    cursor: pointer !important;
    position: absolute !important;
    top: 20px !important;
    right: 20px !important;
`


