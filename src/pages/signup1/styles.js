import styled from 'styled-components/native';

export const Cadastro = styled.ScrollView.attrs(() => ({
    vertical: true,
    showsVerticalScrollIndicator: false,
}))
`
width:100vw;
height:100vh;
background-color: #EEE;
`;

export const Header = styled.SafeAreaView`
    padding: 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Continuar = styled.TouchableOpacity`
    width: 10rem;
    height: 2rem;

    margin:0 0.3rem;
    position:relative;
    top:2rem;

    font-family: Roboto;
    font-weight: bold;
    font-size: 20px;
    line-height: 21px;
    text-align:center;
        
    background: #FFEF00;
    color:white;
    border-radius: 60px;
    border: 3px solid rgba(0,0,0,0.5)
`;

export const Back = styled.TouchableOpacity`
    height:10px;
    width:70%;
    margin:0.4rem 0.8rem;
    justify-items:start;
`;

export const BackImage = styled.Image`
    width:22px;
    height:16px;
    position:relative;
    left:0;
`;

export const Logo = styled.View`
    height:70px;
`;

export const LogoImage = styled.Image`
    width:58px;
    height:69px;
    justify-content:center;
    margin-bottom:1rem;
`;

export const Title = styled.Text`
    margin:0 1.5rem;
    text-align:left;

    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 1.4rem;
`;

export const Form = styled.View`
    flex:1;
    flex-flow: column;
    align-items:center;
`;

export const Input = styled.TextInput` 
    background-color:#FFF8B7;
    border-bottom:3px solid rgba(30, 17, 107, 0.4);
    width: 70%;
    height: 2rem;
    margin-bottom:0.3rem;
    margin-left:0.8rem;
    justify-content:end;
`;

export const Label = styled.Text`
    color:rgba(0,0,0,0.8);
    font-family: Roboto;
    weight: 700;
    width: 375px;
    font-size: 1.2rem;
    font-weight: bold;
    text-align:start;
`;

export const Aviso = styled.Text`
    margin:0.3rem 2rem;
    width:67.5%;

    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 0.8rem;
    text-align:left;

    color: rgba(0, 0, 0, 0.7);
`;

export const Data = styled.View`
    flex-flow: column;
    align-items:center;
    margin:0.8rem 0;
`;