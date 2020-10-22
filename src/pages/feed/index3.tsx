/*import React, { useState, useEffect, useCallback, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { Body, Aside, Section, Inferior, Rigth, EspaçoCompartilhado, EspaçoPiu } from './styles';
import Table from '../.././Components/Table_';

import api from '../.././Services/api';
import useAuth from '../.././Routes/auth';

import Home from '../.././Images/Home.png';
import Explore from '../.././Images/Explore.png';
import Notification from '../.././Images/Notification.png';
import Messages from '../.././Images/Messages.png';
import Bookmarks from '../.././Images/Bookmarks.png';
import Lists from '../.././Images/Lists.png';
import Profile from '../.././Images/Profile.png';
import More from '../.././Images/More.png';
import Logo from '../.././Images/Logo.png'

import foto_capa from '../.././Images/PJ_capa.jpg';
import piu from '../.././Images/Vector 36.png';
import voltar from '../.././Images/Back.svg';

import searchSimbol from "../.././Images/Vector 33.png";

import fechar from "../.././Images/Group 107.png";

function Feed(){
    const {user} = useAuth();
    const token = useAuth();
    
    const [dados,setDados] = useState([]);
    const [formPiu,setFormPiu] = useState(['']);
    const [texto, setTexto] = useState('');
    const [opac,setOpac] = useState(1);
    const [opac2,setOpac2] = useState(1);
    const [cor,setCor] = useState('rgba(0,0,0,0)');
    const [id, setId] = useState(0);
    const [usuarioId,setusuarioId] = useState(0);
    const [aberto,setAberto] = useState('aberto');

    const [usuario,setUsuario] = useState({
            id: user['id'],
            username: user['username'],
            first_name: user['first_name'],
            last_name: user['last_name'],
            email: user['email'],
            sobre: user['sobre'],
            foto: user['foto'],
        });

    const [dadosUser,setDadosUser] = useState([{id:0,
    username:'',last_name:'',first_name:'',email:'',
    sobre:'',foto:''
    }]);

    const [aleatorio,setAleatorio] = useState([
        Math.round(Math.random() * dadosUser['length']),
        Math.round(Math.random() * dadosUser['length']),
        Math.round(Math.random() * dadosUser['length'])]);

    const getApi = useCallback(async () => {
        const response = api.get('/pius/',{
        });
  
        setDados((await response).data);
    },[]);

    const getApi2 = useCallback(async () => {
        const response = api.get('/usuarios/',{
        });
  
        setDadosUser((await response).data);
    },[]);
    
    useEffect(() => {
        getApi();
    }, [dados]);

    if(dadosUser['length']>2 && aberto=='aberto'){
        setAleatorio(
        [Math.round(Math.random() * dadosUser['length']),
        Math.round(Math.random() * dadosUser['length']),
        Math.round(Math.random() * dadosUser['length'])]);
        setAberto('fechado');
    }
    console.log(aleatorio[0]+' '+aleatorio[1]+' '+aleatorio[2]);

    useEffect(() => {
        getApi2();
    }, []);

    function gerarPiu(){
        setOpac(0.7);
        setOpac2(1);
        setCor("rgba(0,0,0,0.7)");
        setFormPiu(['libera']);
        setId(dados[0]['id']+1);
        setusuarioId(usuario['id']);
    }

    function removePost(){
        setFormPiu(['']);
        setOpac(1);
        setOpac2(1);
        setCor("rgba(0,0,0,0)");
    }

    const history = useHistory();
    async function NovoPiu(e: FormEvent){
        e.preventDefault();
        if(texto.length<140){
            const response = await api.post('pius/',
            {
                usuario: usuarioId,
                texto: texto
            }).then(()=>{
                return(
                    <Link to='/feed'/>
                )
            })
        }

        else{
            alert("A mensagem tem mais de 140 caracteres");
        }

        setFormPiu(['']);
        setOpac(1);
        setOpac2(1);
        setCor("rgba(0,0,0,0)");
    }

    const { LogOut } = useAuth();
    function Back(){
            LogOut();
    }

    return (
        <div>
        {formPiu.map ((form) =>{
            if (form=='libera'){
                return(
                    <div>
                        <EspaçoPiu opacidade={opac2}>
                            <div id="botão_fecha">
                                <img src={fechar} onClick={removePost}/>
                            </div>
                            <div id="campo_post">
                                <form onSubmit={NovoPiu}>
                                    <input 
                                    type="textarea"
                                    placeholder="What's happening?"
                                    value={texto}
                                    onChange={(e) => {setTexto(e.target.value)}}
                                    className="post" />
                                    <h3>{texto.length}/140</h3>
                                    <button type="submit">Piu</button>
                                </form>
                            </div>
                        </EspaçoPiu>
                    </div>
        )}})}
        <Body opacidade={opac} color={cor}>
            <Aside>
                <img id="Logo_PiuPiuwer" src={Logo} />
                <div id="menu">
                    <ul>
                        <li><img src={Home} alt="Home"/><a href="">Home</a></li>
                        <li><img src={Explore} alt="Explore"/><a href="">Explore</a></li>
                        <li><img src={Notification} alt="Notification"/><a href="">Notification</a></li>
                        <li><img src={Messages} alt="Messages"/><a href="">Messages</a></li>
                        <li><img src={Bookmarks} alt="Bookmarks"/><a href="">Bookmarks</a></li>
                        <li><img src={Lists} alt="Lists"/><a href="">Lists</a></li>
                        <li><img src={Profile} alt="Profile"/><a href="">Profile</a></li>
                        <li><img src={More} alt="More"/><a href="">More</a></li>
                        <button onClick={gerarPiu}>
                            Piu
                        </button>
                    </ul>
                </div>
                <div id="user_identification">
                  <img src={user['foto']} alt="imagem" />
                    <ul>
                        <li><a id="user_name">{user['first_name']} {user['last_name']}</a></li>
                        <li><a id="user_email">@{user['username']}</a></li>
                    </ul>
                </div>
            </Aside>
            <Section>
                <div id="superior">
                    <div id="profile_infos">
                        <img src={voltar} onClick={Back}/>
                        <ul>
                            <li><a id="user_name">{user['first_name']} {user['last_name']}</a></li>
                            <li><a id="user_email">{user['seguidores']['length']} seguidores</a></li>
                        </ul>
                    </div>
                    <div id="general_infos">
                        <img id="capa" src={foto_capa}/>
                        <img id="perfil" src={user['foto']}/>
                        <div id="lista">
                            <ul>
                                <li><a id="user_name">{user['first_name']} {user['last_name']}</a></li>
                                <li><a id="user_email">@{user['username']}</a></li>
                            </ul>
                            <img src={piu}/>
                            <button id="SetUpProfile">Set up profile</button>
                        </div>
                    </div>
                    <nav id="options">
                        <ul>
                            <li>Pius</li>
                            <li>Pius & RePius</li>
                            <li>Media</li>
                            <li>Likes</li>
                        </ul>
                        <div id="barra_de_opção"></div>
                    </nav>
                </div>
                <Inferior tamanho={(dados.length)*11}>
                    <div className="espaçoNew">
                        {dados.map ((dado) =>{
                            let horario = dado['horario'];
                        return(
                        <div className="Item-container">
                            <Table
                                piuId={dado['id']}
                                idCode={dado['usuario']['id']}
                                foto={dado['usuario']['foto']}
                                username={dado['usuario']['username']}
                                firstName={dado['usuario']['first_name']}
                                lastName={dado['usuario']['last_name']}
                                ano={[horario[0],horario[1],horario[2],horario[3]]}
                                mes={[horario[5],horario[6]]}
                                dia={[horario[8],horario[9]]}
                                hora={[horario[11],horario[12],horario[13],horario[14],horario[15],horario[16],horario[17],horario[18]]}
                                message={dado['texto']}
                                contador1={dado['likers']['length']}
                                contador2={dado['favoritado_por']['length']}
                            ></Table>
                            </div>
                        )})}
                        </div>
                </Inferior>
            </Section>
            <Rigth>
                <div id="barra_de_pesquisa">
                    <input type="text" id="search" name="search" placeholder="Search PiuPiuwer" />
                    <img src={searchSimbol}/>
                </div>
                <EspaçoCompartilhado posição='center'>
                    <ul>
                        <li><p>You might like</p></li>
                        {dadosUser.map ((dado, index) =>{
                        
                        if(aleatorio[0]==index || aleatorio[1]==index || aleatorio[2]==index){
                            return(
                            <li>
                                <h1>{dado['first_name']} {dado['last_name']}</h1>
                                <h2>@{dado['username']}</h2>
                                <img src={dado['foto']}/>
                                <button>Seguir</button>
                            </li>
                        )}})}
                        <a>Show more</a>
                    </ul>
                </EspaçoCompartilhado>
                <EspaçoCompartilhado posição='bottom'>
                    <ul>
                        <li><p>What’s happening</p></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </EspaçoCompartilhado>
            </Rigth>
        </Body>
        </div>
        )
}

export default Feed;*/