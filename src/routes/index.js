import Home from '../screens/Home';
import Main from '../screens/Explore/screens/Main';
import NoMatch from '../screens/NoMatch';

const routes = [
  {
    key: 1,
    path: '/',
    component: Home,
    exact: true,
    name: 'Home',
  },
  {
    key: 2,
    path: '/Explorer',
    component: Main,
    name: 'Explore',
  },
  {
    key: 3,
    path: '',
    component: NoMatch,
    name: 'NoMatch',
  },
];

export default routes;
