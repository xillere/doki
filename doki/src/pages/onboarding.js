import useState from 'react'
import Nav from "../components/nav"

const Onboarding = () => {


    const handleSubmit = () => {
        console.log('submitted')
    }

    const handleChange = () => {
        console.log('change')
    }
    return (
        <>
            <Nav logomin={true} show showModal={false} setShowModal={() => {}} 
            showModal={false}/>
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
                        value={""}
                        onChange={handleChange}/>

                        <label>birthday</label>
                        <div className="mult-input">
                        <input
                        id="dob_day"
                        type="number"
                        name="dob_day"
                        placeholder="DD"
                        required={true}
                        value={""}
                        onChange={handleChange}/>
                         <input
                        id="dob_month"
                        type="number"
                        name="dob_month"
                        placeholder="MM"
                        required={true}
                        value={""}
                        onChange={handleChange}/>
                        <input
                        id="dob_year"
                        type="number"
                        name="dob_year"
                        placeholder="YYYY"
                        required={true}
                        value={""}
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
                        checked={false}/>
                        <label htmlFor="man_gender_id">man</label>

                        <input
                        id="woman_gender_id"
                        type="radio"
                        name="gender_identity"
                        value="woman"
                        onChange={handleChange}
                        checked={false}/>
                        <label htmlFor="woman_gender_id">woman</label>
                        </div>

                        <label htmlFor="about">about me and what i watch</label>
                        <input id="about"
                        type="text"
                        name="about"
                        required={true}
                        placeholder="i indulge in slice if life"
                        value={""}
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