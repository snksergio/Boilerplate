import routes from './index';

const getRoute = name => {
  if (name) {
    const routeslist = [...routes];
    const routeItem = routeslist.find(route => route.name === name);
    return routeItem || null;
  }
  return null;
};

export default getRoute;
