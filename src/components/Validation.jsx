import { useEffect, useState } from "react";
import '../css/Validation.css'
const Validation = ({ set_ret_value }) => {
    const [str, setStr] = useState("");
    useEffect(() => {
        alert("FILL THE CORRECT STATEMENT THAT AAYU TELLS AKSHI !!!")
    }, [])

    const handleOnChange = (e) => {
        console.log(e.key)
        setStr(e.target.value);
    }
    const handleOnKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleOnSubmit();
        }
    }
    const handleOnSubmit = () => {
        const string_to_check = str.toLowerCase();
        const correct_str = "ryaddu pyaddu tyaddu zinghi aur sab kush";
        if (correct_str === string_to_check) set_ret_value(1);
        else {
            setStr("");
            alert('INCORRECT, FILL AGAIN !!!')
        }
    }

    return (<>
        <div className="val_container">
            <textarea value={str} onKeyDown={handleOnKeyDown} onChange={handleOnChange} style={{ color: 'black', fontWeight: 'bolder', height: "10%", width: '50%', textAlign: 'center', fontSize: '30px' }} type="text" placeholder="AAYU MERI???" />
            <button className='val_btn' onClick={handleOnSubmit}>Submit</button>
        </div>
    </>)
}

export default Validation;