import styled from 'styled-components/native';

export const Cadastro = styled.ScrollView.attrs(() => ({
    vertical: true,
    showsVerticalScrollIndicator: false,
    justifyContent:'center',
}))
`
    width:100vw;
    height:100vh;
    background-color: #EEE;
`;

export const Header = styled.SafeAreaView`
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Back = styled.TouchableOpacity`
    height:10px;
    width:90%;
    margin:0.4rem 0;
    justify-items:start;
`;

export const BackImage = styled.Image`
    width:22px;
    height:16px;
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

export const Form = styled.View`
    flex-direction: column;
`;

export const Input = styled.TextInput` 
    background-color:#FFF8B7;
    border-radius:10px;
    border-bottom:3px solid rgba(30, 17, 107, 0.4);
    width: 100%;
    height: 10rem;
    margin-bottom:0.3rem;
    justify-content:end;
    border-color:${props=>props.corMuda};
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

export const Infos = styled.View`
    flex-direction:row;
    width:70%;
    flex:1;
    justify-items:start;
    text-align:left;
`;

export const Continuar = styled.TouchableOpacity`
    width: 30%;
    height: 2rem;

    margin:0.5rem 0.3rem;

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

export const Tamanho = styled.Text` 
    width:70%;
    color:${props=>props.cor};
    font-family: Roboto slab;
    weight: 700;
    font-size: 1.2rem;
    text-align:left;
    flex:1;
    justify-content:start;
`;