import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./style/Landing.css"

const Landing = (props) => {
    let navigate = useNavigate()

    const [landingFormName, setLandingFormName] = useState("")
    props.setMotd("안녕하세요!")

    const landingFormSubmitHandler = (event) => {
        event.preventDefault()
        if (landingFormName !== "") {
            props.setUserName(landingFormName)
            props.setMotd("안녕하세요, " + landingFormName + "님!")
            navigate("/home")
        } else {
            alert("이름 똑바로 쓰세요.")
        }
    }

    return (
        <div className="Landing Wrap">
            <form className="LandingForm" onSubmit={landingFormSubmitHandler}>
                <div className="LandingFormContent">
                    <label>이름</label>
                    <input
                        value={landingFormName}
                        onChange={(e) => setLandingFormName(e.target.value)}
                        placeholder="이름을 입력하세요..."
                    />
                </div>
                <div className="LandingFormContent">
                    <button
                        className="Button PrimaryButton BigButton"
                        type="submit"
                    >
                        TODO-LIST 만들기
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Landing
