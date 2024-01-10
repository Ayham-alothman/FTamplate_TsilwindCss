import React from "react";
import S from '../images/pha.webp'

const Nav=()=>{
return(
    <>  
    <div className="h-16 bg-gray-200 fixed w-full top-0  ">
   
      <div className="  flex justify-between items-center  px-20       ">
           <div className=" py-1"><img src={S} alt="not found" className="h-14  rounded-3xl  "/></div>  
          <div > 
              <ul  className=" invisible md:visible ">
                <li>
                  <a href=""className=" text-lg font-bold mr-10 font-mono  text-l hover:text-blue-800">Home</a>
                  <a href=""className=" text-lg font-bold mr-10 font-mono  text-l hover:text-blue-800">Servies</a>
                  <a href=""className=" text-lg font-bold mr-10 font-mono  text-l hover:text-blue-800">Pricing</a>
                  <a href=""className=" text-lg font-bold mr-10 font-mono  text-l hover:text-blue-800">News</a>
                </li>
                
              
              </ul> </div>
          <div className=" font-mono   bg-white   rounded-xl  h-10 w-auto px-4 py-1 text-blue-500  hover:bg-blue-700  "> <button className="   text-xl leading-8    ">Signup</button>  </div>
      </div>
 



    </div>
    </>
)
}
export default Nav;