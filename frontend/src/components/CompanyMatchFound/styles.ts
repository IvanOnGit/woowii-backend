import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #70C800;
    height: 100vh;
    font-family: 'Roboto', sans-serif;

    h1 {
        position: absolute;
        margin-top: 30rem;
        color: white;
        font-weight: 300;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    input {
        position: absolute;
        margin-top: 38rem;
        padding: 1rem;
        border-radius: 1rem;
        border: none;
        font-weight: 300;
        z-index: 3;
        text-align: center;
    }
`

export const BackgroundZigZag = styled.img`
    width: 100%;
    z-index: 1;
`;

export const ItsAMatch = styled.img`
    z-index: 2;
    width: 14rem;
    margin-top: 7rem;
    position: absolute;
`;

export const MatchHandShake = styled.img`
    z-index: 2;
    width: 20rem;
    margin-top: 14rem;
    position: absolute;
`;

export const WhatWooWiiConnects = styled.img`
  z-index: 2;
    width: 20rem;
    margin-top: 33rem;
    position: absolute;
`;

export const BlueLogoWoowii = styled.img`
    z-index: 2;
    width: 10rem;
    margin-top: 42rem;
    position: absolute;
`;