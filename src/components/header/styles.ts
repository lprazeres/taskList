import styled from 'styled-components';

export const HeaderContainer = styled.header`
background: ${props => props.theme['base-profile']};
padding: 2.5rem 0 3.5rem;
`;

export const HeaderArea = styled.div`
width: 100%;
max-width: 1120px;
margin: 0 auto;
padding: 0 1.5rem;


display: flex;
justify-content: center;
align-items: center;
gap: 1rem;

font-weight: bold;
font-size: 1.5rem;

`;