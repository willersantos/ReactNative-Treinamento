import styled from 'styled-components/native';

export const EspaçoCompartilhado = styled.ScrollView`
        width: 90%;
        height: ${props=>props.tamanho}rem;
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