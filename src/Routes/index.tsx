import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Login from '.././pages/login/index';
import Feed from '.././pages/feed/index';
import SignUp1 from '.././pages/signup1/index';
import CampoPiu from '.././pages/campoPiu/index';
import Seguir from '.././pages/seguir/index';
import PiuComent from '.././Components/Table/index';
import Redirection from './redirect';

function Rotas(){
    return(
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/signup1' component={SignUp1} />
                <Route path='/feed' component={Feed} isPrivate />
                <Route path='/campoPiu' component={CampoPiu} isPrivate />
                <Route path='/seguir' component={Seguir} isPrivate />
                <Route path='/piuComent' component={PiuComent} isPrivate />
                <Route component={Redirection} />
            </Switch>
    );
}
export default Rotas;