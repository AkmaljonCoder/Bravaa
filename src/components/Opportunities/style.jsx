import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin-bottom: 100px;

    @media (max-width:1010px) {
        flex-direction: column;
        align-items: center;
    }

    @media (max-width:520px) {
        align-items: start;
    }
`

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    margin-left: 30px;

    @media (max-width:1010px) {
        margin-left: 0;
        align-items: center;
        margin-bottom: 50px;
    }

    @media (max-width:520px) {
        align-items: start;
        margin-left: 30px;
    }
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

    @media (max-width:1010px) {
        text-align: center;
        width: 450px;
    }

    @media (max-width:520px) {
        width: auto;
        max-width: 300px;
        margin-right: 30px;
        text-align: start;
    }
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

    @media (max-width:1010px) {
        width: 300px;
        height: 40px;
        background-color: #03071289;
        border-radius: 10px;

        img{
            margin-left: 10px;
        }
    }

    @media (max-width:425px) {
        width: auto;
        background-color: rgb(0,0,0,0);
        img{
            margin-left: 0;
        }
    }
`

export const ImagesDiv = styled.div`
    width: 620px;
    height: 400px;
    background-color: #030712;
    margin-right: 30px;
    display: grid;
    grid-template-areas: 
        "first first third third"
        "second second third third"
    ;
    gap: 10px;
    padding: 20px;
    
    .first{
        width: 100%;
        height: 100%;
        grid-area: first;
    }

    .second{
        width: 100%;
        height: 100%;
        grid-area: second;
    }

    .third{
        width: 100%;
        height: 100%;
        grid-area: third;
    }

    @media (max-width:1010px) {
        width: 90%;
        margin-right: 0;
        grid-template-areas: 
        "first third second"
        ;
        
        .first{
            height: auto;
        }
        .second{
            height: auto;
        }
        .third{
            height: auto;
        }
    }

    @media (max-width:650px) {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .grid-image{
            width: auto;
        }
    }

    @media (max-width:445px) {
        .grid-image{
            width: 300px;
        }
    }
`
