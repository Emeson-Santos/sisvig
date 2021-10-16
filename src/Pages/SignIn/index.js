
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './signin.css';
import logo from '../../assets/nc3.png';

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();//não vai atualizar a pagina
        alert("Clicou");
    }

    return (
        <div className="container-center">
            <div className="login">
                <div className="logo-area">
                    <img src={logo} alt="Logo dp sistema" />
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>Entrar</h1>
                    <input type="text" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Acessar</button> 
                </form>

                <Link to="/register">Criar uma conta</Link>
            </div>
        </div>
    )
}
export default SignIn;