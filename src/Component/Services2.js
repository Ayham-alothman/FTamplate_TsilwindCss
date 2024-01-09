import React from "react";
import S from '../images/services-sales-header.png'
const Services2=()=>{
    return(<>
    <div className=" h-dvh">
        <div className=" flex justify-between  items-center px-20 pt-20">
            <div className=" w-2/5"><img src={S}/></div>

            <div className=" w-2/5 pr-7 mr-10 font-light mt-20">
            <h3 className=" font-bold text-4xl text-red-600 mb-2 ">Our services</h3>
            <h1 className=" font-bold text-6xl text-red-600 mb-2 ">Sales Growth</h1>
            <p className=" leading-8  text-xl text-gray-900 ">You can talk about your secondary services 
                here, or maybe promote
             your excellent customer service approach. Always grab your website visitors' attention.</p>
            <div className=" h-24 mt-5"><button className=" bg-red-600  my-3 w-2/5 mx-20 h-12 rounded-2xl text-white font-mono hover:bg-sky-600    ">View Pricing</button></div>
            </div> 
          


        </div>
    </div>
    
    </>)
}
export default Services2;