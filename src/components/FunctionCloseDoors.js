import React from 'react';

function FunctionCloseDoors() {
	function clickHandler() {
		localStorage.clear();
		window.location.reload(false);

	}
	return (
		<div>
			<button onClick={clickHandler}>Close Doors</button>
		</div>
		)
}

export default FunctionCloseDoors