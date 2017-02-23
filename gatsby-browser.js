import ReactGA from 'react-ga';
ReactGA.initialize('UA-92510509-1');

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};