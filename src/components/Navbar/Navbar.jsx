import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'
import $ from 'jquery'

export default function Navbar() {

  const mystyle = {
    paddingBlock: '24px',
    lineheight: '20px'
  }
  const icon_border = {
    borderwidth: 2,
    bordercolor: 'black'
  }

  window.addEventListener('resize', function () {

    if ($('body').width()>750) {

      
      $('#icon_div').addClass('hidden')
      $('#nav_ul').removeClass('hidden')
      $('#nav_ul_2').slideUp(0)
    }
    else {
      $('#icon_div').removeClass('hidden')
      $('#nav_ul').addClass('hidden')

    }
  })

 

 
  function show_list() {
    $('#nav_ul_2').slideToggle(1000)
    $('#my_icon').toggleClass('border-4')
    

  }




  function modulate_padding() {
    document.querySelector('#back_div').style.paddingBlock = `${parseInt(document.querySelector('nav').style.paddingBlock) + parseInt(
      document.querySelector('nav').style.lineheight)-2}px`
  }
  function first_hide() {
    if (document.querySelector('body').offsetWidth >= 750) {
      document.querySelector('#icon_div').className += ' hidden '

    }
    else document.querySelector('#nav_ul').className += ' hidden '
  }
  useEffect(
    () => {
      modulate_padding()
     first_hide()
      $('#nav_ul_2').addClass('hidden')
    }, [])




  return (
    <>

      <nav className='fixed w-full transition-all duration-500  bg-[#2C3E50] z-20 ' style={mystyle}>

        <div className=" sm:container px-28  flex justify-between align-middle">
          <div>
            <div className={style.logo_word}>Start Framework</div>
            <div id='nav_ul_2' >
              <ul className={style.nav_ul_2}>
                <li><NavLink to={''}>About</NavLink></li>
                <li><NavLink to={'Contact'}>Contact</NavLink></li>
                <li><NavLink to={'Portfolio'}>Portfolio</NavLink></li>
              </ul>
            </div>
          </div>
          <div>
            <div id='icon_div' onClick={show_list} className={`flex justify-center`}><i id='my_icon' className={style.icon_style_itself + `   border-2 fa-solid  fa-bars`}></i></div>
            <div id='nav_ul' >
              <ul className={style.nav_ul}>
                <li><NavLink to={''}>About</NavLink></li>
                <li><NavLink to={'Contact'}>Contact</NavLink></li>
                <li><NavLink to={'Portfolio'}>Portfolio</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className='  w-full ' id='back_div' ></div>

    </>
  )
}
