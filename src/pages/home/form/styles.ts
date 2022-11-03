import styled from 'styled-components';


export const FormContainer = styled.form`
width: 50%;
max-width: 1120px;
margin: 0 auto;
padding: 0 1.5rem;
margin-top: -3rem;
display: flex;
flex-direction: column;
gap: 1.5rem;

font-weight: bold;

h1{
    font-size: 1.5rem;
}

label{
    font-size: 1.0rem;
}

input, select, button, textarea{
    background-color: ${props => props.theme['base-profile']};
    border: 0;
    height: 50px;
    color: ${props => props.theme['base-input']};
    font-size: 1.2rem;
    padding: 0.5rem;
    border-radius: 8px;
    flex: 1;
    
    &::placeholder{
        color: ${props => props.theme['white']}; 
    }
}
select{
    width: 30%;
    height: 45px;
    font-size: 1.2rem;
    color: ${props => props.theme['white']};
    &:focus{
        color: ${props => props.theme['base-input']};
    }
}
button{
    width: 50%;
    &:hover{
        background-color: ${props => props.theme['base-input']};
        color: ${props => props.theme['base-background']};
        font-weight: bold;
    }
}
`;

export const FormContent = styled.div`
display: flex;
flex-direction: column;
gap: 0.3rem;
`;

