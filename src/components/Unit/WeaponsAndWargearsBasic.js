import React from 'react';
import injectSheet from 'react-jss'
import WargearsBasic from './WargearsBasic'
import WeaponsBasic from './WeaponsBasic'

export const WeaponsAndWargearsBasic = props => {
    const { classes, weaponsList, wargearsList} = props;

    return(
        <div className={classes.divWeaponsAndWargearsBasic} >
            <WeaponsBasic weaponsList={weaponsList} />
            <WargearsBasic wargearsList={wargearsList} />
        </div>
    )
};

const styles = {
    divWeaponsAndWargearsBasic: {
      color: 'green',
      width: '100%',
      display: 'flex',
      'flex-direction': 'column',
      padding: 10,
      border: 'solid',
      'border-right': 'none',
      'border-width': 2,
      transition: '0.3s'
    }  
};
  


export default injectSheet(styles)(WeaponsAndWargearsBasic);