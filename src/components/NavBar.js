import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../router/routes';

const NavBar = props => {
	return (
		<nav class="NavBar">
			<div class="logo-wrapper">
  				<div id="logo"/>
			</div>
			<div class="menu-toggle">
				<input type="checkbox"/>
				<span></span>
				<span></span>
				<ul id="menu">
					{props.routes.filter(item => item.key !== "Tweet").map(({ key, path }) => (
						<li>
							<Link id="menu-item" key={key} to={path}>
								{key}
							</Link>
						</li>
					))}	
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;


