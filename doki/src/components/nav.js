import logo from '../images/doki_black.png'
import colourlogo from '../images/doki_colour.png'

const Nav = ({logomin, authtoken, setShowModal, showModal, setisSign}) => {

    const handleClick = () => {
        setShowModal(true)
        setisSign(false)
    }
    authtoken = true;//shows login on false
    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={logomin ? colourlogo : logo} alt=''/>
            </div>
            {!authtoken && !logomin && <button className="nav-button"
                onClick={handleClick}
                disabled={showModal}>log in</button>}
        </nav>
    )
}

export default Nav