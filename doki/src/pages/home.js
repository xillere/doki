import Nav from "../components/nav"
import Authmodal from "../components/auth"
import { useState } from 'react'

const Home = () => {

    const [showModal, setShowModal] = useState(false)
    const [isSign, setisSign] = useState(true)

    const authtoken = false
    const handleClick = () =>{
        console.log("clicked")
        setShowModal(true)
        setisSign(true)
    }
    return (
        <div className="overlay">
        <Nav logomin={false} 
        setShowModal={setShowModal} showModal={showModal}
        setisSign={setisSign}/>
        <div className="Home">
            <h1>it might skip a beat</h1>
            <button className="primary-button" onClick={handleClick}>
                {authtoken ? 'sign out' : 'create account'}
            </button>

            {showModal && (
                <Authmodal setShowModal={setShowModal} isSign={isSign}/>
            )}
        </div>
        </div>
    )
}

export default Home