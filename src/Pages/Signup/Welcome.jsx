import React from 'react'
import Nav2 from '../../Components/Nav2'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'

const Welcome = () => {
    const {navigate} = useAppContext();
  return (
    <div>
        <Nav2 logo={assets.blacklogo}/>

        <div className='border w-[400px] h-[350px] mt-15 ml-110'>

        </div>
        <button onClick={()=>navigate("/basic-setup")} className='bg-black text-white font-montserrat w-40 h-10 rounded-full mt-5 ml-140 hover:scale-105'>Get Started</button>
    </div>
  )
}

export default Welcome