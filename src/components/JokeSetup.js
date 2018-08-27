import React, { Component } from 'react';

export default class JokeSetup extends Component {

   render(){

     // const showTellMeButton =


      return(
        <div>
         <h2>{this.props.jokeSetup}</h2>
         {(!this.props.showPunchline) ?
          <button onClick={this.props.showPunchlineClicked}>Tell Me</button>
          : null}
        </div>
      )
   }
};