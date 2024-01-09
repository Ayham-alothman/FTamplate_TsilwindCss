import React from "react";
import Img1 from'../images/strategy-1.png'
import Img2 from'../images/strategy-2.png'
import Img3 from'../images/strategy-3.png'
import Img4 from'../images/strategy-4.png'

const Strategy=()=>{
return(<>
<div className=" h-80 my-5" >
    <div className=" flex justify-between items-center px-20 font-serif text-xl ">
        <div className="mx-2 px-2">
            <img src={Img1} className=" pl-16 mb-3"/>
            <h1 className=" pl-16 mb-3 text-3xl text-sky-400">Strategy </h1>
            <p>We'll work with you to develop the right strategy</p>
        </div>
        <div className="mx-2 px-2">
            <img src={Img2} className=" pl-16 mb-3"/>
            <h1 className=" pl-12 mb-3 text-3xl text-sky-400">Automation</h1>
            <p>Work synchronization and automated services</p>
        </div>
        <div className="mx-2 px-2">
            <img src={Img3} className=" pl-16 mb-3"/>
            <h1 className=" pl-12 mb-3 text-3xl text-sky-400">Deployment</h1>
            <p>Dedicated servers to deploy and test applications</p>
        </div>
        <div className="mx-2 px-2">
            <img src={Img4} className=" pl-16 mb-3"/>
            <h1 className=" pl-16 mb-3 text-3xl text-sky-400">Education</h1>
            <p>Stay informed on all our tools and technologies</p>
        </div>
    </div>
</div>


</>)

}

export default Strategy;
