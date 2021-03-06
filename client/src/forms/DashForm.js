import React, { useState } from "react";

const initInputs = {
  imgUrl: "",
  note: "",
  first: "",
  second: "",
  third: "",
  fourth: "",
  fifth: "",
  sixth: "",
  seventh: "",
  eighth: "",
  ninth: "",
  tenth: "",
  eleventh: "",
  twelfth: "",
}


export default function AddDashboardForm(props){

    const [inputs, setInputs] = useState(initInputs)
    const { addDashboard} = props


    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }


    function handleSubmit(e){
        e.preventDefault()
        addDashboard(inputs)
        setInputs(initInputs)
    }
    const {imgUrl, note, first, second, third,
         fourth,fifth,sixth,seventh,eighth,ninth,
         tenth,eleventh,twelfth} = inputs


         return(
                 <>
                <div className="dashForm">
            <center> <span>All fields are required</span> <br></br>
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
            First House:
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
   Second House:
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
    Third House:
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

    Fourth House:
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
 Fifth House:
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
    Sixth House:
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

    Seventh House:
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

    Eighth House:
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

    Ninth House:
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

   Tenth House:
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
    
Eleventh House:
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
    <button>Generate Dashboard</button>


                </form>
            </center>

</div>
</>



         )

}