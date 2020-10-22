import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #EEE;
  flex: 1;
  justify-content:center;
  align-items:center;
`;

export const Header = styled.View`
  padding: 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.View`
    align-items:top;
    justify-content:center;
    height:70px;
`;

export const LogoImage = styled.Image`
    width:58px;
    height:69px;
    justify-content:center;
    margin-bottom:1rem;
`;

export const CampoLogin = styled.View` 
    display: flex;
    flex-flow: column;
    justify-content:center;
    align-items:center;
`;

export const Title = styled.Text`
    height: 47px;

    font:700 1.8rem Lobster;
    color: #000000;
`;

export const Forms = styled.View` 
    display: flex;
    flex-flow: column;
    justify-content:center;
    align-items:center;
`;

export const Input = styled.TextInput` 
    background-color:#FFF8B7;
    border-bottom:3px solid rgba(30, 17, 107, 0.4);
    width: 100%;
    height: 2.4rem;
    margin-bottom:1.4rem;
`;

export const Label = styled.Text` 
    margin-bottom:0.2rem;
    color:rgba(0,0,0,0.85);
    font-family: Roboto slab;
    weight: 700;
    font-size: 1.2rem;
`;

export const Entrar = styled.TouchableOpacity`
    width: 8rem;
    height: 3.6rem;


    text-align:center;
    justify-content:center;

    background: #FFEF62;
    border-radius: 60px;
    border: 3px solid rgba(0,0,0,0.5)
`;

export const EntrarText = styled.Text`
    font-family: Roboto;
    font-weight: bold;
    font-size: 1.2rem;
`;

export const Cadastrar = styled.TouchableOpacity`
    background-color:#EEE;
    border:0px;
    height:0 auto;
    width:70%;

    padding:0.3rem;
    text-align:center;
`;

export const CadastrarText = styled.Text`
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 1.1rem;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.4);

    color: #FFEE00;
`;
