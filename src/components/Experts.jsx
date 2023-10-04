import React from "react";
import laptop from "../assets/image/B193.jpg"

const Expert = () => {


    return (

        <div className=" max-w-[1240px] p-2 mx-auto  my-10  md:grid grid-cols-2">
            <div className="  col-span-1 md:w-[80%] text-center  ">
                <img src={laptop} alt="" className="inline" />
            </div>
            <div className="  col-span-1 flex flex-col justify-center ">
                <h1 className="text-[#00df9a] font-bold my-2">LEARN FROM EXPERTS</h1>
                <p className="my-2 text-justify">The Zeep Skill is Globally Recognised as the Market Leader in providing Web Development/Design Training courses to organisations and professionals. Our "Web Development Expert Team" comprises over 34 leading professionals with over 14 years of industry-recognised experience developing both client-side and server-side web applications. Our specialised instructors have developed unique teaching styles to help aspiring candidates gain the ability to design complete websites and web applications.</p>
                <button className=" w-[30%]  bg-black text-white p-3 rounded md:ml-[200px] mt-[10px]  ">Get started</button>
            </div>
            
        </div>
    )
}

export default Expert;