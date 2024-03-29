import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    background: #0D0D0D;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    display: grid;
    align-items:center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${( {isOpen}) => isOpen ? '100%' : '0'};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #FFF;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor:pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #FFF;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);

    @media screen and (max-width: 400px){
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #FFF;
    cursor:pointer;
    &:hover{
        color: #01BF71;
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01BF71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #FFF;
        color: #010606;
    }
`;


