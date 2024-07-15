import logo from '../images/doki_black.png'
import colourlogo from '../images/doki_colour.png'

const Nav = ({logomin, authtoken}) => {


    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={logomin ? colourlogo : logo} alt=''/>
            </div>
            {!authtoken && !logomin && <button className="nav-button">log in</button>}
        </nav>
    )
}

export default Nav