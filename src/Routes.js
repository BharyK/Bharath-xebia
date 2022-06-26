import React, { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import loadable from 'react-loadable';
import Spinner from './components/Spinner/Spinner';

const load = loader => loadable({
    loader, loading: Spinner
})


const AdminViewPage = load(() => import ('./container/AdminView/AdminView'));
const EmployeeViewPage=load(() => import('./container/EmployeeView/EmployeeView'));
const SignInPage = load(() =>import('./container/SignIn/SignIn'));

const RoutesComponent = () => {
    return (
        <Routes>
            <Route  element={<AdminViewPage/>} path="/adminView" />
            <Route  element={<EmployeeViewPage/>} path="/employeeViewPage" />
            <Route exact element={<SignInPage/>} path="/" />
        </Routes>
    )
}

export default RoutesComponent;