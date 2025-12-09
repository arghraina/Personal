import '../css/Page3.css'
import img1 from "../assets/Memories/IMG-20240916-WA0010.jpg"
import img2 from "../assets/Memories/IMG-20240916-WA0025.jpg"
import img3 from "../assets/Memories/IMG-20240916-WA0030.jpg"
import img4 from "../assets/Memories/IMG-20240916-WA0031.jpg"
import img5 from "../assets/Memories/IMG-20240916-WA0040.jpg"
import img6 from "../assets/Memories/VID-20240916-WA0013.mp4"
import img7 from "../assets/Memories/VID-20240916-WA0036.mp4"
import img8 from "../assets/Memories/VID-20241201-WA0010.mp4"
import img9 from "../assets/Memories/IMG-20240916-WA0034.jpg"
import img10 from "../assets/Memories/IMG-20240919-WA0015.jpg"
import img11 from "../assets/Memories/IMG-20240919-WA0024.jpg"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Page3 = () => {
    const [toggleHide, setToggleHide] = useState(0);

    const navigate = useNavigate();
    const handleOnClick = () => {
        setToggleHide(toggleHide === 0 ? 1 : 0);
        console.log(toggleHide);
    }
    return (<>
        <div className="cont_pg3">
            <p style={{ textAlign: 'center', color: 'black', backgroundColor: 'azure', width: "30%", height: "35px", borderRadius: '10px', fontSize: '20px', fontWeight: 'bolder', fontFamily: 'cursive' }}>Let's dive into some Sweet Memories:</p>
            <div className='img_cont_3'>
                <div className='img_3'><img style={{ height: "100%", width: "100%" }} src={img1} alt="" /></div>
                <div className='img_3'><img style={{ height: "100%", width: "100%" }} src={img2} alt="" /></div>
                <div className='img_3'><img style={{ height: "100%", width: "100%" }} src={img3} alt="" /></div>
                <div className='img_3'><img style={{ height: "100%", width: "100%" }} src={img4} alt="" /></div>
                <div className='img_3'><img style={{ height: "100%", width: "100%" }} src={img5} alt="" /></div>
                <div className='img_3'><img style={{ height: "100%", width: "100%" }} src={img9} alt="" /></div>
                <div className='img_3'><img style={{ height: "100%", width: "100%" }} src={img10} alt="" /></div>
                <div className='img_3'><img style={{ height: "100%", width: "100%" }} src={img11} alt="" /></div>
            </div>
            <span onClick={handleOnClick} style={{ borderRadius: "10px", textAlign: 'center', width: '20%', backgroundColor: 'lavender', fontSize: "20px", cursor: 'pointer', boxShadow: '1px 1px 10px 1px black' }}>Only Adults 18+ warning...</span>
            {toggleHide === 1 && <div className='img_cont_3'>
                <div className='img_3'>
                    <video
                        style={{ height: "100%", width: "100%" }}
                        src={img6}
                        controls
                        autoPlay
                    />
                </div>
                <div className='img_3'>
                    <video
                        style={{ height: "100%", width: "100%" }}
                        src={img7}
                        controls
                        autoPlay
                    />
                </div>
                <div className='img_3'>
                    <video
                        style={{ height: "100%", width: "100%" }}
                        src={img8}
                        controls
                        autoPlay
                    />
                </div>
            </div>}
            <span onClick={()=>{navigate('/4')}} style={{ marginTop: '1%', borderRadius: "10px", textAlign: 'center', width: '20%', backgroundColor: 'lavender', fontSize: "20px", cursor: 'pointer', boxShadow: '1px 1px 10px 1px black' }}>Next Page...</span>
        </div>
    </>)
}

export default Page3;