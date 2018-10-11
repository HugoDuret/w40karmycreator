import React from 'react';
import injectSheet from 'react-jss'
import WargearsOptions from './WargearsOptions'
import WeaponsOptions from './WeaponsOptions'

export const WeaponsAndWargearsOptions = props => {
    const { classes, weaponsOptionsList, wargearsOptionsList, currentNumberOfFigurines, onChangeWeapon, onChangeWargear} = props;

    return(
        <div className={classes.divWeaponsAndWargearsOptions} >
            <WeaponsOptions weaponsOptionsList={weaponsOptionsList} currentNumberOfFigurines={currentNumberOfFigurines} onChange={onChangeWeapon} />
            <WargearsOptions wargearsOptionsList={wargearsOptionsList} currentNumberOfFigurines={currentNumberOfFigurines} onChange={onChangeWargear} />
        </div>
    )
};

const styles = {
    divWeaponsAndWargearsOptions: {
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
  


export default injectSheet(styles)(WeaponsAndWargearsOptions);