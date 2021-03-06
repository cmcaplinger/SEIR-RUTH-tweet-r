import App from '../pages/App';
import Profile from '../pages/Profile';
import Tweet from '../pages/Tweet';

const routes = [
    {
		Component: Profile,
		key: 'Profile',
		path: '/Profile/:id'
    },
    {
		Component: Tweet,
		key: 'Tweet',
		path: '/Tweet/:id'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
