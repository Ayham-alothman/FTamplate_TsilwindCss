import React,{useRef,useState} from "react";
import SImg from '../images/services-header.png'
let Switch =0;
let Switch1 =0;
const Services=()=>{
    
    let [Paraone,SetPara]= useState('');
    let [Paraone2,SetPara2]= useState('')
    const EPOne=()=>{console.log(Switch)
        if(Switch==0){Switch=1;SetPara('Some information on your web design and development services can go here. A few lines should do the trick. ');}
        else if(Switch==1){SetPara('');Switch=0}
           }
    const EPTwo=()=>{console.log(Switch1)
     if(Switch1==0){Switch1=1;SetPara2(`More information on your application development services can go here, too. There's plenty of space available for you.`);}
     else if(Switch1==1){SetPara2('');Switch1=0}
        }

    return(<>
    <div className=" h-dvh px-20">
       <div className=" flex justify-between items-center">
        <div className=" ml-5 font-serif pb-40 my-10 mx-8 w-3/5 mt-20">
            <h3 className=" text-4xl text-sky-800">Our services</h3>
            <h1 className=" text-5xl text-sky-800 mb-4">Solving Problems</h1>
            <h6 className=" text-2xl mb-5">This is a great section to introduce your company and showcase your featured services.</h6>
            <button className=" mb-2 bg-sky-800 rounded-2xl text-white text-xl  w-full h-12" onClick={(e)=>{EPOne()}}>Website Design</button>
            <p className=" text-gray-500 text-xl mb-3" >{Paraone}</p>
            <button className=" mb-2 bg-sky-800 rounded-2xl text-white text-xl  w-full h-12" onClick={(e)=>{EPTwo()}} >Application Development </button>
            <p className=" text-gray-500 text-xl mb-3">{Paraone2}</p>
        
        
        </div>

        <div>
            <img src={SImg} /> 
        </div> 
       
       </div> 
    </div>
    </>)
}

export default Services;