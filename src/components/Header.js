import React, {Component} from 'react';

class Header extends Component{

   render(){
      const logoImage = require(`../images/happy_smiley_face.png`);

   return(
      <header className="App-header">
         <img src={logoImage} alt="Joke Logo" className="App-logo" />
         <h1 className="App-title">Tell Brenda A Joke!</h1>
      </header>
   )}

}

export default Header;