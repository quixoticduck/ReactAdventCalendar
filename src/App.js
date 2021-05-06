import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
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
  { number: 1, image: "https://placekitten.com/g/100/100" },
  { number: 2, image: "https://placekitten.com/g/100/100" },
  { number: 3, image: "https://placekitten.com/g/100/100" },
  { number: 4, image: "https://placekitten.com/g/100/100" },
  { number: 5, image: "https://placekitten.com/g/100/100" },
  { number: 6, image: "https://placekitten.com/g/100/100" },
  { number: 7, image: "https://placekitten.com/g/100/100" },
  { number: 8, image: "https://placekitten.com/g/100/100" },
  { number: 9, image: "https://placekitten.com/g/100/100" },
  { number: 10, image: "https://placekitten.com/g/100/100" }, 
  { number: 11, image: "https://placekitten.com/g/100/100" },
  { number: 12, image: "https://placekitten.com/g/100/100" },
  { number: 13, image: "https://placekitten.com/g/100/100" },
  { number: 14, image: "https://placekitten.com/g/100/100" },
  { number: 15, image: "https://placekitten.com/g/100/100" },
  { number: 16, image: "https://placekitten.com/g/100/100" },
  { number: 17, image: "https://placekitten.com/g/100/100" },
  { number: 18, image: "https://placekitten.com/g/100/100" },
  { number: 19, image: "https://placekitten.com/g/100/100" },
  { number: 20, image: "https://placekitten.com/g/100/100" },
  { number: 21, image: "https://placekitten.com/g/100/100" },
  { number: 22, image: "https://placekitten.com/g/100/100" },
  { number: 23, image: "https://placekitten.com/g/100/100" },
  { number: 24, image: "https://placekitten.com/g/100/100" }
]

// TODO: This should be a component:
const Door = (obj) => {
  //curly brackets inside the useState are a JSON object
  const [doorStyle, setDoorStyle] = React.useState({ backgroundImage: "url('https://fastly.syfy.com/sites/syfy/files/2018/08/pikachu_pokemon_snap.jpeg')" });
  const number = obj.number;
  const image = obj.image;

  const doorClicked = () => {
    //new Date is a built in method in javascript
    const currentDate = new Date();
    if (currentDate.getDate() >= number) {
        setDoorStyle({backgroundImage: "url(" + image + ")"})
    } else {

    }
  }
  
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return <div className="Door" style={doorStyle} onClick={doorClicked}>{number}</div>;
}


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



function OriginalApp() {
  var message = "Hello world"
  return (
    // anything with an uppercase first letter is a "component"
    <Router>
      {/* anything with a lowercase first letter is an "element" (an html tag) */}
      <div>
        <Title text="Advent Calendar" color="purple" />
        <nav>
          <ol>
            <li>
              <Link to="/">House</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ol>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}


function Contact() {
  return <h2>Contact</h2>;
}


export default function App() {
  
  Door(1) // returns "(1)"

  var Doors = data.map(Door);
  return (
    <div>
      <Title text="Advent Calendar" color="purple" />
      <Title text="Countdown to Christmas!" color="orange" />
      {Doors}
    </div>
  )
}