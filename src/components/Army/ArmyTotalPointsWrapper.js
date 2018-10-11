import React from 'react';
import ArmyTotalPointsCounter from './ArmyTotalPointsCounter';
import ArmyTotalPointsLabel from './ArmyTotalPointsLabel';
import injectSheet from 'react-jss'

export const ArmyTotalPointsWrapper = props => {

    const {classes, counter} = props;
    return(
        <div className={classes.wrapper} >
        <ArmyTotalPointsLabel label={"Total"} classes />
        <ArmyTotalPointsCounter classes counter={counter} />
        </div>
    );
};


const styles = {
    wrapper: {
        margin: '0 30px 15px 0px',
        display: 'inline'
    }
};
  


export default injectSheet(styles)(ArmyTotalPointsWrapper);