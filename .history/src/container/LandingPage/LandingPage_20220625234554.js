import React from 'react';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
//import HeaderMenuItems from '../../components/NavigationBar/MenuButton/MenuButton';
import useStyles from './LandingPage.styles';
import MenuButton from '../../components/NavigationBar/MenuItem/MenuItem';
import Home from '../Home/Home';
import SignIn from '../SignIn/SignIn'

const LandingPage = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
          <SignIn/>
        </div>
    )
}

export default LandingPage