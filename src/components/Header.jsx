import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/LOGO.svg';

function Header() {
  let activeStyle = {
    textDecoration: 'underline',
  };

  let activeClassName = 'active';

  return (
    <header className='navbar'>
      <div className='header-container'>
        <Logo width='180px' />
        <nav className='navbarNav'>
          <ul className='navbarListItems'>
            <li className='navbarListItem'>
              <NavLink
                to='/'
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                end
              >
                Accueil
              </NavLink>
            </li>
            <li className='navbarListItem'>
              <NavLink
                to='/a-propos'
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                A Propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
