import styled from 'styled-components/native';

export const Table = styled.ScrollView.attrs(() => ({
    vertical: true,
    showsVerticalScrollIndicator: false,
}))
``;

export const Tr = styled.View`
    width:530px;
    height:9rem;
    flex-direction:column;
    margin-bottom:2rem;
`;

export const InfoSuperior = styled.View`
        padding:0 0 0 0;
        margin:0 1.5rem 0 0;
        align-items:top;
        flex-direction:row;
`;

export const FotoView = styled.View`
        width:40px;
        height:40px;
        margin:0 10px 0 0;
`;

export const Foto = styled.Image`
        width:40px;
        height:40px;
        border-radius:40px;
`;

export const Image = styled.Image`
        width:25px;
        height:25px;
        border-radius:25px;
        margin-left:1rem;
`;

export const InfoInferior = styled.View`
        flex-direction:row;
        margin:0 0 0 2.4rem;
        width:30vw;
`;

export const Img = styled.Image`
        height:${props=>props.height}px;
        width:${props=>props.width}px;
        background-color:${props=>props.cor};
`;

export const UserInfo = styled.View`
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

export const Time = styled.Text`
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: bold;
        font-size: 0.7rem;
        line-height: 13px;
        color: rgba(0, 0, 0, 0.51);
        margin: 5px 0.2rem;
`;

export const Message = styled.Text`
        height:3.5rem;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        text-align: justify;
        color: #000000;
        justify-content:center;
        margin:0.5rem 2.4rem;
`;

export const Deleta = styled.TouchableOpacity`
        width:20px;
        height:20px;
        border-radius:20px;
        background:rgba(0,0,0,0.5);
        font-size:10px;
        color:white;
        font-weigth:bold;
`;

export const ViewReaction = styled.View`
        flex-direction:row;
        width:20rem;
`;

export const Options = styled.View`
        flex-direction:column;
`;

export const Li = styled.TouchableOpacity`
        height:21px;
        width:25%;
        flex-direction:row;
`;

export const Text = styled.Text``;