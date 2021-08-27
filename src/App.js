import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import Door from './components/Door.js';
// import Header from './Header.js';
// import FunctionCloseDoors from './components/FunctionCloseDoors.js';
// import Holly from './img/holly.png';
import Camel from './img/camel.jpg';
import Duck from './img/duck.png';
import Jigglypuff from './img/jigglypuff.png';
import Pikachu from './img/pikachu.png';
import Reindeer from './img/reindeer.png';
import Sloth from './img/sloth.png';
import Windmill from './img/windmill.png';
import WindmillLogo from './img/windmill-logo.jpg';
import Holly from './img/holly.png';
import ChristmasHolly from './img/holly-25.jpg';
// import {
//   //this style of import 
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// 
// } from "react-router-dom";
// this style of import has to be importing from a file with export default in it
// import About from './components/About.js'


var data = [
  { number: 1, image: Camel},
  { number: 2, image: Duck},
  { number: 3, image: Jigglypuff},
  { number: 4, image: Pikachu},
  { number: 5, image: Reindeer},
  { number: 6, image: Sloth},
  { number: 7, image: Windmill},
  { number: 8, image: WindmillLogo},
  { number: 9, image: Camel},
  { number: 10, image: Camel}, 
  { number: 11, image: Camel},
  { number: 12, image: Camel},
  { number: 13, image: Camel},
  { number: 14, image: Camel},
  { number: 15, image: Camel},
  { number: 16, image: Camel},
  { number: 17, image: Camel},
  { number: 18, image: Camel},
  { number: 19, image: Camel},
  { number: 20, image: Camel},
  { number: 21, image: Camel},
  { number: 22, image: Camel},
  { number: 23, image: "https://placekitten.com/g/101/100"},
  { number: 24, image: "https://placekitten.com/g/100/100"},
  { number: 25, image: "https://placekitten.com/g/500/200"}
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

// function Home() {
//   return <h2>Home</h2>;
// }
// 
// function Contact() {
//   return <h2>Contact</h2>;
// }

export default function App() {
  // define hooks near the start of the function
  function fetchData () {
    const storedCalendarState = localStorage.getItem("calendarState");
    if (storedCalendarState) {
      return JSON.parse(storedCalendarState);
    }
    return [];
  }

  // checks if the url contains /?cheatmode text and if it does it means all doors can be opened
  // http://localhost:3000/?cheatmode
  const cheatModeUrlParam = new URLSearchParams(window.location.search).get('cheatmode');
  const isCheatMode = !(cheatModeUrlParam === null);
  // const [isCheatMode, setIsCheatMode] = useState(cheatModeParamExists);

  // data parameter is just temporarily there as a placeholder
  const [doors, setDoors] = useState(data);
  const [zoomed, setZoomed] = useState(false);
  const [currentDoor, setCurrentDoor] = useState();

// used here to execute something the first time the page loads and not every render
  useEffect(() => {
    const calendarState = fetchData();

// using ... includes everything in the object
    const currentDoorsOpen = doors.map(door => ({...door, doorOpen: calendarState.includes(door.number)}));
    setDoors(currentDoorsOpen);
    //it takes a second parameter telling it when to render again but we want it to run once and not when something updates so we have left it empty
  }, []);

  function flipDoor(doorNumber) {
    if (doors[doorNumber -1].doorOpen === true) {
      setCurrentDoor(doorNumber);
      setZoomed(!zoomed);
    }
    const currentDate = new Date();

    const dayOfMonth = currentDate.getDate();
    // let isCheatMode = true;
    const isOkToFlipDoor = (dayOfMonth >= doorNumber) || isCheatMode;
    if (isOkToFlipDoor) {
      // a trick to make React know the data has changed
      const updatedDoors = [...doors];
      updatedDoors[doorNumber -1].doorOpen = true;
      const calendarStateWithoutImages = updatedDoors
        .filter(door => door.doorOpen)
        .map(door => door.number);
      setDoors(updatedDoors);
      localStorage.setItem("calendarState", JSON.stringify(calendarStateWithoutImages));
      console.log(doors[doorNumber -1].doorOpen);
      }
    }

  function christmasFlipDoor(doorNumber) {
    flipDoor(doorNumber);
    console.log("christmas flippy");
  }

  function closeDoors() {
    localStorage.clear();
    const closed = doors.map(door => {
      return {...door, doorOpen: false}
    });
    setDoors(closed);
    console.log(data);
    // window.location.reload(false);
  }

  // debugger;

  if (zoomed) {
    return (
      <div className = "zoomed-container" onClick = {()=> setZoomed(!zoomed)}>
        <img src={doors[currentDoor-1].image} onClick = {()=> setZoomed(!zoomed)}/>
      </div>
    )
  }

  // var Doors = data.map(Door);
  return (
    <div className="wrapper">
      <span className= "titles">
        <Title text="Advent Calendar " color="white" />
        <span className = "subheading">
          <Subheading text="Countdown to Christmas!" color="white" />
        </span>
      </span>
      <div className="calendar-container">
        {/* each of the elements inside doorData gets assigned to the door component as a property instead of writing them all down one by one */}
        {/* adding a unique key for each because that's what React prefers */}
        {doors.map(doorData => doorData.number === 25 ? null : <Door closedImage={Holly} flipDoor={flipDoor} key={doorData.number} {...doorData}/>)}
      </div>
      {/* {} are used for javascript objects  */}
      {/* but also {} are used to swap from html (JSX) mode to javascript mode when using React/JSX */}
      <div className = "last-door-wrapper">
        <div className= "last-door">
          {/* true is inside {} so that it isn't seen as a string */}            
            <Door number="25" image="https://placekitten.com/g/101/100" closedImage={ChristmasHolly} flipDoor={christmasFlipDoor} />
        </div>
        <div className = "close-door-wrapper">
          <button onClick={closeDoors}>Close Doors</button>
        </div>
      </div>
  </div>
  )
}

