import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .burgir{
        display: none;
        z-index: 2;
        margin-right: 30px;
        cursor: pointer;

        @media (max-width:650px) {
            display: block;
        }
    }

    .open-menu{
        opacity: 1;
        visibility: visible;

        @keyframes appear {
            0% { opacity: 0; translate: 0 50px; }
            100% { opacity: 1; }
        }
    
        h2{
            animation: appear 0.3s both;
        }
    }
`

export const Logo = styled.img`
    width: 59px;
    height: 20px;
    object-fit: contain;
    margin-left: 30px;
    cursor: pointer;
    transition: all ease 0.3s;
    &:hover{
        opacity: 0.5;
    }
`

export const LinkWr = styled.div`
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3{
        margin-left: 27px;
        font-style: normal;
        font-weight: 400;
        font-size: 10.8896px;
        line-height: 20px;
        color: #D4D4D4;
        cursor: default;
    }

    @media (max-width:650px) {
        display: none;
    }
`

export const Link = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 10.8896px;
    line-height: 20px;
    text-transform: capitalize;
    color: #D4D4D4;
    cursor: pointer;
    margin-left: 22px;
    transition: all ease 0.3s;
    &:hover{
        opacity: 0.5;
    }
`

export const Button = styled.button`
    width: 74.87px;
    height: 28.59px;
    border: 0.680597px solid #5ABA4A;
    background-color: rgb(0,0,0,0);
    border-radius: 3.40299px;
    font-style: normal;
    font-weight: 500;
    font-size: 12.2507px;
    line-height: 18px;
    text-align: center;
    text-transform: capitalize;
    margin-left: 17px;
    color: #5ABA4A;
    cursor: pointer;
    transition: all ease 0.3s;
    &:hover{
        background-color: #5ABA4A;
        color: white;
    }
`

export const Menus = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    gap: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(20px);
    opacity: 0;
    visibility: hidden;
    transition: 0.5s;

    h2{
        color: #f9f9f9;
        font-size: 32px;
        cursor: pointer;
        font-weight: 500;
        text-transform: capitalize;
    }

    @media (max-width:425px){
        align-items: start;
        h2{
            margin-left: 40px;
        }
    }

    @media (max-width:375px) {
        h2{
            margin-left: 20px;
        }
    }

`

export const ButtonWr = styled.div`
    display: flex;
    align-items: center;

    .sign-in{
        font-size: 32px;
        cursor: pointer;
        font-weight: 500;
        color: #F97239;
    }

    .sign-up{
        font-size: 32px;
        cursor: pointer;
        font-weight: 500;
        color: #5ABA4A;
    }

    .middle{
        color: white;
        margin: 0 20px;
        font-weight: 200;
        font-size: 32px;
        cursor: pointer;
    }

    @media (max-width:425px) {
        margin-left: 40px;

        .middle{
            margin: 0 20px;
        }
        .sign-in{
            margin: 0;
        }
        .sign-up{
            margin: 0;
        }
    }

    @media (max-width:375px) {
        margin-left: 20px;
    }
`
