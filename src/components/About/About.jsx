import React from 'react'
import style from './About.module.css'

export default function About() {
  return (
    <div className={style.grand_pa}>
      <div>
<div><h1 className={style.header_style}>about component</h1></div>
<div className={style.icon_div}>
   <div className='h-1 w-28 bg-white '></div>
   <i className="fa-solid fa-star text-white"></i>
   <div className='h-1 w-28 bg-white'></div>
</div>
<div className='flex flex-wrap'>
  <div className={style.p_style}><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
  <div className={style.p_style}><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
</div>
      </div>
    </div>
  )
}
