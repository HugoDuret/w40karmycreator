import React from 'react';
import injectSheet from 'react-jss'

export const ArmyTotalPointsLabel = props => {
    const {label, classes} = props;

    return(
        <span className={classes.label} >{label}</span>
    )
};

const styles = {
    label: {
      color: 'green',
  }
};
  


export default injectSheet(styles)(ArmyTotalPointsLabel);