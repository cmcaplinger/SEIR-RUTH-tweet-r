import React from 'react';
import App from '../pages/App';
import Profile from '../pages/Profile';
import ShowTweet from '../pages/ShowTweet';

const routes = [
    {
		Component: Profile,
		key: 'Profile',
		path: '/profile'
    },
    {
		Component: Popular,
		key: 'Popular',
		path: '/popular'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
