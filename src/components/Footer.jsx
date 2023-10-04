import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='mx-w-[1240] bg-[#2699fb] md:w-full  py-16 px-4 grid lg:grid-cols-3 gap-8 text-white'>
      <div >
        <h1 className='w-full text-3xl font-bold text-black'>Zep Skill_</h1>
        <p className='py-4'>The Zep Skill is World's Leading Organisation for training professionals. The Zep Skill provides training in 490+ locations in around 221+ countries, covering 3000 subjects with the following delivery methods:</p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>
      <div className=' lg:col-span-2 flex justify-between mt-4 md:mx-[60px] cursor-pointer'>
        <div>
          <h6 className='font-bold text-black md:mb-[10px]'>Solutions</h6>
          <ul>
            <li className='py-2 text-sl'>Analytics</li>
            <li className='py-2 text-sl'>Marketing</li>
            <li className='py-2 text-sl'>Commerce</li>
            <li className='py-2 text-sl'>Insights</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold text-black md:mb-[10px]'>Support</h6>
          <ul>
            <li className='py-2 text-sl'>Pricing</li>
            <li className='py-2 text-sl'>Documentation</li>
            <li className='py-2 text-sl'>Guides</li>
            <li className='py-2 text-sl'>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold text-black md:mb-[10px]'>Company</h6>
          <ul>
            <li className='py-2 text-sl'>About</li>
            <li className='py-2 text-sl'>Blog</li>
            <li className='py-2 text-sl'>Jobs</li>
            <li className='py-2 text-sl'>Press</li>
            <li className='py-2 text-sl'>Careers</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold text-black md:mb-[10px]'>Legal</h6>
          <ul>
            <li className='py-2 text-sl'>Claim</li>
            <li className='py-2 text-sl'>Policy</li>
            <li className='py-2 text-sl'>Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;