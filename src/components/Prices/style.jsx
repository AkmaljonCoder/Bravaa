import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    margin-bottom: 70px;
`

export const TitleDiv = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 40px;
    h1{
        font-family: 'Playfair Display';
        font-style: normal;
        font-weight: 700;
        font-size: 32.6687px;
        line-height: 42px;
        text-transform: capitalize;
        color: #FFFFFF;
    }
    p{
        max-width: 415.84px;
        font-style: normal;
        font-weight: 400;
        font-size: 10.8896px;
        line-height: 160%;
        color: #E7E0E0;
        text-align: center;
    }

    @media (max-width:425px) {
        h1{
            font-size: 27px;
        }
        p{
            max-width: 300px;
        }
    }
`

export const CardsDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const Card = styled.div`
    width: 272.24px;
    height: 390.66px;
    background: #030712;
    border-radius: 2.04179px;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    transition: all ease 0.3s;
    margin: 0 12px;

    :hover{
        transform: translateY(-10px);
    }

    h2{
        font-style: normal;
        font-weight: 400;
        font-size: 16.3343px;
        line-height: 18px;
        text-align: center;
        text-transform: capitalize;
        color: #FFFFFF;
        margin-left: 47px;
        margin-bottom: 36px;
    }

    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 28.5851px;
        line-height: 18px;
        text-align: center;
        text-transform: capitalize;
        color: #FFFFFF;
        margin-left: 47px;
        margin-bottom: 29px;
    }

    .end{
        margin-bottom: 54px;
    }

    @media (max-width:888px) {
        margin-bottom: 30px;

        :hover{
            transform: none;
        }
    }
`

export const LinkWr = styled.div`
    display: flex;
    align-items: center;
    margin-left: 47px;
    margin-bottom: 10px;

    img{
        width: 17px;
        height: 17px;
        object-fit: contain;
        margin-right: 5.5px;
    }

    h3{
        font-style: normal;
        font-weight: 400;
        font-size: 12.2507px;
        line-height: 18px;
        text-align: center;
        text-transform: capitalize;
        color: #FFFFFF; 
    }
`

export const Button = styled.button`
    width: 176.96px;
    height: 35.39px;
    border: 0.680597px solid #52A745;
    border-radius: 2.04179px;
    font-style: normal;
    font-weight: 700;
    margin-left: 47px;
    font-size: 12.2507px;
    line-height: 18px;
    text-align: center;
    text-transform: capitalize;
    color: #5ABA4A;
    background-color: rgb(0,0,0,0);
    cursor: pointer;
    transition: all ease 0.3s;

    &:hover{
        background-color: white;
        border: 0.680597px solid #ffffff;
    }
`


