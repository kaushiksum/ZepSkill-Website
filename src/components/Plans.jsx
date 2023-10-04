import React from "react";

const Plans = () => {


    return(
     <div className="py-[100px] px-2">

        <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" /> */}
                    <h2 className='text-2xl font-bold text-center py-8'>Web development</h2>
                    <p className='text-center text-4xl font-bold'>$140</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Learn with Experts </p>
                        <p className='py-2 border-b mx-8'>In 9 months, finish your Full Stack Developer course. </p>
                        <p className='py-2 border-b mx-8'>There are additional classes for trails.</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
            {/* <div className="shadow-xl  h-[500px] my-4 hover:scale-105 duration-500">

            </div> */}
            {/* <div  className="shadow-xl  h-[500px] my-4 bg-gray-100 hover:scale-105 duration-500"></div> */}
            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    {/* <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" /> */}
                    <h2 className='text-2xl font-bold text-center py-8'>Learn with Experts</h2>
                    <p className='text-center text-4xl font-bold'>$100</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Learn with SEO Experts </p>
                        <p className='py-2 border-b mx-8'>In 5 months, finish your Digital Marketing course.</p>
                        <p className='py-2 border-b mx-8'>There are additional classes for trails.</p>
                    </div>
                    <button className='bg-[#2699fb] text-[#fff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
            {/* <div  className="shadow-xl  h-[500px] my-4 hover:scale-105 duration-500"></div> */}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
                    <h2 className='text-2xl font-bold text-center py-8'>App Development</h2>
                    <p className='text-center text-4xl font-bold'>$150</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Learn with Experts </p>
                        <p className='py-2 border-b mx-8'>In 10 months, finish your App Development course.</p>
                        <p className='py-2 border-b mx-8'>There are additional classes for trails.</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
                </div>
        </div>
     </div>
    )
}

export  default Plans;