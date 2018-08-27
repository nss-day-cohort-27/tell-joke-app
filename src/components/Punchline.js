import React from 'react';

//functional component
// JS function that accepts props and returns something
export default function Punchline(props) {
   if(props.showPunchline){
      return (
         <div>
            <h5>{props.punchline} HA! HA! HA!</h5>
            <button onClick={props.getNewJoke}>Show Me Aother</button>
         </div>
      )
   }else{
      return null;
   }
}