import React from 'react';
import WeaponsAndWargearsBasic from './WeaponsAndWargearsBasic';
import WeaponsAndWargearsOptions from './WeaponsAndWargearsOptions';
import injectSheet from 'react-jss'

export const WeaponsAndWargearsWrapper = props => {

    const {classes, weaponsList, wargearsList, weaponsOptionsList, wargearsOptionsList, currentNumberOfFigurines, onChangeWeapon, onChangeWargear, } = props;
    return(
        <div className={classes.wrapper} >
        <WeaponsAndWargearsBasic weaponsList={weaponsList} wargearsList={wargearsList} classes />
        <WeaponsAndWargearsOptions
            weaponsOptionsList={weaponsOptionsList}
            wargearsOptionsList={wargearsOptionsList}
            currentNumberOfFigurines={currentNumberOfFigurines}
            onChangeWeapon={onChangeWeapon}
            onChangeWargear={onChangeWargear}
        />
        </div>
    );
};


const styles = {
    wrapper: {
        margin: '0 30px 15px 0px',
        'padding-right': 20,
        width: 230,
        display: 'inline',
        '&:hover': {
            'box-shadow':'0 6px 8px  rgba(0,0,0,0.5)'
        },
        transition: '0.3s'
    }
};
  


export default injectSheet(styles)(WeaponsAndWargearsWrapper);