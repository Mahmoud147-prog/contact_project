import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={style.footer_class} >
      
      <div className={style.main_div}>
        <div className={style.div}>
        <h1 className={style.heading_style}>LOCATION</h1>
        <p className='py-3'>2215 John Daniel Drive</p>
        <p className='py-3'>Clark, MO 65243</p>
        </div>
        <div className={style.div}>
        <h1 className={style.heading_style}>AROUND THE WEB</h1>
        <div>
        <i className={`fa-brands fa-facebook ${style.icon_style}`}></i>
        <i className={`fa-brands fa-twitter ${style.icon_style}`}></i>
        <i className={`fa-brands fa-linkedin ${style.icon_style}`}></i>
        <i className={`fa-solid fa-globe ${style.icon_style}`}></i>
        </div>
        </div>
        <div className={style.div}>
        <h1 className={style.heading_style}>ABOUT FREELANCER</h1>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>

      </div>
      <div className='w-full bg-[#1A252F] py-3 px-2'><p>Copyright © Your Website 2021</p></div>
      
      
       </footer>
  )
}
