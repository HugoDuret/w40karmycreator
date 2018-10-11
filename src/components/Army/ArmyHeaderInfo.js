import React from 'react';
import ArmySelectorWrapper from './ArmySelectorWrapper';
import ArmyTotalPointsWrapper from './ArmyTotalPointsWrapper';
import injectSheet from 'react-jss'

export const ArmyHeaderInfo = props => {

    const {classes, counter} = props;
    return(
        <div className={classes.info} >
        <ArmySelectorWrapper classes />
        <ArmyTotalPointsWrapper counter={counter} classes />
        </div>
    );
};


const styles = {
    info: {
        display: 'flex',
        'flex-direction': 'row',
        'justify-content': 'space-between'
    }
};
  


export default injectSheet(styles)(ArmyHeaderInfo);