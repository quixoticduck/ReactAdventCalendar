import React from 'react';
import logo from './logo.svg';
import './App.css';
import Door from './components/Door.js';
import Header from './Header.js';
import FunctionCloseDoors from './components/FunctionCloseDoors.js'
import {
  //this style of import 
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";
// this style of import has to be importing from a file with export default in it
import About from './components/About.js'

var data = [
  { number: 1, image: '../assets/img/camel.jpg'},
  { number: 2, image: '../assets/img/duck.png'},
  { number: 3, image: '../assets/img/jigglypuff.png'},
  { number: 4, image: '../assets/img/pikachu.png'},
  { number: 5, image: '../assets/img/reindeer.png'},
  { number: 6, image: '../assets/img/sloth.png'},
  { number: 7, image: '../assets/img/windmill.png'},
  { number: 8, image: '../assets/img/windmill-logo.jpg'},
  { number: 9, image: '../assets/img/camel.jpg'},
  { number: 10, image: '../assets/img/camel.jpg'}, 
  { number: 11, image: '../assets/img/camel.jpg'},
  { number: 12, image: '../assets/img/camel.jpg'},
  { number: 13, image: '../assets/img/camel.jpg'},
  { number: 14, image: '../assets/img/camel.jpg'},
  { number: 15, image: '../assets/img/camel.jpg'},
  { number: 16, image: '../assets/img/camel.jpg'},
  { number: 17, image: '../assets/img/camel.jpg'},
  { number: 18, image: '../assets/img/camel.jpg'},
  { number: 19, image: '../assets/img/camel.jpg'},
  { number: 20, image: '../assets/img/camel.jpg'},
  { number: 21, image: '../assets/img/camel.jpg'},
  { number: 22, image: '../assets/img/camel.jpg'},
  { number: 23, image: "https://placekitten.com/g/101/100" },
  { number: 24, image: "https://placekitten.com/g/100/100" }
]

// props is an object
// the field names in the object are the attribute names
// the field values are the attribute values
//
// var props = { text: "Hello world", color: "red" }
function Title(props) {
  var cssStyles = {
    color: props.color
  };
  return (
    // {} braces are a way of inserting javascript into the middle of the html
    <h1 style={cssStyles}>{props.text}</h1>
  )
}

function Subheading(props) {
  var cssStyles = {
    color: props.color
  };
  return (
    // {} braces are a way of inserting javascript into the middle of the html
    <h2 style={cssStyles}>{props.text}</h2>
  )
}



// function OriginalApp() {
//   var message = "Hello world"
//   return (
//     // anything with an uppercase first letter is a "component"
//     <Router>
//       {/* anything with a lowercase first letter is an "element" (an html tag) */}
//       <div>
//         {/* <Title text="Advent Calendar" color="purple" /> */}
//         <nav>
//           <ol>
//             <li>
//               <Link to="/">House</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ol>
//         </nav>
// 
//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/contact">
//             <Contact />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

function Home() {
  return <h2>Home</h2>;
}


function Contact() {
  return <h2>Contact</h2>;
}


export default function App() {
  console.log(data);
  Door(1) // returns "(1)"

  var Doors = data.map(Door);
  return (
    <div class="wrapper">
      <span class = "titles">
        <Title text="Advent Calendar " color="white" />
        <span class = "subheading">
          <Subheading text="Countdown to Christmas!" color="white" />
        </span>
      </span>
      <div class="calendar-container">
        {Doors}
      </div>
      {/* {} are used for javascript objects  */}
      {/* but also {} are used to swap from html (JSX) mode to javascript mode when using React/JSX */}
      <div class = "last-door-wrapper">
        <div class= "last-door">
          {/* true is inside {} so that it isn't seen as a string */}
            <Door number="25" image='../assets/img/camel.jpg' itsChristmas = {true}/>
        </div>
        <div>
            <FunctionCloseDoors/>
        </div>
      </div>

  </div>
  )
}