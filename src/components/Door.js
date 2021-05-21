import React from 'react';

function Door(props) {
	// TODO: This should be a component:
	//curly brackets inside the useState are a JSON object
	// const number = props.number;
	// const image = props.image;
	//line below is a better way of the two lines above
	const {number, image, itsChristmas} = props;
	// the way to set a component state in React
	const savedDoorState = localStorage.getItem('Door'+number);
	//if the door is not open then savedDoorState gets the value undefined which is falsey but we are using strict === comparison to the string so it doesn't matter what it is as long as it isn't open
	const [doorOpen, setDoorOpen] = React.useState(savedDoorState === 'open');

	let doorStyle = { backgroundImage: "url('../assets/img/holly.png')" };

	console.log(props);

	// if ('Door'+number === 25) {
	// 	doorStyle = { backgroundImage: "url('../assets/img/holly-25.png')" };
	// }

	const doorClicked = () => {
	    //new Date is a built in method in javascript
	    const currentDate = new Date();
	    if (currentDate.getDate() >= number) {
	    	setDoorOpen(true);
	    	localStorage.setItem('Door'+number, 'open');
	    } 
	    if (itsChristmas === true) {
	    	alert("It's Christmas!");
	    }
	}

	if (doorOpen) {
		doorStyle = {backgroundImage: "url(" + image + ")"};
	}

	return <div className="Door" style={doorStyle} onClick={doorClicked}>{number}</div>;
}

export default Door;