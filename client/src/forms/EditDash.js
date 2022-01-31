import React, { useState, useContext } from "react"
import { UserContext } from "../context/UserProvider.js"

export default function EditDash(props) {

    const initInputs = {
        imgUrl: props.imgUrl ||"",
        note:  props.note ||"",
        first: props.first || "",
        second: props.second || "",
        third: props.third || "",
        fourth: props.fourth|| "",
        fifth: props.fifth|| "",
        sixth: props.sixth || "",
        seventh: props.seventh || "",
        eighth:  props.eighth ||"",
        ninth:  props.ninth||"",
        tenth:  props.tenth ||"",
        eleventh: props.eleventh || "",
        twelfth:  props.twelfth ||"",
    }
    const [inputs, setInputs] = useState(initInputs)
    const { editDashboard, getUserDashboard } = useContext(UserContext)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))

    }

    function handleSubmit(e){
        e.preventDefault()
        editDashboard(inputs, props._id)
        setInputs(initInputs)
        getUserDashboard()
        props.setEditToggle(prevState => !prevState)
    }
    
    const {imgUrl, note, first, second, third,
         fourth,fifth,sixth,seventh,eighth,ninth,
         tenth,eleventh,twelfth} = inputs

    return (
        <form onSubmit={handleSubmit}>

        ImgUrl:
        <input 
        type="text"
        name="imgUrl"
        value={imgUrl}
        onChange={handleChange}
        placeholder="enter your imgUrl"
        />
        <br/>
        Note:
        <input
        type="text"
        name="note"
        value={note}
        onChange={handleChange}
        placeholder="enter any notes"
        />
        <br/>
        If you would like to generate a list of your houses:<br/>
        First:
        <select onChange={handleChange} value ={first} type="first" id="first"  name="first" >
        <option >Houses</option>
<option value='Aries'>Aries</option>
<option value='Taurus'>Taurus</option>
<option value='Gemini'>Gemini</option>
<option value='Cancer'>Cancer</option>
<option value='Leo'>Leo</option>
<option value='Virgo'>Virgo</option>
<option value='Libra'>Libra</option>
<option value='Scorpio'>Scorpio</option>
<option value='Sagittarius'>Sagittarius</option>
<option value='Capricorn'>Capricorn</option>
<option value='Aquarius'>Aquarius</option>
<option value='Pisces'>Pisces</option>
</select>
<br/>
Second:
        <select onChange={handleChange} value ={second} type="second" id="second"  name="second" >
        <option >Houses</option>
<option value='Aries'>Aries</option>
<option value='Taurus'>Taurus</option>
<option value='Gemini'>Gemini</option>
<option value='Cancer'>Cancer</option>
<option value='Leo'>Leo</option>
<option value='Virgo'>Virgo</option>
<option value='Libra'>Libra</option>
<option value='Scorpio'>Scorpio</option>
<option value='Sagittarius'>Sagittarius</option>
<option value='Capricorn'>Capricorn</option>
<option value='Aquarius'>Aquarius</option>
<option value='Pisces'>Pisces</option>
</select>
<br/>
Third:
        <select onChange={handleChange} value ={third} type="third" id="third"  name="third" >
        <option >Houses</option>
<option value='Aries'>Aries</option>
<option value='Taurus'>Taurus</option>
<option value='Gemini'>Gemini</option>
<option value='Cancer'>Cancer</option>
<option value='Leo'>Leo</option>
<option value='Virgo'>Virgo</option>
<option value='Libra'>Libra</option>
<option value='Scorpio'>Scorpio</option>
<option value='Sagittarius'>Sagittarius</option>
<option value='Capricorn'>Capricorn</option>
<option value='Aquarius'>Aquarius</option>
<option value='Pisces'>Pisces</option>
</select>
<br/>

Fourth:
        <select onChange={handleChange} value ={fourth} type="fourth" id="fourth"  name="fourth" >
        <option >Houses</option>
<option value='Aries'>Aries</option>
<option value='Taurus'>Taurus</option>
<option value='Gemini'>Gemini</option>
<option value='Cancer'>Cancer</option>
<option value='Leo'>Leo</option>
<option value='Virgo'>Virgo</option>
<option value='Libra'>Libra</option>
<option value='Scorpio'>Scorpio</option>
<option value='Sagittarius'>Sagittarius</option>
<option value='Capricorn'>Capricorn</option>
<option value='Aquarius'>Aquarius</option>
<option value='Pisces'>Pisces</option>
</select>
<br/>
Fifth:
        <select onChange={handleChange} value ={fifth} type="fifth" id="fifth"  name="fifth" >
        <option >Houses</option>
<option value='Aries'>Aries</option>
<option value='Taurus'>Taurus</option>
<option value='Gemini'>Gemini</option>
<option value='Cancer'>Cancer</option>
<option value='Leo'>Leo</option>
<option value='Virgo'>Virgo</option>
<option value='Libra'>Libra</option>
<option value='Scorpio'>Scorpio</option>
<option value='Sagittarius'>Sagittarius</option>
<option value='Capricorn'>Capricorn</option>
<option value='Aquarius'>Aquarius</option>
<option value='Pisces'>Pisces</option>
</select>
<br/>
Sixth:
        <select onChange={handleChange} value ={sixth} type="sixth" id="sixth"  name="sixth" >
        <option >Houses</option>
<option value='Aries'>Aries</option>
<option value='Taurus'>Taurus</option>
<option value='Gemini'>Gemini</option>
<option value='Cancer'>Cancer</option>
<option value='Leo'>Leo</option>
<option value='Virgo'>Virgo</option>
<option value='Libra'>Libra</option>
<option value='Scorpio'>Scorpio</option>
<option value='Sagittarius'>Sagittarius</option>
<option value='Capricorn'>Capricorn</option>
<option value='Aquarius'>Aquarius</option>
<option value='Pisces'>Pisces</option>
</select>
<br/>

Seventh:
        <select onChange={handleChange} value ={seventh} type="seventh" id="seventh"  name="seventh" >
        <option >Houses</option>
<option value='Aries'>Aries</option>
<option value='Taurus'>Taurus</option>
<option value='Gemini'>Gemini</option>
<option value='Cancer'>Cancer</option>
<option value='Leo'>Leo</option>
<option value='Virgo'>Virgo</option>
<option value='Libra'>Libra</option>
<option value='Scorpio'>Scorpio</option>
<option value='Sagittarius'>Sagittarius</option>
<option value='Capricorn'>Capricorn</option>
<option value='Aquarius'>Aquarius</option>
<option value='Pisces'>Pisces</option>
</select>
<br/>

Eighth:
        <select onChange={handleChange} value ={eighth} type="eighth" id="eighth"  name="eighth" >
        <option >Houses</option>
<option value='Aries'>Aries</option>
<option value='Taurus'>Taurus</option>
<option value='Gemini'>Gemini</option>
<option value='Cancer'>Cancer</option>
<option value='Leo'>Leo</option>
<option value='Virgo'>Virgo</option>
<option value='Libra'>Libra</option>
<option value='Scorpio'>Scorpio</option>
<option value='Sagittarius'>Sagittarius</option>
<option value='Capricorn'>Capricorn</option>
<option value='Aquarius'>Aquarius</option>
<option value='Pisces'>Pisces</option>
</select>
<br/>

Ninth:
        <select onChange={handleChange} value ={ninth} type="ninth" id="ninth"  name="ninth" >
        <option >Houses</option>
<option value='Aries'>Aries</option>
<option value='Taurus'>Taurus</option>
<option value='Gemini'>Gemini</option>
<option value='Cancer'>Cancer</option>
<option value='Leo'>Leo</option>
<option value='Virgo'>Virgo</option>
<option value='Libra'>Libra</option>
<option value='Scorpio'>Scorpio</option>
<option value='Sagittarius'>Sagittarius</option>
<option value='Capricorn'>Capricorn</option>
<option value='Aquarius'>Aquarius</option>
<option value='Pisces'>Pisces</option>
</select>
<br/>

Tenth:
        <select onChange={handleChange} value ={tenth} type="tenth" id="tenth"  name="tenth" >
        <option >Houses</option>
<option value='Aries'>Aries</option>
<option value='Taurus'>Taurus</option>
<option value='Gemini'>Gemini</option>
<option value='Cancer'>Cancer</option>
<option value='Leo'>Leo</option>
<option value='Virgo'>Virgo</option>
<option value='Libra'>Libra</option>
<option value='Scorpio'>Scorpio</option>
<option value='Sagittarius'>Sagittarius</option>
<option value='Capricorn'>Capricorn</option>
<option value='Aquarius'>Aquarius</option>
<option value='Pisces'>Pisces</option>
</select>
<br/>

Eleventh:
        <select onChange={handleChange} value ={eleventh} type="eleventh" id="eleventh"  name="eleventh" >
        <option >Houses</option>
<option value='Aries'>Aries</option>
<option value='Taurus'>Taurus</option>
<option value='Gemini'>Gemini</option>
<option value='Cancer'>Cancer</option>
<option value='Leo'>Leo</option>
<option value='Virgo'>Virgo</option>
<option value='Libra'>Libra</option>
<option value='Scorpio'>Scorpio</option>
<option value='Sagittarius'>Sagittarius</option>
<option value='Capricorn'>Capricorn</option>
<option value='Aquarius'>Aquarius</option>
<option value='Pisces'>Pisces</option>
</select>
<br/>
Twelfth:
        <select onChange={handleChange} value ={twelfth} type="twelfth" id="twelfth"  name="twelfth" >
        <option >Houses</option>
<option value='Aries'>Aries</option>
<option value='Taurus'>Taurus</option>
<option value='Gemini'>Gemini</option>
<option value='Cancer'>Cancer</option>
<option value='Leo'>Leo</option>
<option value='Virgo'>Virgo</option>
<option value='Libra'>Libra</option>
<option value='Scorpio'>Scorpio</option>
<option value='Sagittarius'>Sagittarius</option>
<option value='Capricorn'>Capricorn</option>
<option value='Aquarius'>Aquarius</option>
<option value='Pisces'>Pisces</option>
</select>
<br/>
<button>Complete  Edit</button>


            </form>
    )
}