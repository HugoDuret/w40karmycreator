import React from 'react';
import injectSheet from 'react-jss'
import classNames from 'classnames'

export const Categories = props => {
    const { classes, onClick, categorySelected} = props;

    const categoryNames = [
        "QG",
        "Élite",
        "Troupes",
        "Attaque Rapide",
        "Soutien"        
    ];

    const categories = [];

    categoryNames.forEach(category => {
        categories.push(
            <button key={category} type="button" onClick={() =>  {onClick(category)}} value={category} className={ classNames(classes.category, category === categorySelected ? classes.categorySelected : '' ) } >{category}</button>
        );
    });

    return(
        <div className={classes.divCategories} >
            {categories}        
        </div>
    )
};

const styles = {
    divCategories: {
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
        'box-shadow':'0 6px 8px  rgba(0,0,0,0.5)'
      },
      transition: '0.3s'

    },
    category: {
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
  categorySelected: {
    backgroundColor: '#DDDDDD'
  }
};
  


export default injectSheet(styles)(Categories);