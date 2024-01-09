import React from "react";
import SImg from '../images/ImgSection.png'
const Section=()=>{
return(
    <>
    <div className=" my-2 ">
     <div className=" flex justify-between items-center font-serif">
       <div><img src={SImg} />  </div>
       <div className=" px-32 py-32">  
        <h2 className=" text-2xl my-5">Multipurpose landing template</h2>
        <h1 className="text-6xl text-sky-800">Beautifully</h1>
        <h1 className="text-6xl mb-4 text-sky-800 ">simple, code.</h1>
        <p className="text-xl">Codelander is a beautifully simple, clean and lightweight landing page template for all types of businesses, with bold and bright colours.</p>
        <div className=" my-5 pl-16"><button className=" bg-blue-500 h-10 w-32 rounded-xl text-white hover:text-red-900">Learn More</button></div>
       </div>
     </div>
    </div>
    
    </>
)
}

export default Section;