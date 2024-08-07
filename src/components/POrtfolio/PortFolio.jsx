import React, { useEffect } from 'react'
 import $, { event } from 'jquery'
 import style from './PortFolio.module.css'
              

export default function Portfolio() {

   function hide_img(){
    document.querySelector('#img_div').addEventListener('click',(e)=>{
      
      $('#img_div').addClass('hidden')
      
    })
   }
  
 function stoprog(e){
  document.querySelector('#xyz').addEventListener('click',function(e){
     e.stopPropagation()
  })
  
 }
  function show_ele(){
   
    let eles=document.querySelectorAll('.my_x')
    for(let i=0;i<6;i++){
      eles[i].addEventListener('click',(e)=>{

        
        document.querySelector('#displayed_img').src=e.currentTarget.children[0].src

        $('#img_div').removeClass('hidden')
      })
    }
   
  }
 
 
  useEffect(()=>{
   show_ele()
   hide_img()
   stoprog()
  })
  
 
  
  return (
    <>
 
   <div className=' w-full h-full pt-11'>
    <h1 className={style.header_class}>portfolio component</h1>
    <div className='flex justify-center items-center py-4 text-[#2C3E50]'>
<div className='bg-[#2C3E50] h-2 w-20'> </div>
<i className="fa-solid fa-star  text-xl mx-3"></i>
<div className='bg-[#2C3E50] h-2 w-20'> </div>
    </div>
    <div className='flex flex-wrap justify-center items-center'>
     
     
      <div className={`${style.main_div} my_x`} id='1' >
      <img src="/src/assets/poert1.png"  className='rounded-xl  w-full' alt=""   />
      <div className='absolute w-full h-full p-8  top-0 left-0 '>
        <div className={` ${style.hover_div}`} >
        <i className="fa-solid fa-plus text-4xl sm:text-6xl  md:text-8xl text-white"></i>
        </div>
      </div>
      </div>
      <div className={`${style.main_div} my_x`} id='2' >
      <img src="/src/assets/port3.png"  className='rounded-xl  w-full' alt=""   />
      <div className='absolute w-full h-full p-8  top-0 left-0 '>
        <div className={` ${style.hover_div}`} >
        <i className="fa-solid fa-plus text-4xl sm:text-6xl  md:text-8xl text-white"></i>
        </div>
      </div>
      </div>
      <div className={`${style.main_div} my_x`}  id='3'>
      <img src="/src/assets/port3.png"  className='rounded-xl  w-full' alt=""   />
      <div className='absolute w-full h-full p-8  top-0 left-0 '>
        <div className={` ${style.hover_div}`} >
        <i className="fa-solid fa-plus text-4xl sm:text-6xl  md:text-8xl text-white"></i>
        </div>
      </div>
      </div>
      <div className={`${style.main_div} my_x`} id='4' >
      <img src="/src/assets/port3.png"  className='rounded-xl  w-full' alt=""   />
      <div className='absolute w-full h-full p-8  top-0 left-0 '>
        <div className={` ${style.hover_div}`} >
        <i className="fa-solid fa-plus text-4xl sm:text-6xl  md:text-8xl text-white"></i>
        </div>
      </div>
      </div>
      <div className={`${style.main_div} my_x`} id='5' >
      <img src="/src/assets/poert1.png"  className='rounded-xl  w-full' alt=""   />
      <div className='absolute w-full h-full p-8  top-0 left-0 '>
        <div className={` ${style.hover_div}`} >
        <i className="fa-solid fa-plus text-4xl sm:text-6xl  md:text-8xl text-white"></i>
        </div>
      </div>
      </div>
      <div className={`${style.main_div} my_x`} id='6' >
      <img src="/src/assets/port2.png"  className='rounded-xl  w-full' alt=""   />
      <div className='absolute w-full h-full p-8  top-0 left-0 '>
        <div className={` ${style.hover_div}`} >
        <i className="fa-solid fa-plus text-4xl sm:text-6xl  md:text-8xl text-white"></i>
        </div>
      </div>
      </div>
     
     
      
    </div>
   </div>
    <div className=' w-full h-full flex justify-center items-center  fixed top-0 bg-[#0000ff66]  z-10 hidden'   id='img_div'>

      <div className=' w-96 h-96 '  id='xyz'  ><img src='/src/assets/port3.png' alt="" id='displayed_img'  className='w-full h-full object-cover '
      /></div>
    </div>
 


    </>
  )
}
