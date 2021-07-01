import React, {useState, useEffect} from 'react';
// import Holly from '../img/holly.png';
// import ChristmasHolly from '../img/holly-25.jpg';

function Door(props) {
	// TODO: This should be a component:
	//curly brackets inside the useState are a JSON object
	// const number = props.number;
	// const image = props.image;
	//line below is a better way of the two lines above
	const {number, image, doorOpen, flipDoor, closedImage} = props;
	// the way to set a component state in React
	// const savedDoorState = localStorage.getItem('Door'+number);
	//if the door is not open then savedDoorState gets the value undefined which is falsey but we are using strict === comparison to the string so it doesn't matter what it is as long as it isn't open
	// const [doorOpen, setDoorOpen] = React.useState(false);
	const [doorStyle, setDoorStyle] = React.useState({ backgroundImage: "url(" + closedImage + ")"});
	// ({ backgroundImage: "url(" + Holly + ")" });
	const [displayedNumber, setDisplayedNumber] = React.useState(number);
	// let doorStyle = { backgroundImage: "url(" + Holly + ")" };
	// let displayedNumber = number;
	console.log(props);

	// if ('Door'+number === 25) {
	// 	doorStyle = { backgroundImage: "url('../assets/img/holly-25.png')" };
	// }

	const doorClicked = () => {
		flipDoor(number);
		console.log(number);
	    //new Date is a built in method in javascript
	    // const currentDate = new Date();
	    // 
	    // if (currentDate.getDate() >= number) {
	    // 	flipDoor(number)
	    // 	console.log("clicked")
	    // 	// setDoorOpen(true);
	    // 	// localStorage.setItem('Door'+number, 'open');
	    // } 
	    // if (itsChristmas === true) {
	    // 	alert("It's Christmas!");
	    // }
	}

	//using states - they only run when the state is changed, so more efficient
	useEffect(
	  () => {
		if (doorOpen) {
			setDoorStyle({backgroundImage: "url(" + image + ")"});
			setDisplayedNumber(null);
			}
		else {setDoorStyle({backgroundImage: "url(" + closedImage + ")"});
			setDisplayedNumber(number);}
	    },
	  [doorOpen],
	);
	return <div className="Door" style={doorStyle} onClick={doorClicked}>{displayedNumber}</div>;
}

export default Door;