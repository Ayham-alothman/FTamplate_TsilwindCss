import React from "react";
import S from '../images/pricing-section-true.png'

const Pricing=()=>{
    return(<>
      <div className=" my-10 h-dvh ">
        <div className="  ">
            <div className="  py-7 text-center">
            <h1 className=" text-6xl font-bold text-sky-800 mb-2">Pricing</h1>
            <p className=" text-gray-600 leading-8 font-mono text-xl">Offer multiple packages or monthly subscriptions? Why not showcase your</p>
            <p className=" text-gray-600 leading-8 font-mono text-xl">featured price plans here, bold and beautifully.</p>

            </div>
            
            <div className="px-20 h-dvh grid grid-cols-3 gap-5">
                
                <div className=" bg-gray-100 w-96 h-4/5 rounded-xl text-center mt-10">
                   
                    <div className=" py-10">
                      <h1 className=" text-6xl text-sky-800 font-bold m-1">$199</h1>
                      <p className=" text-xl text-white bg-sky-400 mx-40 rounded-3xl font-light mb-6">Basic</p>
                      <p className=" text-xl leading-8 font-semibold">Starter plan with all the</p>
                      <p className=" text-xl leading-8 font-semibold mb-10">basics included</p>
                      
                      <div>
                          
                      <div className="   " >   <div className="flex items-center px-24"><img  src={S} className=" mr-2 w-5  "  /> <p className=" text-sm leading-10  ">Core Business System</p></div>    </div>
                      <div className="   " >   <div className="flex items-center px-24"><img  src={S} className=" mr-2 w-5  "  /> <p className=" text-sm leading-10  ">Team Management</p></div>    </div>
                      <div className="   " >   <div className="flex items-center px-24"><img  src={S} className=" mr-2 w-5  "  /> <p className=" text-sm leading-10  ">Dual Infrastructure</p></div>    </div>
    
                      </div >
                      <button className=" bg-sky-700 w-24 h-10 mt-8 rounded-3xl text-white hover:bg-red-500">Enquire</button>

                    </div>

                                        

                </div>



                <div className=" bg-gray-100 w-96 h-5/5  rounded-xl text-center border-dashed border-4 border-sky-700 ">
                   
                    <div className=" py-10">
                      <h1 className=" text-6xl text-sky-800 font-bold m-1">$199</h1>
                      <p className=" text-xl text-white bg-sky-400 mx-40 rounded-3xl font-light mb-6">Basic</p>
                      <p className=" text-xl leading-8 font-semibold">Starter plan with all the</p>
                      <p className=" text-xl leading-8 font-semibold mb-10">basics included</p>
                      
                      <div>
                          
                      <div className="   " >   <div className="flex items-center px-24"><img  src={S} className=" mr-2 w-5  "  /> <p className=" text-sm leading-10  ">Core Business System</p></div>    </div>
                      <div className="   " >   <div className="flex items-center px-24"><img  src={S} className=" mr-2 w-5  "  /> <p className=" text-sm leading-10  ">Team Management</p></div>    </div>
                      <div className="   " >   <div className="flex items-center px-24"><img  src={S} className=" mr-2 w-5  "  /> <p className=" text-sm leading-10  ">Dual Infrastructure</p></div>    </div>
    
                      </div >
                      <button className=" bg-sky-700 w-24 h-10 mt-8 rounded-3xl text-white hover:bg-red-500">Enquire</button>

                    </div>

                                        

                </div>

                <div className=" bg-gray-100 w-96 h-4/5 rounded-xl text-center mt-10">
                   
                    <div className=" py-10">
                      <h1 className=" text-6xl text-sky-800 font-bold m-1">$199</h1>
                      <p className=" text-xl text-white bg-sky-400 mx-40 rounded-3xl font-light mb-6">Basic</p>
                      <p className=" text-xl leading-8 font-semibold">Starter plan with all the</p>
                      <p className=" text-xl leading-8 font-semibold mb-10">basics included</p>
                      
                      <div>
                          
                      <div className="   " >   <div className="flex items-center px-24"><img  src={S} className=" mr-2 w-5  "  /> <p className=" text-sm leading-10  ">Core Business System</p></div>    </div>
                      <div className="   " >   <div className="flex items-center px-24"><img  src={S} className=" mr-2 w-5  "  /> <p className=" text-sm leading-10  ">Team Management</p></div>    </div>
                      <div className="   " >   <div className="flex items-center px-24"><img  src={S} className=" mr-2 w-5  "  /> <p className=" text-sm leading-10  ">Dual Infrastructure</p></div>    </div>
    
                      </div >
                      <button className=" bg-sky-700 w-24 h-10 mt-8 rounded-3xl text-white hover:bg-red-500">Enquire</button>

                    </div>

                                        

                </div>




            </div>
            
         
        </div>
      </div>
    </>)
}

export default Pricing;
