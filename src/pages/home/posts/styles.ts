import styled from "styled-components";

export const PostsContainer = styled.div`
width: 50%;
max-width: 1120px;
margin: 0 auto;
padding: 0 1.5rem;

`;

export const PostArea = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
border: 1px solid ${props => props.theme['base-input']};
border-radius: 8px;
padding: 15px;
display: flex;
flex-direction: column;
gap: 2rem;
`;

export const PostAreaLow = styled(PostArea)`
border: 1px solid ${props => props.theme['base-low']};
`;
export const PostAreaHigh = styled(PostArea)`
border: 1px solid ${props => props.theme['base-high']};
`;

export const PostTitle = styled.div`
margin-top: 1rem;
display: flex;
align-items: center;
justify-content: space-between;
gap: 5rem;
`;

export const PriorityArea = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
`;

export const IconArea = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 0.2rem;
`;

export const ButtonArea = styled.div`
display: flex;
justify-content: space-between;
`;

export const ButtonCheckBoxArea = styled.div`
display: flex;
align-items: center;
justify-items: center;
gap: 0.5rem;
`;

export const ButtonCheckBox = styled.button`
height: 2rem;
width: 2rem;
border-radius: 50%;
background-color: ${props => props.theme['base-input']};
`;

export const ButtonEditDeleteArea = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
`;

export const ButtonEdit = styled.button`
display: flex;
align-items: center;
justify-items: center;
padding: 5px;
gap: 0.2rem;
background-color: transparent;
color: ${props => props.theme['basse-inputEdit']};
border: 0.5px solid ${props => props.theme['base-input']};

&:hover{
    background-color: ${props => props.theme['base-input']};
}
`;
export const ButtonDelete = styled(ButtonEdit)`
color: ${props => props.theme['base-high']};
`;
