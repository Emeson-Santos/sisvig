import React from 'react';
import { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
// import { toast } from 'react-toastify';


export const AuthContext = createContext({});

function AuthProvider({ children }) {   

    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);//esse loading é para o botão de cadastrar pra aparecer carregando
    const [loading, setLoading] = useState(true);// esse cara vai ser o loading geral quando entrar tem que aparecer carregando

    //verificar se tem algum usuario logado
    useEffect(() => {

       
        function loadStorage() {
            const storegeUser = localStorage.getItem('SistemaUser');// tenta buscar  se tiver algo ele vai salvar dentro da variavel (storegeUser)

            if (storegeUser) {
                setUser(JSON.parse(storegeUser));

                //enquanto faz a busca vou usar o loading pra ficar carregando
                setLoading(false);

            }
            //se não tem nenhum usuario logado coloca só o setloading falso
            setLoading(false); 
        }
        //chama a função criada
        loadStorage();


    }, [])


    //Função para cadastrar o usuário
    async function signUp(email, password, nome) { 
        setLoadingAuth(true);

        await firebase.firestore.createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;

                await firebase.firestore().collection('users')
                    .doc(uid).set({
                        nome: nome,
                        avatarUrl: null,
                    })
                    .then(() => {

                        let data = {
                            uid: uid,
                            nome: nome,
                            email: value.user.email,
                            avatarUrl: null
                        };

                        setUser(data);
                        storageUser(data);
                        setLoadingAuth(false);
                        alert('Bem vindo a plataforma');
                        // toast.success('Bem vindo a plataforma!');

                    })

            })
            .catch((error) => {
                console.log(error);
                alert('Ops!, algo deu errado.');
                // toast.error('Ops algo deu errado!');
                setLoadingAuth(false);

            })

    }

    function storageUser(data) {
        localStorage.setItem('SistemaUser', JSON.stringify(data));
    }

    return (

        <AuthContext.Provider value={{ signed: !!user, user, loading, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;