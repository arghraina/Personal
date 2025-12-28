import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Validation from "../components/Validation";
import '../css/Page4.css'
const Page4 = ()=>{
    const navigate = useNavigate();
    const [ret_value , set_ret_value] = useState(0);
    const [checked1, setChecked1] = useState("☐");
    const [checked2, setChecked2] = useState("☐");
    const [checked3, setChecked3] = useState("☐");
    const [checked4, setChecked4] = useState("☐");
    const handleClick1 = ()=>{
        if(checked1 === "☐") setChecked1("☑");
        else setChecked1("☐");
    }
    const handleClick2 = ()=>{
        if(checked2 === "☐") setChecked2("☑");
        else setChecked2("☐");
    }
    const handleClick3 = ()=>{
        if(checked3 === "☐") setChecked3("☑");
        else setChecked3("☐");
    }
    const handleClick4 = ()=>{
        if(checked4 === "☐") setChecked4("☑");
        else setChecked4("☐");
    }
    const handleSubmit = ()=>{
        navigate('/5');
    }
    return(<>
        {(ret_value === 0) && 
        <Validation set_ret_value={set_ret_value}></Validation>}
        {(ret_value === 1) && 
        <div className="pg4_cont">
            <div className="letter">
                <h3 style={{textAlign: 'center' , fontSize: '40px', textDecoration: 'wavy underline', fontFamily:'cursive', color: '#6f0063'}}>A Note from Akshu</h3>
                <div style = {{fontFamily: "sans-serif", fontWeight: 'normal' ,fontSize: '25px', textAlign: 'left', paddingLeft: '10%', paddingRight: '10%'}}>
                Aayu, I want you to go back in time when in September 2023, I texted you for the first time. The joy you had at that time, the same I feel every single day just thinking that I have you as my girlfriend, as my soulmate, as my best friend, and soon as my wife.<br/>
                    2 years back, on 29th December, we both didn't know anything about each other, but it didn't take us long to get an understanding for life. We fought, we laughed, we lived together, we ate together, we slept together, we cried together, like all the humanly possible emotions, we both have seen TOGETHER.<br/>
                    I just want to let you know, how special you are to me. Whenever we fouught, and you told to break up, the next few moments would liiterally seem like hell to me. A subtle pain kept killing me inside, just thinking about how can I leave you. I can't , I literally can't.<br/>
                    Aayu, I will never be able to express you how special you are to me. You will always ask why do I love you, and my answer will be, I just do. Maybe, some past life love, or something spiritual, but yes, I love you. <br/>
                    <span style={{color: "Red"}}>I love you So So So Much Baby and I know you love me too, but Yes I gaurantee, not more than me for sure. And yes, no one and literally no one can love you as much as I do.</span>
                </div>
            </div>
            <div className="letter">
                <h3 style={{textAlign: 'center' , fontSize: '40px', textDecoration: 'wavy underline', fontFamily:'cursive', color: '#6f0063'}}>Promises for lifetime:</h3>
                <div style = {{marginLeft: '10%',width:'70%',backgroundColor:'#f1c1ff',fontFamily: "sans-serif", fontWeight: 'normal' ,fontSize: '25px', textAlign: 'left', padding: '2%', paddingRight:'8%', borderRadius:'10%', boxShadow: '1px 1px 10px 5px pink'}}>
                    <div className="vows"><span className="btn_chk" onClick={handleClick1} style={{cursor: 'pointer'}}>{checked1}</span><span style={{fontWeight:'bolder'}}>Aayu, you will always stay by my side. Whatever happens to me, in the best and in the worst, everytime you will be with me.</span></div><hr/>
                    <div className="vows"><span className="btn_chk" onClick={handleClick2} style={{cursor: 'pointer'}}>{checked2}</span><span style={{fontWeight:'bolder'}}>Aayu, you will always stay by my side no matter how worse the fights get, no matter how much we argue, but we both will never ever block each other anywhere, and will be each other's safe space.</span></div><hr/>
                    <div className="vows"><span className="btn_chk" onClick={handleClick3} style={{cursor: 'pointer'}}>{checked3}</span><span style={{fontWeight:'bolder'}}>We both will listen to each other properly, what the other one wants to convey, clarify it, and again keep nurturing our love and relationship.</span></div><hr/>
                    <div className="vows"><span className="btn_chk" onClick={handleClick4} style={{cursor: 'pointer'}}>{checked4}</span><span style={{fontWeight:'bolder'}}>We will marry each other, we will have cute two babies-boy or girl whatever god gives-and we will live together and set a pradigm that A RELATIONSHIP LIKE OURS MIGHT NEVER EVER EXIST AGAIN.</span></div>
                </div>
                {(checked1 === "☑" && checked2 === "☑" && checked3 === "☑" && checked4 === "☑")?<button onClick={handleSubmit} style={{margin: '5%', marginLeft: '24%', height: '3%', width: '50%', borderRadius: '10px', cursor: "pointer", backgroundColor: "pink", fontSize: '20px', fontWeight: 'bolder'}}>Continue</button> : <button style={{margin: '5%', marginLeft: '24%', height: '3%', width: '50%', borderRadius: '10px', cursor: "pointer", backgroundColor: "#be9aa0", fontSize: '20px', fontWeight: 'normal'}}>Continue</button>}
            </div>   
        </div>}
    </>)
}

export default Page4;
