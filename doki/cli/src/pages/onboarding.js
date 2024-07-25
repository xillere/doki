import {useState} from 'react'
import Nav from "../components/nav"
import {useCookies} from 'react-cookie'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Onboarding = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [formData, setFormData] = useState({
        user_id: cookies.UserId,
        first_name:'',
        dob_day:'',
        dob_month:'',
        dob_year:'',
        gender_identity:'man',
        email:cookies.Email,
        url:'',
        about:'',
        matches: []
    })
    let navigate = useNavigate()
    const handleSubmit = async (e) => {
        console.log('submitted')
        e.preventDefault()
        try {
            const response = await axios.put('http://localhost:8000/user', {formData})
            console.log(response)
            const success = response.status === 200
            if (success) navigate('/dashboard')
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name] : value
        }))
    }

    console.log(formData)
    return (
        <>
            <Nav logomin={true} showModal={false} setShowModal={() => {}}/>
            <div className="onboarding">
                <h2>yosh!! let's get you started ~</h2>
                <form onSubmit={handleSubmit}>
                    <section>
                    <label htmlFor="url">upload a photo</label>
                    <input
                    type="url"
                    name="url"
                    id="url"
                    onChange={handleChange}
                    required={true}
                    />
                    <div className="photo-container">
                        {formData.url && <img src={formData.url} alt="profile"></img>}
                    </div>
                    </section>
                    <section>
                        <label htmlFor="first_name">first name</label>
                        <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        placeholder="first name"
                        required={true}
                        value={formData.first_name}
                        onChange={handleChange}/>

                        <label>birthday</label>
                        <div className="mult-input">
                        <input
                        id="dob_day"
                        type="number"
                        name="dob_day"
                        placeholder="DD"
                        required={true}
                        value={formData.dob_day}
                        onChange={handleChange}/>
                         <input
                        id="dob_month"
                        type="number"
                        name="dob_month"
                        placeholder="MM"
                        required={true}
                        value={formData.dob_month}
                        onChange={handleChange}/>
                        <input
                        id="dob_year"
                        type="number"
                        name="dob_year"
                        placeholder="YYYY"
                        required={true}
                        value={formData.dob_year}
                        onChange={handleChange}/>
                        </div>

                        <label>Gender</label>
                        <div className="mult-input">
                        <input
                        id="man_gender_id"
                        type="radio"
                        name="gender_identity"
                        value="man"
                        onChange={handleChange}
                        checked={formData.gender_identity === 'man'}/>
                        <label htmlFor="man_gender_id">man</label>

                        <input
                        id="woman_gender_id"
                        type="radio"
                        name="gender_identity"
                        value="woman"
                        onChange={handleChange}
                        checked={formData.gender_identity === 'woman'}/>
                        <label htmlFor="woman_gender_id">woman</label>
                        </div>

                        <label htmlFor="about">about me and what i watch</label>
                        <input id="about"
                        type="text"
                        name="about"
                        required={true}
                        placeholder="i indulge in slice if life"
                        value={formData.about}
                        onChange={handleChange}/>

                        <input
                        type="submit"
                        />
                    </section>
                </form>
            </div>
        </>
    )
}

export default Onboarding