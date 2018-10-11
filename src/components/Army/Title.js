import React from 'react';
import injectSheet from 'react-jss'

export const Title = props => {
    const {label,  classes} = props;
    return(
        <div className={classes.title} >{label}</div>
    )
};

const styles = {
    title: {
      color: 'grey',
      margin: '10px 0 30px 10px'
  }
};
  


export default injectSheet(styles)(Title);
