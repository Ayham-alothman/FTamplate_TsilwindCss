import React from "react";
import S1 from '../images/News-card-1.png'
import S2 from '../images/New2-card-2.png'
import S3 from '../images/New3-card-3.png'
const News=()=>{
    return(<>
    <div className=" h-150 bg-gray-200 px-20 py-8 ">
        <div className=" text-center">
            <p className=" text-xl text-slate-900 font-light">Recent updates</p>
            <h1 className="text-5xl text-blue-950 font-bold">Featured Stories</h1>

        </div>
        <div className=" mt-5 grid grid-cols-3 px-32   ">
            <div className=" w-72 h-110 bg-white rounded-3xl">
                <div className="  mx-2 mt-2 rounded-3xl"> <img src={S1} /> </div>
                <div className=" text-center mt-8">
                    <h1 className=" text-3xl font-bold leading-10 text-slate-700 mb-2">Remote Working</h1>
                    <p className=" font-bold leading-5">Making it easier to connect with</p>
                    <p className="font-bold mb-4 ">every client worldwide</p>
                    <h1 className=" text-xl font-bold text-slate-700 opacity-70">Read More</h1>
                </div>
            
            </div>

            <div className=" w-72 h-110 bg-white rounded-3xl">
            <div className="  mx-2 mt-2 rounded-3xl"> <img src={S2} /> </div>
                <div className=" text-center mt-8">
                    <h1 className=" text-3xl font-bold leading-10 text-slate-700 mb-2">Google Rankings</h1>
                    <p className=" font-bold leading-5">We've ranked number one on</p>
                    <p className="font-bold mb-4 ">Google for multiple keywords. Read</p>
                    <h1 className=" text-xl font-bold text-slate-700 opacity-70">Read More</h1>
                </div>
            </div>
            <div className=" w-72 h-110 bg-white rounded-3xl">
            <div className="  mx-2 mt-2 rounded-3xl  pl-8"> <img src={S3} /> </div>
                <div className=" text-center mt-8">
                    <h1 className=" text-3xl font-bold leading-10 text-slate-700 mb-2">Communication</h1>
                    <p className=" font-bold leading-5">We've made our client support</p>
                    <p className="font-bold mb-4 ">services easy to access</p>
                    <h1 className=" text-xl font-bold text-slate-700 opacity-70">Read More</h1>
                </div>
            </div>
            
            
            
        </div>
    </div>
    
           </>)
}


export default News;
