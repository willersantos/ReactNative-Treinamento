import React, { useContext, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import api from '.././Services/api';
import AsyncStorage from '@react-native-community/async-storage';
import Redirection from './redirect';

export interface user{
    id:number;
    username:string;
    first_name:string;
    last_name:string;
    foto:string;
    email:string;
    sobre:string;
    seguidores:Array<{
        value:string;
    }>;
    seguindo:Array<{
        value:string;
    }>;
    pius:Array<{
        value:string;
    }>;
    favoritos:Array<{
        value:string;
    }>;
}

interface AuthState{
    token:string;
    user:user;
}

interface AuthContextData{
    user:user;
    LogOut(): void;
    signIn({username, password}: LoginCredentials): Promise <string | undefined>;
}

interface LoginCredentials{
    username:string;
    password:string;
}

export const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const sign = async () => {
    };
    const [userData, setUserData] = useState<AuthState>( async () => {
        const token = await AsyncStorage.getItem('@Project:token');
        const user = await AsyncStorage.getItem('@Project:user');
        

        if (user && token) {
            return{token, user: JSON.parse(user)};
        }

        return {} as AuthState;
    });

    const history = useHistory();

    const signIn = useCallback(async ({username,password}:LoginCredentials) => {
        try{
            const response = await api.post('/login/', {
                username,
                password,
            });

            const { token } = response.data;
            await AsyncStorage.setItem('@Project:token', token);

            if(!!token){
                const userResponse = await api.get('usuarios/?search='+ username);
                const user = userResponse.data[0];

                await AsyncStorage.setItem('@Project:user', JSON.stringify(user));
                setUserData({token, user});
                //api.defaults.header.authorization =`JWT${token}`;
                history.push('/feed');
            }
        }

        catch(erro){
            const userData = erro.response.data;

            if (erro.response){
                if(userData.global !== undefined && userData.global[0]
                === "Impossível fazer login com as credenciais fornecidas."){
                    alert("Atenção usuário e senha não existem")
                    
                }
                
                if(userData){
                    if(userData.global !== undefined && userData.username[0]
                    === "Atenção esse campo não pode ser em branco."){
                        return ("Atenção: Usuário em branco")
                        
                    }
                    if(userData.global !== undefined && userData.password[0]
                    === "Atenção esse campo não pode ser em branco."){
                        return ("Atenção: Senha em branco")
                    
                    }}
                history.push('/');
            }
        }
    },[]);

    const LogOut = useCallback(async () => {
            await AsyncStorage.removeItem('@Project:token');
            await AsyncStorage.removeItem('@Project:user');
            history.push('/');

            setUserData({} as AuthState);
    },[]);

    return(
        <AuthContext.Provider value={{ user: userData.user, signIn, LogOut}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): AuthContextData{
    const context = useContext(AuthContext);
    return context;
}

export default useAuth;
