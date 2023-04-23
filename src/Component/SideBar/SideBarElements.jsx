import styled from "styled-components";
import  {FaTimes} from 'react-icons/fa'
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";


export const SideBarContainer = styled.aside`
    position: fixed;
    z-index:999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease;
    opacity: ${({isOpen})=>(isOpen ? '100%' :'0')};
    top: ${({isOpen}) => (isOpen ? '0' :'-100%')};
`
export const CloseIcon =styled(FaTimes)`
    color:  #fff;
`
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    cursor: pointer;
    font-size: 2rem;
    outline: none;
`
export const SideBArWapeer =styled.div`
    color: #fff;
`
export const SideBArMenu  =styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6 , 60px);
        
    }
`
export const SideBarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: all 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

   &:hover{
    color: #fab209;
    transition: 2.0 ease-in-out;
   }
`
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
`
export const SideBarRoute= styled(LinkR)`
    border-radius:50px;
    background: #fab209;
    white-space: nowrap;
    padding: 16px 64px;
    /* justify-content: center; */
    color: #010606;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    

    &:hover{
        transition: 0.2s all ease-in-out;
        background: #fff;
    }
`