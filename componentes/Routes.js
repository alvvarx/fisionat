import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Alta from './Alta';
import Lista from './Lista';

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Alta' component={Alta}/>
            <Route path='/Lista' component={Lista}/>
        </Switch>
    )
}

export default Routes;