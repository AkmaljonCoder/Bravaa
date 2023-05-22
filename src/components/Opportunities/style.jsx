import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin: 100px 0;
`

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin-left: 30px;
`

export const Title = styled.h1`
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 700;
    font-size: 32.6687px;
    line-height: 42px;
    text-transform: capitalize;
    color: #FFFFFF;
    margin-bottom: 13px;
`

export const Paragraph = styled.p`
    width: 308px;
    font-style: normal;
    font-weight: 400;
    font-size: 10.8896px;
    line-height: 160%;
    text-transform: capitalize;
    color: #E7E0E0;
    margin-bottom: 34px;
`

export const LinkWr = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    img{
        width: 18px;
        height: 18px;
        object-fit: contain;
        margin-right: 6px;
    }

    h3{
        font-style: normal;
        font-weight: 400;
        font-size: 13.6119px;
        line-height: 16px;
        text-transform: capitalize;
        color: #FFFFFF;
    }
`


