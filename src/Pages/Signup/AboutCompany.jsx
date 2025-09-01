import React from 'react'
import Nav2 from '../../Components/Nav2'
import { assets } from '../../assets/assets'
import { useAppContext } from "../../context/AppContext";

const AboutCompany = () => {
  const navItems = [
    { label: "1.About You", to: "/signup" },
    { label: "2.About Your Company", to: "/about-company" },
    { label: "3.Your Usecases", to: "/usecases" }
  ];
    const { navigate } = useAppContext();
  return (
     <div>
        <Nav2 navItems={navItems} logo={assets.blacklogo}/>
       <div className="flex flex-col lg:flex-row justify-between gap-4 mt-5">

  {/* Right Column: Gradient Box */}
  <div className="relative lg:w-[580px] sm:w-[80%] h-[460px] rounded-2xl ml-20 mt-10">
    <h3 className='font-montserrat ml-10 text-sm mt-2'>Steps 2 of 3</h3>
    <h1 className='font-montserrat font-bold ml-10 text-2xl mt-2'>Tell Us About Your Company</h1>
    <h3 className='font-montserrat ml-10 text-md mt-2'>Share details about your company to customize your <br /> experience and receive your tailored recommendations</h3>
   
    <div className="flex flex-col ml-10 mt-4">
  <h3 className="font-montserrat text-sm font-semibold">Company Name?</h3>
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

   <div className="flex flex-col ml-10 mt-4">
  <h3 className="font-montserrat text-sm font-semibold">Select the number of employees</h3>
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

 <div className="flex flex-col ml-10 mt-4">
  <h3 className="font-montserrat text-sm font-semibold">What industry does your company operate in?</h3>
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

<div className="flex flex-col ml-10 mt-4">
  <h3 className="font-montserrat text-sm font-semibold">What department are you in?</h3>
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
   
   <button onClick={() => navigate("/signup")} className='border-2 border-[#979ffa] mt-3 ml-10 w-30 h-10 rounded-full hover:scale-105'>Back</button>
   <button onClick={() => navigate("/usecases")} className='bg-button mt-3 ml-50 w-30 h-10 rounded-full hover:scale-105'>Next</button>

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

export default AboutCompany