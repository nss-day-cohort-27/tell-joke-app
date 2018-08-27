import React, { Component } from 'react';
import JokeSetup from './JokeSetup';
import Punchline from './Punchline';
import APICalls from './APICalls';

export default class Joke extends Component {

      state = {
         jokeLoaded: false,
         jokeResult: {},
         showPunchline: false,
      }

      showPunchlineClicked = () => {
         this.setState({
            showPunchline: true,
         })
      }

      getNewJoke = () => {
         this.setState({
            jokeLoaded: false,
            jokeResult: {},
            showPunchline: false,
         }, this.loadAnother);
      }

      loadAnother = () => {
         APICalls.getJoke()
            .then((joke) => {
               console.log("joke", joke);
               this.setState({
                  jokeLoaded: true,
                  jokeResult: joke,
               })
            })
      }

      componentDidMount = () =>{
         console.log("componentDidMount");
         // go get the joke
         APICalls.getJoke()
         .then((joke) => {
            console.log("joke", joke);
            this.setState({
               jokeLoaded: true,
               jokeResult: joke,
            })
         })
      }


   render() {
      console.log("render!");
      const { showPunchline, jokeResult} = this.state;
      return(
         <div>
         <JokeSetup
            jokeSetup={jokeResult.setup}
               jokeType={jokeResult.type}
               showPunchlineClicked={this.showPunchlineClicked}
               showPunchline={showPunchline} />
         <Punchline
            showPunchline={showPunchline}
            punchline={jokeResult.punchline}
            getNewJoke={this.getNewJoke} />
         </div>
      )

   }
}
