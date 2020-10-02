import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import UsersList from '../components/UsersList';
import BoatList from '../components/BoatList';

export default function Pages(){
    return (
        <>
            <Route exact path='/login' component={LoginPage} />
            <Route path='/boats' component={BoatList}/>
            <Route path='/users' component={UsersList}/>
        </>
    )
}
