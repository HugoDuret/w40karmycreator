import React from 'react';
import injectSheet from 'react-jss'
import classNames from 'classnames'

export const Units = props => {
    const { classes, unitNames, onClick, unitSelected} = props;

    const units = [];
    unitNames.forEach(unitName => {
        units.push(
            <button key={unitName} type="button" onClick={() =>  {onClick(unitName)}} value={unitName} className={classNames(classes.unitName, unitName === unitSelected ? classes.unitNameSelected : '' ) } >{unitName}</button>

        );
    });

    return(
        <div className={classes.divUnits} >
            {units}        
        </div>
    )
};

const styles = {
    divUnits: {
      color: 'green',
      width: 120,
      display: 'flex',
      'flex-direction': 'column',
      padding: 10,
      border: 'solid',
      'border-right': 'none',
      'border-width': 2,
      '&:hover': {
        width: 140,
        'box-shadow':'0 4px 6px  rgba(0,0,0,0.5)'
      },
      transition: '0.3s'
    },
    unitName: {
      color: 'green',
      backgroundColor: '#FFFFFF',
      padding: 10,
      border: 'none',
      'border-radius': 9,
      outline: 'none',
      '&:hover': {
          backgroundColor: '#EEEEEE'
      },
      '&:active': {
          backgroundColor: '#DDDDDD'
      }
  },
  unitNameSelected: {
    backgroundColor: '#DDDDDD'
  }
};
  


export default injectSheet(styles)(Units);