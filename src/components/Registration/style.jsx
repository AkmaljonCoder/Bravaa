import styled from "styled-components";
import { Close } from '@mui/icons-material';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: #1b263b;
    transition: all ease 0.3s;
    z-index: 2;
`

export const Form = styled.div`
    width: 400px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 5px;
    background-color: #415a77;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`

export const Mode = styled.div`
    width: auto;
    height: 60px;
    background-color: #778da9;
    border-radius: 5px;
    position: absolute;
    top: -30px;
    display: flex;
    align-items: center;

    button{
        width: 150px;
        height: calc(100% - 10px);
        background-color: transparent;
        cursor: pointer;
        text-transform: capitalize;
        font-size: 25px;
        font-weight: bold;
        border: none;
        color: white;
        z-index: 2;
        margin: 0 10px;
    }

    .switcher{
        width: 150px;
        margin-left: 180px;
        height: calc(100% - 10px);
        position: absolute;
        border-radius: 5px;
        transition: all ease 0.5s;
        background-color: green;
    }

    .up{
        margin-left: 10px;
        background-color: green;
    }

    .in{
        margin-left: 180px;
        background-color: orange;
    }
`

export const CloseIc = styled(Close)`
    width: 60px;
    height: 60px;
    position: absolute;
    top: 30px;
    right: 30px;
    color: white;
    cursor: pointer;
`