import logo from '../../logo.svg'
import './styles.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    
    return(
        <div className = 'navbar-container'>
            <div>
                <img width={100} src={logo} alt='logo'></img>
            </div>

            <div>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
            <div><CartWidget></CartWidget></div>
            <div>
                <button>Acceso</button>
            </div>
        </div>

    )
}

export default NavBar;