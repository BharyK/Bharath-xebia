import React from 'react';
import useStyles from './LandingPage.styles';
import SignIn from '../SignIn/SignIn'
import EmployeeView from '../EmployeeView/EmployeeView';
import AdminView from '../AdminView/AdminView'

const LandingPage = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
          <EmployeeView/>
        </div>
    )
}

export default LandingPage