import React, { useEffect } from 'react'
import style from './Contact.module.css'
import { event } from 'jquery';


export default function Contact() {


  function move(e) {
    const input_ele = e.target;
    const ele=input_ele.parentNode.children[0]
    if (input_ele.value.length == 1 && e.key != 'Backspace') {
      const keyframes = [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-40px)' }
      ]
      const options = {
        duration: 1000,
        iterations: 1,
        fill: 'forwards'
      }
      ele.animate(keyframes, options)
     
    }
    else if (input_ele.value.length == 0 ||
      e.target!=input_ele
    ) {
      const keyframes = [
        { transform: 'translateY(-40px)' },
        { transform: 'translateY(0)' }
      ]
      const options = {
        duration: 1000,
        iterations: 1,
        fill: 'forwards'
      }
      ele.animate(keyframes, options)
    }
   

  }
  
  useEffect(()=>{
    
  })

  return (
    <>
      <h1 className={style.header_class} >conatct section</h1>
      <div className='flex justify-center items-center py-4 text-[#2C3E50] mb-10'>
        <div className='bg-[#2C3E50] h-1 w-32'> </div>
        <i className="fa-solid fa-star  text-xl mx-3"></i>
        <div className='bg-[#2C3E50] h-1 w-32'> </div>
      </div>
      <div className='w-full '>
        
         <div className='w-full flex  justify-center align-middle   relative my-10'>
         <div className='absolute  w-1/2 h-10  px-2 text-[#1abc9c] -z-10 rounded-lg moving_div'  id='M1' >userName :</div>
         <input type="text" className='h-10 w-1/2    px-2 focus:border-t-4 rounded-lg border-white outline-none bg-red-500 my_x'id='1' onKeyUp={move}  placeholder='user Name' />
         </div>
         <div className='w-full flex  justify-center align-middle   relative my-10'>
         <div className='absolute  w-1/2 h-10  px-2 text-[#1abc9c] -z-10 rounded-lg moving_div' id='M2' >userAge :</div>
         <input type="text" className='h-10 w-1/2    px-2 focus:border-t-4 rounded-lg border-white outline-none bg-red-500 my_x'id='2' onKeyUp={move} placeholder='user Name' />
         </div>
         <div className='w-full flex  justify-center align-middle   relative my-10'>
         <div className='absolute  w-1/2 h-10  px-2 text-[#1abc9c] -z-10 rounded-lg moving_div' id='M3' >userEmail :</div>
         <input type="email" className='h-10 w-1/2    px-2 focus:border-t-4 rounded-lg border-white outline-none bg-red-500 my_x'id='3' onKeyUp={move} placeholder='user Name' />
         </div>
         <div className='w-full flex  justify-center align-middle   relative my-10'>
         <div className='absolute  w-1/2 h-10  px-2 text-[#1abc9c] -z-10 rounded-lg moving_div' id='M4' >userPassword :</div>
         <input type="password" className='h-10 w-1/2    px-2 focus:border-t-4 rounded-lg border-white outline-none bg-red-500 my_x'id='4' onKeyUp={move} placeholder='user Name' />
         </div>
         <div className='w-full flex  justify-center align-middle   relative my-10'>
         <div className='w-1/2'>
         <button className='bg-[#30AD94] p-4 border-0 rounded-md'>sned message</button></div>
         </div>
         
        



      </div>
    </>
  )
}
