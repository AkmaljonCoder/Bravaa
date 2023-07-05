import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 262px;
    max-width: 870px;
    margin: 0 auto;
    border-radius: 2.722px;
    background: #030712;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    @media (max-width:900px) {
        width: 90%;
    }
`

export const BackImg = styled.img`
    width: 102.09px;
    height: 95.284px;
    position: absolute;
    top: 49px;
    right: 98px;

    @media (max-width:840px) {
        display: none;
    }
`

export const Title = styled.h1`
    color: #FFF;
    font-size: 32.669px;
    font-family: Playfair Display;
    font-style: normal;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 13px;
    text-align: center;
    
    @media (max-width:480px) {
        font-size: 23px;
    }
`

export const Paragraph = styled.p`
    max-width: 374.328px;
    color: #D4D4D4;
    text-align: center;
    font-size: 10.89px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 17.696px;
    margin-bottom: 30px;

    @media (max-width:480px) {
        max-width: 90%;
        font-size: 10px;
    }
`

export const InputWr = styled.div`
    display: flex;
    align-items: center;

    @media (max-width:480px) {
        width: 90%;
    }
`

export const Input = styled.input`
    width: 266.113px;
    height: 36.752px;
    border-radius: 3px;
    border: 0.681px solid #9DAD9A;
    padding: 8px 16px;
    outline: none;
    margin-right: 7px;
    background-color: transparent;
    color: #878585;
    font-size: 10.89px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 20.418px;

    @media (max-width:480px) {
        width: calc(100% - 100px);
    }

    @media (max-width:375px) {
        width: calc(100% - 70px);
    }
`

export const Button = styled.button`
    width: 99.367px;
    height: 36.752px;
    border-radius: 3px;
    background-color: transparent;
    border: 0.681px solid #5ABA4A;
    cursor: pointer;
    color: #EDEEF1;
    text-align: center;
    font-size: 13.612px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 20.418px;
    text-transform: capitalize;
    transition: all ease 0.3s;

    :hover{
        background-color: #5ABA4A;
        color: #030712;
    }

    @media (max-width:375px) {
        width: 70px;
        font-size: 11px;
    }
`
