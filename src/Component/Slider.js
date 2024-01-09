import React,{useState} from 'react'
import Slide1 from '../images/Slider1.png'
import Slide2 from '../images/Slider2.png'
import Slide3 from '../images/Slider3.png'

let i=0;
const Footer=()=>{
    
    const settings = {
        dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
      };

    let ArrImages=[Slide1,Slide2,Slide3]
    let [Src,SetSrc]=useState(ArrImages[0]);
    const NextImg=()=>{
     if(i>=2){i=-1}
     i++
     console.log(i)
     SetSrc(ArrImages[i])

    }
    return(
    <>
    <div className=' mt-72 h-auto py-28  ' >

      <div className=' text-center'>
        <p className=' text-xl text-gray-400 '>Our clients</p>
        <h1 className=' text-6xl text-gray-400'>Client Showcase</h1>

      </div>
      <div className='  h-60 mx-5  relative flex space-x-6 px-56 py-12 '>
        <button className=' font-bold text-2xl text-gray-400'>&#10094;</button>
        <div>
        <img src={Slide1} />
        </div>
        <div>
        <img src={Slide2} />
        </div>
        <div>
        <img src={Slide3} />
        </div>
        <button className=' font-bold text-2xl text-gray-400'>&#10095;</button> 


      </div>
      
      
      
      
      
      <div className='  text-center '>

           <span className=' inline-block bg-gray-400 w-4 h-4 rounded-3xl mr-3 '></span> 
           <span className=' inline-block bg-gray-400 w-4 h-4 rounded-3xl mr-3 '></span> 
           <span className=' inline-block bg-gray-400 w-4 h-4 rounded-3xl mr-3 '></span>  

      </div>           
    </div>
    </>
    )

}

export default Footer;