import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Joke from './components/Joke';

export default class App extends Component {

   render(){

      return(
         <main className="app">
            <Header />
            <Joke />
         </main>
      );
   }
}