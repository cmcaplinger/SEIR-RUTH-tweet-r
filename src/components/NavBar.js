import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../router/routes';

const NavBar = props => {
	return (
		<nav className="NavBar">
			<div class="menu">
				<div class="logo-wrapper">
  				<div id="logo"></div>
			</div>
			<div class="menu-wrapper">
				<div class="hamburger-menu">
					<input type="checkbox"/>
					{props.routes.filter(item => item.key !== "Tweet").map(({ key, path }) => (
						<Link key={key} to={path}>
							{key}
						</Link>
			))}			
			</div>
			</div>
			</div>

		</nav>
	);
};

export default NavBar;

{/* <nav role="navigation">
  <div id="menuToggle">

    <input type="checkbox" />
    
    <span></span>
    <span></span>
    <span></span>
    
    <ul id="menu">
      <a href="#"><li>Home</li></a>
      <a href="#"><li>About</li></a>
      <a href="#"><li>Info</li></a>
      <a href="#"><li>Contact</li></a>
      <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
    </ul>
  </div>
</nav> */}