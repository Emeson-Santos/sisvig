// import React, { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';

// import SignIn from '../Pages/SignIn';
// import SignUp from '../Pages/SignUp';
// import Home from '../Pages/Home';
// import Header from '../Component/Header';
// import Ocorrencia from '../Pages/Ocorrencia';
// import Calendario from '../Pages/Calendario';
// import Relatorios from '../Pages/Relatorio';
// import Reciclagem from '../Pages/Reciclagem';
// import Ferias from '../Pages/Ferias';

export default function RouiteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {

    //==========================================================
    // pra saber se esta logado na aplicação ou não
    const loading = false;
    const signed = false;

    if (loading) {
        return(
            <div></div>
        )
    }

    //se ele não esta logado e a rota é privada retorna para a tela de login
    if (!signed && isPrivate) {
        return <Redirect to="/"/> 
    }

    //se está logado e a pagina não é privada returna para a tela do dashboard
    if (signed && !isPrivate) {
        return <Redirect to="/dashboard"/>
    }
//================================================================
    return (
        <Route
            {...rest}
            render={ props => (
                <Component {...props}/>
            )}
        />
    )
}


// const Routes = () => {
//     return (
//         <BrowserRouter>
//             <Header/>
//             <Switch>
//                 <Route exact path="/" component={SignIn} />
//                 <Route exact path="/" component={SignUp} />
//                 <Route exact path="/" component={Home} />
//                 <Route exact path="/ocorrencia" component={Ocorrencia} />
//                 <Route exact path="/calendario" component={Calendario} />
//                 <Route exact path="/relatorios" component={Relatorios} />
//                 <Route exact path="/reciclagem" component={Reciclagem} />
//                 <Route exact path="/ferias" component={Ferias} />
//             </Switch>
//         </BrowserRouter>
//     )
// }
// export default Routes;

