import React from 'react';
import Styled from 'styled-components';

const Menu = Styled.ul`
color: red;
`
const BlueMenu = Styled(Menu)`
color:blue;
`
const Header = () => {
	return (
		<BlueMenu>
			<li>Home</li>
			<li>About</li>
			<li>Profile</li>
		</BlueMenu>
		)
}

export default Header