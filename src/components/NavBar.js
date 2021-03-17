import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../router/routes';

const NavBar = props => {
	return (
		<nav className="NavBar">
			{props.routes.filter(item => item.key !== "Tweet").map(({ key, path }) => (
				<Link key={key} to={path}>
					{key}
				</Link>
			))}
		</nav>
	);
};

export default NavBar;