import {NavBarData} from '../../App/Interfaces'; 


const NavBar: React.FC<NavBarData> = props => {
  const {linkData} = props; 
  const navBarLinks = linkData.map(link => (
    <a 
      className="nav-bar__link" 
      href={link.url} 
      key={Math.random().toString()}>
        {link.title}
      </a>
  ));
  return(
    <nav className="nav-bar">
      {navBarLinks}
    </nav>
  ); 
};
export default NavBar;