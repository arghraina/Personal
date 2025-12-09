import '../css/Page2.css'
import { useNavigate } from 'react-router-dom'
const Page2 = ()=>{
    const navigate = useNavigate();
    return (<>
        <div className="pg2_container">
            <div className='top1'>
                <h3 style={{color: 'purple', textDecoration: 'double underline'}}>Why 29th is Special?</h3>
                The date 29th is very special to both of us. We started with the date 29th, i.e, 29th of December, 2023. Yes, it was Aayu who confronted, but the love was never one sided. We both had soft corners for each other, and all of it combined together and we got together finally on 29th December, 2023.<br></br>
                29th has further been very special like we met first time after 5 months of long distance on 29th May, 2024. Thereafter, we met in Pune on 29th November, 2024. And, the most special day, 29th of June, is my Aayu's birthday. So, 29th always will hold importance in lives of both of us. <br></br>
                I wish and pray, that we get married on 29th of some month, so that this date becomes even more special for both of us.<br></br>
                <button onClick={()=>{navigate('/3')}} className='btn_pg2'>First read below and then proceed to next page</button>
            </div>
            <span style={{backgroundColor: 'rgb(162 60 255)', width: '40%', textAlign: 'center', borderRadius: '10px'}} className='tmln'>TIMELINE:</span>
            <div className='grid_container'>
                <div className='grid_boxes'>
                    <p>5th September 2004</p>
                    <p style={{textAlign: 'center' , fontSize: '20px', color: 'purple'}}>Argh Raina Born at 20:04 IST.</p>
                    </div>
                <div className='grid_boxes' style={{backgroundColor: 'rgb(255 193 207)', boxShadow: '1px 1px 20px 10px #ffb600'}}>
                    <p>29th June 2005</p>
                    <p style={{textAlign: 'center' , fontSize: '20px', color: 'purple'}}>Birth of the most elegant and graceful girl in the world, my life, my Aayu, at 06:44 IST.</p>
                </div>
                <div className = "grid_boxes">
                    <p>2021</p>
                    <p style={{textAlign: 'center' , fontSize: '20px', color: 'purple'}}>Joined Coaching and luckily we both landed in the same center.</p>
                </div>
                <div className = "grid_boxes">
                    <p>December 2023</p>
                    <p style={{textAlign: 'center' , fontSize: '20px', color: 'purple'}}>The months where it all started. We talked , we met and we became each others'.
                    </p>
                    </div>
                    <div className='grid_boxes' style={{backgroundColor: 'rgb(255 193 207)', boxShadow: '1px 1px 20px 10px #ffb600'}}>
                        <p>29th December 2023</p>
                        <p style={{textAlign: 'center' , fontSize: '20px', color: 'purple'}}>The day when Aayu was mine and I was hers' for all the lifetimes and for eternity. This is and will be the best day of my Life for sure.
                    </p>
                    </div>
                    <div className='grid_boxes' style={{backgroundColor: 'rgb(255 193 207)', boxShadow: '1px 1px 20px 10px #ffb600'}}>
                        <p>29th May 2024</p>
                        <p style={{textAlign: 'center' , fontSize: '20px', color: 'purple'}}>Our relationship started with a long distance, yet we made thorugh it, understanding each other building trust, and finally got to meet on this very very special day. 
                    </p>
                    </div>
                    <div className = "grid_boxes">
                    <p>14th September 2024</p>
                    <p style={{textAlign: 'center' , fontSize: '20px', color: 'purple'}}>We met first time in Pune. Living together with each other for the first time, but had no awkwardness, no apprehension, just because of the trust we both built in just few months.</p>
                </div>
                <div className='grid_boxes' style={{backgroundColor: 'rgb(255 193 207)', boxShadow: '1px 1px 20px 10px rgb(244 0 255)'}}>
                        <p>29th December 2024</p>
                        <p style={{textAlign: 'center' , fontSize: '20px', color: 'purple'}}>Small small fights but lots and lots of love brough us here. Yay, we celebrated our fiirst anniversary together.
                    </p>
                    </div>
                    <div className='grid_box_special' style={{backgroundColor: 'rgb(255 193 207)', boxShadow: '1px 1px 20px 10px rgb(244 0 255)'}}>
                        <p style={{textAlign: 'center'}}>20th November 2025,<br></br> 15:09 IST</p>
                        <p style={{color: 'rgb(255 0 0)', fontWeight: 'bolder' , fontSize: '20px'}}>This box is from my side Bubu.</p>
                        <p style={{textAlign: 'center' , fontSize: '20px', color: 'purple'}}>The entire 2025 starting from Summer Holidays to going to college and then with the intern season, I believe, has been the toughest phase of our life. There have been continuous fights between you and me. Amongst all this, I called you something, I was never supposed to say you. And, your behaviour with me deteriorated over time. So many times, we blocked each other, broke up, never ending silences and all the love felt going into vain. <br></br>
                        But after all these fights, came this day and I know you must be happy, your family must be happy, but how happy I was, you were never able to see. I was miles away from you, not talking to you, not getting your time, yet a single satisfaction cured it all, that now my Aayu is free of all the STRESSES, all the ANXIETIES, all the MISERIES, and finally she proved that she is much much better than her SISTERS, BROTHER, and yes better then even ME. She proved herself superior to all of those, whom her nears and dears gave her examples of, taunted her and what else , I can't say.
                        Your each tear and each fear, everything came to a hault, and yes you did it Aayu, YOU FREAKIN DID IT.
                    </p>
                    </div>
            </div>
        </div>
    </>
    )
}

export default Page2;