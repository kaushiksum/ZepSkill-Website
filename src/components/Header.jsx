import React, { useState } from "react";


import {AiOutlineMenu} from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"


const Header = () => {
     const[toggle, settoggle] = useState(false);

    return(


      <div className="bg-[#2699fb] p-4">

        <div className="max-w-[1240px] py-[12px] items-center  flex justify-between  mx-auto">

            <div className="text-3xl font-bold">
                Zep Skill_
            </div>

            {

                toggle ? <AiOutlineClose onClick={() => settoggle(!toggle)}  className="text-white text-2xl md:hidden block"/>  
                :
                <AiOutlineMenu onClick={() => settoggle(!toggle)} className="text-white text-2xl md:hidden block"/>
                 

            }

{/* 
            <AiOutlineMenu onClick={() => settoggle(!toggle)} className="text-white text-2xl md:hidden block"/>
            <AiOutlineClose onClick={() => settoggle(!toggle)}  className="text-white text-2xl md:hidden block"/> */}


            <ul className=" hidden md:flex text-white gap-10 cursor-pointer text-[19px]">
                <li>
                    Home
                </li>

                <li>
                    Company
                </li>

                <li>
                    Resources
                </li>

                <li>
                    About
                </li>

                <li>
                    Contact
                </li>
            </ul>


   {/* responsive mesnu */}

            <ul className={` duration-300 md:hidden w-full h-screen text-black fixed bg-white  top-[92px] text-[20px] 
            
            ${toggle ? 'left-[0]' : 'left-[-100%]'}
            `}>
                <li className="p-5">
                    Home
                </li>

                <li className="p-5">
                    Company
                </li>

                <li className="p-5">
                    Resources
                </li>

                <li className="p-5">
                    About
                </li>

                <li className="p-5">
                    Contact
                </li>
            </ul>

        </div>
      </div>
    )


}

export default Header;