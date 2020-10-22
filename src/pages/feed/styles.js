import styled from 'styled-components/native';

export const Body = styled.View`
    flex:1;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`;

export const Aside = styled.View`
        height:100vh;
        width:14%;
        justify-content:center;
        align-itemx:center;
        margin-left:0.3%;
`;

export const LogoPiuPiuwer = styled.Image`
        width:50px;
        height:64px;
        margin:1rem 0 0 0.8rem;
`;

export const Menu = styled.SafeAreaView`
        justify-content:center;
        margin-top:-0.5rem;
        padding:1rem 0.3rem;
`;

export const BotãoMenuIcon = styled.TouchableOpacity`
        width: 35px;
        height: 35px;
        border-radius:35px;
        border:2px solid rgba(0,0,0,0.5);
        margin:3px;
        justify-content:center;
        align-items:center;
        margin-left:1rem;
`;

export const BotãoPiu = styled.TouchableOpacity`
        width: 50px;
        height: 50px;
        background: #FFEA2D;
        border-radius: 50px;

        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 1rem;
        color: #FFFFFF;

        text-align:center;
        justify-content:center;
        align-items:center;
        margin:1rem 0 0 0;
`;

export const IconMenu = styled.Image`
        width:${props => props.width}px;
        height:${props => props.height}px;
`;

export const UserIdentification = styled.View`
        height:50px;
        margin-left:0.4rem;
        flex:1;
        flex-direction:${props => props.organize};
`;

export const UserIdentificationImage = styled.Image`
        height:30px;
        width:30px;
        justify-content:center;
        border-radius:45px;
        margin:0 -5px 0 0;
`;

export const UserInfo = styled.View`
        padding:0 0 0 0;
        margin:-7px 0 0 0.5rem;
        flex:1;
        flex-direction:column;
`;

export const UserName = styled.TouchableOpacity`
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 0.8rem;
        line-height: 11px;
        color: #000000;
        margin-top:5px;
`;

export const UserEmail = styled.TouchableOpacity`
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 0.7rem;
        line-height: 13px;
        color: rgba(0, 0, 0, 0.51);
        margin-top:5px;
`;

export const Section = styled.ScrollView.attrs(() => ({
        vertical: true,
        showsVerticalScrollIndicator: false,
}))
`
        margin-top:1rem;
        height:100vh;
        width:30vw;
`;

export const Superior = styled.View`
        border: 2px solid rgba(0, 0, 0, 0.3);
        height:18rem;
        width:100%;
        display:flex;
        flex-flow:column;
`;

export const Profile = styled.View`
        width:100%;
        height:50px;
        margin-left:0.2rem;
        flex:1;
        flex-direction:row;
        align-items:center;
`;

export const Back = styled.Image`
        width:22px;
        height:16px;
`;

export const Perfil = styled.Image`
        position:relative;
        left:0.5rem;
        top:-2rem;
        width:80px;
        height:80px;
        border: 7px solid white;
        border-radius:120px;
`;

export const Capa = styled.Image`
        justify-content:start;
        align-items:center;
        width:100%;
        height:100px;
`;

export const General = styled.View`
        display:flex;
        flex-flow:column;
        height:13.5rem;
`;

export const SetUpProfile = styled.TouchableOpacity`
        width: 6rem;
        height: 25px;
        
        border: 1px solid #FAE02B;
        background-color:white;
        box-sizing: border-box;
        border-radius: 20px;
        padding:5px;
        
        text-align:center;
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        color: #FAE02B;

        align-items:end;
`;

export const ViewUser = styled.View`
        height:50px;
        margin:-0.8rem 0.8rem;
        flex:1;
        flex-direction:row;
`;

export const PiuImage = styled.Image`
        width:27px;
        height:27px;
`;

export const Options = styled.View`
        height:25px;
        width:100%;
        margin:0 0 0 0;
        padding:0 0 0 0;
        align-items:center;
        flex:1;
        flex-direction:row;
        justify-content:justify;
`;

export const Option = styled.TouchableOpacity`
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        color: #FAE02B;
        text-align:center;
        width:25%;
`;

export const Inferior = styled.View`
    border: 2px solid rgba(0, 0, 0, 0.3);
    height:${props => props.tamanho}rem;
    width:100%;
    justify-component:center;
    padding-top:1rem;
`;

export const Rigth = styled.View`
        flex:1;
        flex-direction:column;
        align-items:top;
`;

export const BarraPesquisa = styled.View`
        width: 90%;
        height: 30px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 30px;

        font-family: Roboto Slab;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        
        margin-top:10px;
        color: rgba(0, 0, 0, 0.5);
        margin-left:0.2rem;
        text-align:left;
`;

export const Search = styled.TextInput`
        width: 90%;
        height: 30px;
        border:0px;
        margin-right:5px;
        background: rgba(0, 0, 0, 0);
        border-radius: 30px;
        
        align-items:center;
        justify-content:end;
`;

export const EspaçoCompartilhado = styled.View`
        width: 90%;
        height: 70vh;
        background-color: rgba(250, 224, 43, 0.1);
        border-radius: 12px;
        margin:1rem 0.5rem;
        flex-direction:column;
`;

export const ShowMore = styled.TouchableOpacity`
        height:15px;
        font-family: Roboto Slab;
        font-size: 15px;
        line-height: 11px;
        color: #FAE02B;
        padding-left:20px;
`;

export const Title = styled.Text`
        position:absolute;
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        padding-top:10px;
        color: #000000;
        margin:0 0 0 0;
        padding:0 0 0 0;
`;

export const Seguidores = styled.SafeAreaView`
        width:100%;
        flex-direction:column;
`;

export const Seguidor = styled.View`
        height:${props => props.height}px;
        padding:20px 0 0 10px;
`;

export const SeguidorName = styled.Text`
        font-family: Montserrat Alternates;
        font-style: normal;
        font-size: 16px;
        color: #000000;
        padding:0.3rem 0;
`;

export const SeguidorEmail = styled.Text`
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
        padding:0.3rem 0;
`;

export const SeguidorFoto = styled.Image`
        width:25px;
        height:25px;
        border-radius:25px;
        padding:0.3rem 0;
`;

export const SeguidorBotão = styled.TouchableOpacity`
        width: 80%;
        height: 25px;
        
        border: 1px solid #FAE02B;
        box-sizing: border-box;
        border-radius: 10px;
        padding:0.3rem 0;

        font-size:0.8rem;
        font-style:bold;
        text-align:center;
        justify-content:center;

        background-color:rgba(250,224,43,0);
`;
