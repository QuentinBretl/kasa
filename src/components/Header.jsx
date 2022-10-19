import { useNavigate, useLocation, NavLink } from 'react-router-dom'
import {ReactComponent as Logo} from '../assets/LOGO.svg'

function Header() {


    let activeStyle = {
        textDecoration: "underline",
      };

    let activeClassName = "active"

    const navigate = useNavigate()
    const location = useLocation()
    const pathMatchRoute = (route) => {
        if(route === location.pathname){
            return true
        } else {
            return false
        }
    }

  return (
    <header className="navbar">
        <Logo width="180px"/>
        <nav className='navbarNav'>
            <ul className='navbarListItems'>
                <li className='navbarListItem'>
                <NavLink
                    to="/"
                    style={({ isActive }) => isActive ? activeStyle : undefined}
                >
                Accueil
                </NavLink></li>
                <li className='navbarListItem'>
                <NavLink
                    to="/a-propos"
                    className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                A Propos
                </NavLink></li>
            </ul>

        </nav>
    </header>
  )
}

export default Header