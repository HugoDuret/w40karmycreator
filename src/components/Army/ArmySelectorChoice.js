import React from 'react';
import injectSheet from 'react-jss'

export const ArmySelectorChoice = props => {
    const { classes} = props;

    const labels = [
        "Space Marines",
        "Garde Impériale",
        "Inquisition",
        "Chevaliers Gris",
        "Tau",
        "Nécrons",
        "Eldars",
        "Eldars Noirs",
        "Tyranides",
        "Orks",
        "Space Marines du Chaos",
        "Démons du Chaos",
        
    ];

    const choices = [];

    labels.forEach(label => {
        choices.push(
            <option key={label} value={label} className={classes.option}>{label}</option>
        );
    });

    return(
        <select className={classes.select} >
            {choices}        
        </select>
    )
};

const styles = {
    select: {
      color: 'green',
      'border-radius': 5,
      margin: '0 0 0 10px'
    },
    option: {
      color: 'green',
      border: 'none'
  }
};
  


export default injectSheet(styles)(ArmySelectorChoice);