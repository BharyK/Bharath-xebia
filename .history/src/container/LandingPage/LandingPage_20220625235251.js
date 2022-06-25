import React from 'react';
import useStyles from './LandingPage.styles';
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