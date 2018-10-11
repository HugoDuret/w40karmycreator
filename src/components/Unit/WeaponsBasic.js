import React from 'react';
import injectSheet from 'react-jss'

export const WeaponsBasic = props => {
    const {weaponsList,  classes} = props;

    const weapons = [];
    weaponsList.forEach(weapon => {
        weapons.push(
            <li key={weapon} className={classes.li}>{weapon}</li>
        );
    });

    return(
        <div className={classes.label} >
            <span className={classes.title}>Weapons</span>
            <ul className={classes.ul} >{weapons}</ul>
        </div>
    )
};

const styles = {
    title: {
      color: '#005000',
      fontSize: 13,      
    },
    ul: {
        color: 'green',
        'text-align': 'left',
        fontSize: 12,
        'list-style' :'none',
        padding: 0
    },
    li: {
        color: 'green',
        margin: 5,
        padding: 8,
        'border-radius': 9,
        '&:hover': {
            backgroundColor: '#EEEEEE'
        },

    },
};
  


export default injectSheet(styles)(WeaponsBasic);