import styled from 'styled-components';


export const HeaderOne = styled.h1`
    font-size: 1.5rem;
    font-weight: bolder;
    text-align: ${props => props.align ? props.align : 'initial'};
    @media screen and (min-width: 768px) {
        font-size: 1.65rem;
    }
`;

export const HeaderTwo = styled.h1`
    font-size:  ${props => props.larger ? '4rem' : '1.3rem'};
    text-align: ${props => props.align ? props.align : 'initial'};
    @media screen and (min-width: 768px) {
        font-size:  ${props => props.larger ? '8rem' : '1.3rem'};
    }
`;

export const BodyCopy = styled.div`
    font-size:  1.5rem;
    @media screen and (min-width: 768px) {
        font-size:  1.8rem;
    }
`;
