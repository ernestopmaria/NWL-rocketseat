import React from 'react';
import{Route, BrowserRouter, Router} from 'react-router-dom';

import Home from './pages/Home';
import CreatPoint from './pages/CreatePoint';

const Routes =()=>{
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={CreatPoint} path="/create-point" />
        </BrowserRouter>
    );
}
export default Routes;