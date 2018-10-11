import React from 'react';
import ArmySelectorLabel from './ArmySelectorLabel';
import ArmySelectorChoice from './ArmySelectorChoice';
import injectSheet from 'react-jss'

export const ArmySelectorWrapper = props => {

    const {classes} = props;
    return(
        <div className={classes.wrapper} >
        <ArmySelectorLabel label={"Armée"} classes />
        <ArmySelectorChoice classes />
        </div>
    );
};


const styles = {
    wrapper: {
        margin: '0 0 15px 30px',
        display: 'inline'
    }
};
  


export default injectSheet(styles)(ArmySelectorWrapper);