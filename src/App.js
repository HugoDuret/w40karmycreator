import React, { Component } from 'react';
import './App.css';
import {Title,ArmyHeaderInfo, Categories, Units, WeaponsAndWargearsWrapper }  from './components';
import injectSheet from 'react-jss'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalArmyPoints: 10,
      category: '',
      unit: {
        name: ''
        // unitWeapons : ''
        // unitAméliorations
      }
    };
  }
  
  onSelectCategory(categoryName) {
    console.log(categoryName);
    this.setState({
      category: categoryName
    })
  } ;

  onSelectUnit(unitName) {
    const { unit } = this.state;
    console.log(unitName);
    this.setState({
      unit: {...unit, name: unitName}
    })
  } ;

  render() {

    const {totalArmyPoints, category, unit} = this.state;
    const {classes} = this.props;

    const unitNamesExample = ["Gargouilles", "Termagants", "Hormagaunts"];
    const weaponsBasicExample = ["Dévoreur", "Griffes Tranchantes", "Poings épineux"];
    const wargearsBasicExample = ["Sacs à toxines", "Glandes surrénales"];
    const weaponsOptionsExample = [
      {name: "Dévoreur"},
     {name :"Griffes Tranchantes", max: 5, prix: '4 pts/figurine'},
     {name :"Poings épineux", max: 4, prix: '2 pts/figurine'},
    ];
    const wargearsOptionsExample = [
      {name: "Sacs à toxines", prix: 'gratuit'},
     {name :"Glandes surrénales", max: 5, prix: '4 pts/figurine'},
    ];

    // const wargearsOptionsExample = ["Sacs à toxines", "Glandes surrénales"];

    return (
      <div className="App">
        <div className={classes.army}>
          <Title label={"Gestionnaire d'Armée"} classes/>
          <ArmyHeaderInfo  counter={totalArmyPoints} classes />
        </div>
        <div className={classes.unit}>
          <Categories onClick={(categoryName) => {this.onSelectCategory(categoryName)} } categorySelected={category} classes/>
          <Units unitNames={unitNamesExample} onClick={(unitName) => {this.onSelectUnit(unitName)} } unitSelected={unit.name} classes/>
          <WeaponsAndWargearsWrapper
            weaponsList={weaponsBasicExample}
            wargearsList={wargearsBasicExample} 
            weaponsOptionsList={weaponsOptionsExample}
            wargearsOptionsList={wargearsOptionsExample}
            onChangeWeapon={ () => {}}
            onChangeWargear={ () => {}}
            currentNumberOfFigurines={15}
            classes
          />
        </div>
      </div>
    );
  }
}

const styles = {
  army: {
    height: 100,
    margin: '20',
    'box-shadow': '0 4px 6px  rgba(0,0,0,0.5)',
    '&:hover': {
      'box-shadow':'0 6px 8px  rgba(0,0,0,0.5)'
    }
  },
unit : {
  display: 'flex',
  'flex-direction' : 'row'
  }
};


export default injectSheet(styles)(App);
