import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'

const Authmodal = ({setShowModal, isSign}) => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [conpassword, setConPassword] = useState(null)
    const [error, setError] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    let navigate = useNavigate()

    console.log(email, password, conpassword)
    const handleClick = () => {
        setShowModal(false)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if(isSign && (password !== conpassword)) {
                setError('passwords need to be th same')
                return
            }

            const response = await axios.post(`http://localhost:8000/${isSign ? 'signup' : 'login'}`, {email, password})

            setCookie('UserId', response.data.userId)
            setCookie('AuthToken', response.data.token)

            const success = response.status === 201 

            if (success && isSign) navigate('/onboarding')
            if (success && !isSign) navigate('/dashboard')

        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>✖</div>
            <h2>{isSign ? 'hajimemashita!!' : 'okaeri!!'}</h2>
            <p></p>
            <form onSubmit={handleSubmit}>
                <input type="email" id="email" name="email" placeholder="email"
                required={true} onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password" id="password" name="password" placeholder="password"
                required={true} onChange={(e) => setPassword(e.target.value)}
                />
                {isSign && <input type="password" id="passwordcon" name="passwordcon" placeholder="confirm password"
                required={true} onChange={(e) => setConPassword(e.target.value)}
                />}
                <br/>
                <input className="sec-button" type="submit"/>
                <p>{error}</p>
            </form>

        </div>
    )
}

export default Authmodal