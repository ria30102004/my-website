import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const page = () => {
  return (
    <>
    <header>
      <div class='container container-nav'>
        <div class='title'>
    <h1>RA</h1>
    </div>
    <nav>
      <ul>
        <li class="res" className=''><a href="#" className=''>Resume</a></li>
        <li><a href="#"><FontAwesomeIcon icon={faGithub} className='h-10 w-10'></FontAwesomeIcon></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faLinkedin} className='h-10 w-10'></FontAwesomeIcon></a></li>
      </ul>
    </nav>
    </div>
</header>

    <div className='flex flex-row content-center flex-nowrap h-1/4'>
      <div  className='text-8xl font-bold' class='text'><p>I create <b className='font-semibold ml-4' > playful</b></p>
      <p className='mt-3'>experiences.</p></div>
      <div className=''><img src="https://c0mpli.github.io/personalwebsite/static/media/personIcon.396ef378ca75af71485d.png" class='image'></img></div>
    </div>
    <div className='flex flex-col flex-nowrap'>
      <div className='mt-16 ml-48 text-xl' class='name'><h2>Ria Ambadan / Software Developer</h2></div>
      <div className='mt-8' class='project'><h3 className='text-center font-semibold'>Projects</h3>
      <div className='' class='arrow'><FontAwesomeIcon icon={faAngleDown} className='h-8' class="button" /></div>
      </div>
    </div>
    
    </>
    
  )
}

export default page

