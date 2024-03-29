import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    min-height: 692px;
    position:fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        rgba(1,147,86,1) 0%,
        rgba(10, 201, 122, 1) 100%
    );
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direcion: column;
    justify-content:center;

    @media screen and (max-width: 400px){
        height: 80%;
    }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    height: 35px;
    text-decoration: none;
    color: #FFF;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    transition: 0.2s all ease-in-out;
    padding: 10px;

    @media screen and (max-width: 480px){
        padding: 10px;
        width:auto;
    }

    
`;

export const Form = styled.form`
    background: #010101;
    max-width: 400px;
    height: auto;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0, 0.9);
    transition: 0.3s all ease-in-out;
 
    @media screen and (min-width: 768px){
        transition: 0.3s all ease-in-out;
        width: 400px;
    }

    @media screen and (max-width: 400px){
        transition: 0.3s all ease-in-out;
        padding: 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #FFF;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #FFF;
`;

export const FormInput = styled.input`
    padding: 16px;
    margin-bottom: 32px;
    border:none;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: #01BF71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #FFF;
    font-size: 20px;
    cursor: pointer;
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #FFF;
    font-size: 14px;
`;

