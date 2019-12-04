import styled from 'styled-components';
export const ButtonContainer = styled.button
`
    text-transform:capitalize;
    font-size:1.4rem;
    background:transparant;
    color:var(--mainWhite);
    &:hover {
        background: var(--lightBlue);
        color: var(--mainBlue);
    }

`;