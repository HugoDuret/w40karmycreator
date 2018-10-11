import React from 'react';
import injectSheet from 'react-jss'

export const WeaponsOptions = props => {
    const {weaponsOptionsList, onChange, currentNumberOfFigurines, classes} = props;

    const weapons = [];
    weaponsOptionsList.forEach(weapon => {
        weapons.push(
            <li key={weapon.name} className={classes.li}>
                {weapon.name}
                <input type="number" min={0} max={weapon.max ? weapon.max : currentNumberOfFigurines } onChange={() => onChange()} className={classes.input}></input>
                <span className={classes.prix} >{weapon.prix}</span>
            </li>
        );
    });

    return(
        <div className={classes.label} >
            <span className={classes.title}>Weapons (opt.)</span>
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
        display: 'flex',
        'justify-content': 'space-between',
        'border-radius': 9,
        '&:hover': {
            backgroundColor: '#EEEEEE'
        }

    },
    input: {
        color: 'green',
        width: 45,
        'text-align': 'center',
        height: '1.5em',
        'margin-left': 8,
        border: 'none',
        'border-radius': 5,
        outline: 'none',
        '-webkit-inner-spin-button, -webkit-outer-spin-button': {  
            opacity: 1,
        }
    },
    prix : {
        fontStyle: 'italic',
        margin: 8,
        'text-align': 'center'
    }
};
  


export default injectSheet(styles)(WeaponsOptions);