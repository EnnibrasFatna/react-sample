import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Modal from 'react-modal';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';


class App extends Component {
	
	constructor(){
		super();
		this.state= {isActive:false};
		this.state= {isOpen:false};
		this.toggleModal = this.toggleModal.bind(this);
		this.toggleModal2 = this.toggleModal2.bind(this);
	}
	
	toggleModal(){
	this.setState({isActive:!this.state.isActive});
	}
	toggleModal2(){
	this.setState({isOpen:!this.state.isOpen});
	}
	state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});
  ClickOnMe(event){
	  this.setState({myData : event.target.value});
  }
 render() { 


	  const style2 = {
      marginLeft: 1100,
      marginTop:200,
};
	  const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 900,
    height: 'auto',
    overflowY: 'auto',
	cursor: 'pointer',  
	 },
};
const header={
	height: 200,
	width: 900,
};

const contentStyle={
		padding:'30px'
	};
	const textFieldStyle = {
		display:'block',
		width:'100%',
	};
const tilesData = [
  {
    img: 'images/grid-list/shawarma.jpg',
    title: 'Shawarma',
  },
  {
    img: 'images/grid-list/pizza.jpg',
    title: 'Pizza',
  },
  {
    img: 'images/grid-list/pizza.jpg',
    title: 'Pizza',
  },
  {
    img: 'images/grid-list/burger.jpg',
    title: 'Burger',
  },
];

    return (
	<MuiThemeProvider>	
  <AppBar title="Mes recettes"
  />
    <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
	  >
      <Subheader>Récent</Subheader>
      {tilesData.map((tile) => (
        <GridTile 
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton ><StarBorder color="white" /></IconButton>}	  
	  >
		<img src={tile.img} onClick= {this.toggleModal2}/>
        </GridTile>
      ))}
    </GridList>
  </div>
  <Modal isOpen={this.state.isOpen} onRequestClose={this.toggleModal2} >	
   <AppBar
    title={<span> Shawarma </span>}
    iconElementRight={<IconButton onClick={this.toggleModal2}><NavigationClose /></IconButton>}
  />
 <header>
 <img src={'images/grid-list/shawarma.jpg'}/>
 </header>
 <div>
 <h2> Shawarma &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 15 min </h2>
 </div>
 <div>
 Elle est consommée sous forme de sandwich dans du pain pita. Les viandes utilisées sont le poulet, l'agneau ou le bœuf, salées et marinées dans un vinaigre de vin rouge épicé. Disposées en tranches fines sur une broche tournante, elles sont grillées verticalement.
 </div>
 <div>
 <h4> Ingrédients </h4>
 Shawarma-style meat is traditionally roasted on a vertical, rotating spit. (“Shawarma” comes from the Turkish word for “turning.”) In our kitchen-friendly take on the dish, we’re making meat patties and wrapping them with pocketless pitas for equally delicious spiced sandwiches. They’re completed by a rich, zesty Greek yogurt sauce—which is so good that we’re using it again, as a dressing for a crunchy side salad of radishes and sunflower seeds.
 </div>
  </Modal>
  <div>
    <FloatingActionButton style={style2} onClick= {this.toggleModal} >
	 <ContentAdd />
    </FloatingActionButton>
	</div>
	<Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal} >	
 <AppBar
    title={<span> Nouvelle recette</span>}
    iconElementRight={<IconButton onClick={this.toggleModal}><NavigationClose /></IconButton>}
  />
  <div style={contentStyle}>
  <form>
  <TextField floatingLabelText="Titre" style={textFieldStyle}/>
   <br />
  <TextField floatingLabelText="Description" style={textFieldStyle}/>
  <br />
   <SelectField
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Durée 15 min" />
          <MenuItem value={2} primaryText="Durée 30 min" />
          <MenuItem value={3} primaryText="Durée 60 min" />
        </SelectField>
		<br />
  <TextField floatingLabelText="Ingredients" style={textFieldStyle}/>
  </form>
  </div>
  	<br />
		<br />
  <div>
  <RaisedButton label="Save" primary={true} style={styles}/>
  </div>
	</Modal>
	  </MuiThemeProvider>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));