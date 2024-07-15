import Nav from "../components/nav"
import { useState } from 'react'

const Home = () => {

    const [showModal, setShowModal] = useState(false)

    const authtoken = false
    const handleClick = () =>{
        console.log("clicked")
    }
    return (
        <div className="overlay">
        <Nav logomin={false} authtoken={authtoken}/>
        <div className="Home">
            <h1>it might skip a beat</h1>
            <button className="primary-button" onClick={handleClick}>
                {authtoken ? 'sign out' : 'create account'}
            </button>
        </div>
        </div>
    )
}

export default Home