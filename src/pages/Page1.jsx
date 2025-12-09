import { replace, useNavigate } from 'react-router-dom';
import heartLogo from '../assets/Heart Logo.jpeg';
import '../css/Page1.css'
import { useState } from 'react'

const Page1 = () => {
    const [ala1, setala1] = useState(10000000);
    const [ala2, setala2] = useState(9900000);

    const navigate = useNavigate();

    const setLoveCountala1 = () => {
        setala1(ala1 + 100000);
    }
    const setLoveCountala2 = () => {
        setala2(ala2 + 100000);
    }

    return (
        <>
            <div className='container'>
                <div className='heading'>
                    <p className='date'>
                        <img className='img1' src={heartLogo} alt="" />
                        <span>29 December 2025 </span>
                        <img className='img1' src={heartLogo} alt="" />
                    </p>
                    <div className='loveCount'>
                        <div className='ala1'>
                            <p className='pala'>Argh Loves Aayu</p>
                            <p className='pala2'>{ala1}+</p>
                            <button className='btn' onClick={setLoveCountala1}>Objection? Press more</button>
                        </div>
                        <div className='ala2'>
                            <p className='pala'>Aayu Loves Argh</p>
                            <p className='pala2'>{ala2}+</p>
                            <button className='btn' onClick={setLoveCountala2}>Objection? Press more</button>
                        </div>
                    </div>
                </div>
                <button className='nxt_page1' onClick={()=>{navigate('/2')}}>
                    PROCEED TO NEXT PAGE
                </button>
            </div>
        </>
    )
}

export default Page1;