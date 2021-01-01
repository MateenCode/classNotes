import styled from 'styled-components';


export const LayoutWrapper = styled.div`
    padding: 4rem 4rem;
    background-color: whitesmoke;
    min-height: 100vh;
   > div {
       max-width: 1200px;
       margin: 0 auto;
   }
`;


export const HeaderImage = styled.div`
    margin: ${props => props.theme.margin};
    img {
        width: 100%;
        @media screen and (min-width: 768px) {
            width: 100%;
        }
    }
`;