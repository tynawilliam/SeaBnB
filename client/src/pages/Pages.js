import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import UsersList from '../components/UsersList';
import BoatList from '../components/BoatList';
import Homepage from '../components/Homepage';

export default function Pages(){
    return (
        <>
            <Route exact path='/' component={Homepage}/>
            <Route path='/search' component={BoatList}/>
            <Route path='/login' component={LoginPage} />
            <Route path='/users' component={UsersList}/>
        </>
    )
}
