import NavBar from './NavBar/NavBar'; 
import logo from '../../img/logo.svg';
import Profile from '../Header/Profile/Profile'; 
import {links} from '../App/DUMMY_DATA'; 

const Header: React.FC = () => {
  
  return(
    <header className="header">
      <a href="/">
        <img className="header__logo" src={logo} alt="youtube-logo" />
      </a>
      <NavBar linkData={links} />
      <Profile picture="https://avatars.githubusercontent.com/u/53487916?s=60&v=4"/>
    </header>
  );
}; 
export default Header; 