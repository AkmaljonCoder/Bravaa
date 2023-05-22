import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    max-width: 1440px;
    margin: 0 auto;
`

export const TitleDiv = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        width: 346px;
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 700;
        font-size: 32.6687px;
        line-height: 49px;
        text-align: center;
        text-transform: capitalize;
        color: #FFFFFF;
    }

    @media (max-width:425px) {
        height: 120px;

        h1{
            width: 250px;
            font-size: 25px;
        }
    }
`

export const CardsWr = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 100px;
`

export const Card = styled.div`
    width: 197.37px;
    height: 253.18px;
    background: #030712;
    border-radius: 2.04179px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin: 12.50px;
    transition: all ease 0.3s;
    position: relative;

    img{
        width: 45px;
        height: 58px;
        object-fit: contain;
        margin-bottom: 19px;
        margin-left: 27px;
    }

    h2{
        font-weight: 500;
        font-size: 16.3343px;
        line-height: 25px;
        text-align: center;
        text-transform: capitalize;
        color: #F2F2F2;
        margin-bottom: 9px;
        margin-left: 27px;
    }

    p{
        font-weight: 400;
        font-size: 10.8896px;
        line-height: 18px;
        text-transform: capitalize;
        color: #D4D4D4;
        margin-bottom: 39px;
        margin-left: 27px;
    }

    h3{
        font-weight: 500;
        font-size: 13.6119px;
        line-height: 20px;
        text-align: center;
        text-transform: capitalize;
        color: #5ABA4A;
        cursor: pointer;
        margin-left: 27px;

        :hover{
            text-decoration-line: underline;
        }
    }

    .ani-div{
        width: 100%;
        height: 0;
        position: absolute;
        background-color: #FF6726;
        bottom: 0;
        transition: all ease 0.3s;
        z-index: -1;
    }

    &:hover{
        transform: translateY(-10px);
    }

    &:hover .ani-div{
        height: 100%;
    }

    &:hover h3{
        color: #D4D4D4;
    }

    @media (max-width:444px) {
        width: 80%;
    }
`
