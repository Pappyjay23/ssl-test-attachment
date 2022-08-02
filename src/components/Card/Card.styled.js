import styled from "styled-components";


export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        text-align: center;
        margin: 3rem 0;
    }
`;
export const ImageTagContainer = styled.div`
    position: relative;
    width: fit-content;
    margin-right: 2rem;
    @media screen and (max-width: 600px) {
        margin: 0;
    }
`;
export const CardImage = styled.img`
    height: 150px;
    width: auto;
    border-radius: 15px;
    cursor: pointer;
`;
export const CardTag = styled.div`
    background-color: #2b3d2c;
    color: #bff9c3;
    width: fit-content;
    padding: .2rem 1.5rem;
    border-radius: 30px;
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 80%;
`;
export const CardContent = styled.div``;
export const ContentTitle = styled.p``;
export const ContentDesc = styled.p`
    font-size: 70%;
    margin-bottom: 1rem;
`;
export const ContentPriceDesc = styled.p`
    font-size: 70%;
`;
export const ContentPrice = styled.p`
    font-size: 70%;
`;
export const ContentSubPrice = styled.span`
    font-size: 1.1rem;
    font-weight: 700;
    margin-right: .5rem;
`;
