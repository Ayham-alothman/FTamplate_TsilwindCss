import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



const Footer =()=>{
    return(<>
    <div className=" bg-blue-950 h-72 px-20  flex">
      <div className=" w-full h-44   mx-auto my-auto   ">
        <div className="flex justify-between px-3">
          <div>
            <h1 className=" font-extrabold text-5xl text-white mb-3" >code.</h1>
            <p className=" text-xl text-white font-light leading-7">A beautiful landing page </p>
            <p className=" text-xl text-white font-light leading-7">template by Codefest.</p>
          </div>
          <div>
            <h1 className="font-extrabold text-4xl text-white mb-3">About</h1>
            <p className=" text-xl text-white font-light leading-7">We like to do business</p>
            <p className=" text-xl text-white font-light leading-7">at Codelander HQ to our</p>
            <p className=" text-xl text-white font-light leading-7">clients' satisfaction.</p>
          </div>
          <div>
            <h1 className="font-extrabold text-4xl text-white mb-3">Contact Us</h1>
            <p className=" text-xl text-white font-light leading-7">123 Business Centre</p>
            <p className=" text-xl text-white font-light leading-7">London SW1A 1AA</p>
            <p className=" text-xl text-white font-light leading-7 mt-1">0123456789</p>
            <p className=" text-xl text-white font-light leading-7">mail@domain.com</p>
          </div>
          <div>
            <h1 className="font-extrabold text-4xl text-white mb-3">Contact Us</h1>
            
            <div className=" flex space-x-7 ml-5 mt-5">

            <FaFacebook className=" text-white text-2xl"/>
            <FaInstagramSquare className=" text-white text-2xl"/>
            <FaTwitter className=" text-white text-2xl"/>
            </div>

            
           
          </div>


        </div>
        
        
        
        
        
        <div className=" text-center mt-4 text-sm text-white">
        <p>© 2020 <span>Codefest™</span> . All Rights Reserved.</p>
      </div>
       

      </div>
      

    </div>
    </>)
}
export default Footer;