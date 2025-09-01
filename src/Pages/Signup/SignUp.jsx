import React from 'react'
import Nav2 from '../../Components/Nav2'
import { assets } from '../../assets/assets'
import { useAppContext } from "../../context/AppContext";

const SignUp = () => {
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
    <h3 className='font-montserrat ml-10 text-md'>Setup your profile in 3 steps!</h3>
    <h3 className='font-montserrat ml-10 text-sm mt-2'>Steps 1 of 3</h3>
    <h1 className='font-montserrat font-bold ml-10 text-2xl mt-2'>Welcome to Mecha Innovation</h1>
    <h3 className='font-montserrat ml-10 text-md mt-2'>Let's get to know you better to personalize your experience.</h3>
    <div className="flex gap-10 mt-2">
  {/* First Name */}
  <div className="flex flex-col ml-10">
    <h3 className="font-montserrat text-sm font-semibold">First Name</h3>
    <input
      className="border-2 border-[#6d7aff] px-2 py-1 focus:outline-none"
      type="text"
    />
  </div>

  {/* Last Name */}
  <div className="flex flex-col">
    <h3 className="font-montserrat text-sm font-semibold">Last Name</h3>
    <input
      className="border-2 border-[#6d7aff] px-2 py-1 focus:outline-none"
      type="text"
    />
  </div>
</div>
   
    <div className="flex flex-col ml-10 mt-4">
  <h3 className="font-montserrat text-sm font-semibold">What best describe your role?</h3>
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
  <h3 className="font-montserrat text-sm font-semibold">How did you hear about us?</h3>
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
  <h3 className="font-montserrat text-sm font-semibold">How soon do you paln to deploy your Bot?</h3>
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
   
   <button onClick={() => navigate("/about-company")} className='border-2 border-[#979ffa] mt-5 ml-10 w-30 h-10 rounded-full hover:scale-105'>Next</button>

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

export default SignUp