import styled from "styled-components";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 210px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    @media (max-width:870px) {
        flex-direction: column;
        align-items: start;
        justify-content: center;
        height: auto;
    }
`

export const FirstDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: 30px;

    p{
        color: #E7E0E0;
        font-size: 10.89px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 400;
        line-height: 16.334px;
    }

    .social-media{
        display: flex;
    }

    @media (max-width:870px) {
        margin-bottom: 50px;
    }
`

export const Logo = styled.img`
    width: 60.573px;
    height: 24.501px;
    object-fit: contain;
    cursor: pointer;
    margin-bottom: 13px;
`

export const Paragraph = styled.p`
    max-width: 173.552px;
    color: #E7E0E0;
    font-size: 10.89px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 16.334px;
    margin-bottom: 20px;
`

export const FacebookIc = styled(Facebook)`
    width: 32px !important;
    height: 32px !important;
    cursor: pointer;
    transition: all ease 0.3s !important;
    margin-right: 10px !important;
    color: white !important;

    &:hover{
        color: #3b5998 !important;
    }
`

export const TwitterIc = styled(Twitter)`
    width: 32px !important;
    height: 32px !important;
    cursor: pointer;
    transition: all ease 0.3s !important;
    margin-right: 10px !important;
    color: white !important;

    &:hover{
        color: #00acee  !important;
    }
`

export const InstagramIc = styled(Instagram)`
    width: 32px !important;
    height: 32px !important;
    cursor: pointer;
    transition: all ease 0.3s !important;
    margin-right: 10px !important;
    color: white !important;

    &:hover{
        color: #d62976 !important;
    }
`

export const SecondDiv = styled.div`
    display: flex;
    margin-right: 30px;

    @media (max-width:870px) {
        flex-direction: column;
        margin: 0 0 0 30px;
    }
`

export const ListWr = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-right: 74px;

    @media (max-width:870px) {
        margin-bottom: 25px;
    }
`

export const ListTitle = styled.h2`
    color: #FFF;
    font-size: 16.334px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 16.334px;
    text-transform: capitalize;
    margin-bottom: 13px;
`

export const List = styled.a`
    color: #E7E0E0;
    font-size: 10.89px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 16.334px;
    text-transform: capitalize;
    list-style: none;
    margin-bottom: 7px;
    cursor: pointer;
    transition: all ease 0.3s;

    :hover{
        opacity: 0.5;
    }
`
