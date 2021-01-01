import styled from 'styled-components';

// H Levels
export const HeaderOne = styled.h1`
    font-size: 1.5rem;
    text-align: left;
    @media screen and (min-width: 768px) {
        font-size: 1rem;
        text-align: right;
    }
`;

export const HeaderTwo = styled.h2`
    font-size: 3rem;
    @media screen and (min-width: 768px) {
        font-size: 6rem;
    }
`;

export const BannerImage = styled.div`
    margin: 2rem 0;
    img {
        width: 100%;
    }
`;
