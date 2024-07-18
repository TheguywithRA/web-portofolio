import Achivement from './components/Achivement';
import Contact from './components/Contact';
import Main from './components/Main';
import Sidenav from './components/navbar';
import Summary from './components/Summary';
import Work from './components/Education';

function Layout() {
  return (
    <div className='bg-gradient-to-r from-gray-800 to-gray-900'>
      <Sidenav />
      <Main />
      <Summary />
      <Achivement />
      <Work />
    </div>
  );
}

export default Layout;
