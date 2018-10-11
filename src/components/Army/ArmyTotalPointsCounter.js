import React from 'react';
import injectSheet from 'react-jss'

export const ArmyTotalPointsCounter = props => {
    const {counter, classes} = props;

    return(
        <span className={classes.counter} >{counter}</span>
    )
};

const styles = {
    counter: {
      color: 'red',
      'padding-left': 8

  }
};
  


export default injectSheet(styles)(ArmyTotalPointsCounter);