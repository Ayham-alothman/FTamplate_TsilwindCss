import React from "react";
import S from '../images/pha.webp'

const Nav=()=>{
return(
    <>  
    <div className="h-16 bg-gray-200">
   
      <div className="  flex justify-between items-center  px-20       ">
           <div className=" py-1"><img src={S} alt="not found" className="h-14  rounded-3xl  "/></div>  
          <div > 
              <ul >
                <li>
                  <a href=""className="mr-10 font-mono  text-l hover:text-blue-800">home</a>
                  <a href=""className="mr-10 font-mono  text-l hover:text-blue-800">servies</a>
                  <a href=""className="mr-10 font-mono  text-l hover:text-blue-800">any</a>
                  <a href=""className="mr-10 font-mono  text-l hover:text-blue-800">any</a>
                </li>
                
              
              </ul> </div>
          <div className=" font-mono   bg-white   rounded-xl  h-10 w-20 px-4 py-1 text-blue-500 hover:bg-blue-700 "> <button className=" pt-1  ">Signup</button>  </div>
      </div>
 



    </div>
    </>
)
}
export default Nav;