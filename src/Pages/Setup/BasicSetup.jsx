import React from 'react'
import { useAppContext } from '../../context/AppContext'
import Nav2 from '../../Components/Nav2';
import { assets } from '../../assets/assets';

const BasicSetup = () => {
     const navItems = [
    { label: "1.Basic Setup", to: "/basic-setup" },
    { label: "2.Add training data", to: "/training-data" },
    { label: "3.Customize widget", to: "/customize-widget" }
  ];
    const {navigate} = useAppContext();
  return (
    <div>
        <Nav2 navItems={navItems} logo={assets.blacklogo}/>
       <div className="flex flex-col lg:flex-row justify-between gap-4 mt-5">

  {/* Right Column: Gradient Box */}
  <div className="relative lg:w-[580px] sm:w-[80%] h-[350px] rounded-2xl ml-20 mt-30">
    <h3 className='font-montserrat ml-10 text-sm mt-2'>Steps 1 of 3</h3>
    <h1 className='font-montserrat font-bold ml-10 text-2xl mt-2'>What would you like to name your bot?</h1>
    <h3 className='font-montserrat ml-10 text-md mt-2'>You can always change this later</h3>
   
    <div className="flex flex-col ml-10 mt-8">
  <h3 className="font-montserrat text-sm font-semibold">Bot Name</h3>
  <select
    className="border-2 border-[#6d7aff] px-2 py-1 focus:outline-none w-110"
  >
    <option value="">Select last name</option>
    <option value="smith">Smith</option>
    <option value="johnson">Johnson</option>
    <option value="williams">Williams</option>
    <option value="brown">Brown</option>
  </select>
</div>
   
   <button onClick={() => navigate("/training-data")} className='border-2 border-[#979ffa] mt-30 ml-10 w-30 h-10 rounded-full hover:scale-105'>Next</button>
  </div>

  {/* Right Column: Gray Box */}
<div className="lg:w-[540px] sm:w-[80%] h-[505px] rounded-2xl mr-20 overflow-hidden flex items-center justify-center">
  <img
    src={assets.rebot}
    alt="rebot"
    className="w-full h-250 object-contain"
  />
</div>


</div>
</div>
  )
}

export default BasicSetup