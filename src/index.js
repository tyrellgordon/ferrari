import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


  var vid = document.getElementById("video-background"); 
  var play = true;


  
  function playVid() { 

    play = !play; // switch the boolean
    if (play){ // no need for == true
      vid.muted = true
    }
     else { // no need for if condition
        
      vid.muted = false
    }

   
   
    

    
      
  } 
  
  
 