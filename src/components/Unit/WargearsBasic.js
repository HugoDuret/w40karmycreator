import React from 'react';
import injectSheet from 'react-jss'

export const WargearsBasic = props => {
    const {wargearsList,  classes} = props;

    const wargears = [];
    wargearsList.forEach(wargear => {
        wargears.push(
            <li key={wargear} className={classes.li}>{wargear}</li>
        );
    });

    return(
        <div className={classes.label} >
            <span className={classes.title}>Wargears</span>
            <ul className={classes.ul} >{wargears}</ul>
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
  


export default injectSheet(styles)(WargearsBasic);