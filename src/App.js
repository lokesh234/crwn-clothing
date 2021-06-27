import React from 'react'
import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from './component/header/header.component.jsx'

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path={'/'} component={HomePage}/>
                <Route path={'/shop'} component={ShopPage}/>
            </Switch>
        </>
    );
}

export default App;
