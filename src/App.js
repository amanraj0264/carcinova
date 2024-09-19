import logo from './Pages/image/logo.png'

import CopyrightIcon from '@mui/icons-material/Copyright';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Footer from './Pages/Footer';

import { Services } from './Pages/Services';
import About from './Pages/About';
import { Bannerslider } from './Pages/Bannerslider';
import { Team } from './Pages/Team';
import {Testimonial} from './Pages/Testimonial';
import Faq from './Pages/Faq';





function App() {


  return (
    <div>


      {/* Nav Start */}
      <div className='hidden lg:block  bg-color-secondary'>
        <div className=" max-w-[1440px] mx-auto text-white flex justify-between py-2  px-6  ">

          <div className='flex space-x-2 items-center'>
            <LocationOnIcon className='text-color-primary'></LocationOnIcon>
            <p>Find A Location </p>
            <LocalPhoneIcon className='text-color-primary'></LocalPhoneIcon>
            <p>+91 9438163280 </p>
            <EmailIcon className='text-color-primary'></EmailIcon>
            <p>carcinovahospital@gmail.com</p>
          </div>


          <div className='flex space-x-2 '>

            <div className='block py-1 px-1 bg-white rounded-full group hover:bg-color-primary duration-200  ease-in-out'>
              <FacebookIcon className=' text-black rounded-xl group-hover:text-white duration-200 ease-in-out py-0.7'></FacebookIcon>
            </div>

            <div className='block py-1 px-1 bg-white rounded-full group hover:bg-color-primary duration-200  ease-in-out'>
              <TwitterIcon className=' text-black rounded-xl group-hover:text-white duration-200 ease-in-out py-0.7'></TwitterIcon>
            </div>

            <div className='block py-1 px-1 bg-white rounded-full group hover:bg-color-primary duration-200  ease-in-out'>
              <InstagramIcon className=' text-black rounded-xl  group-hover:text-white duration-200 ease-in-out py-0.7'></InstagramIcon>
            </div>

            <div className='block py-1 px-1 bg-white rounded-full group hover:bg-color-primary duration-200  ease-in-out'>
              <LinkedInIcon className=' text-black rounded-xl  group-hover:text-white duration-200 ease-in-out py-0.7'></LinkedInIcon>
            </div>

          </div>

        </div>



      </div>


      <header className='max-w-[1440px] mx-auto  bg-white flex justify-between px-6   '>
        <div className=''>
          <img src={logo} alt='Logo'></img>
        </div>

        <div className='hidden lg:flex items-center'>
          <ul className='flex lg:space-x-8  space-x-3 items-center '>
            <li className=' inline-block hover:text-color-primary hover:border-b-2  hover:border-color-primary duration-200 ease-out py-6'>Home</li>

            <li className=' inline-block hover:text-color-primary hover:border-b-2  hover:border-color-primary duration-200 ease-out py-6'>About</li>
            <div className='flex items-center space-x-1'>
              <li>Services</li> <KeyboardArrowDownIcon className='relative top-0.5'></KeyboardArrowDownIcon>
            </div>
            <li className=' inline-block hover:text-color-primary hover:border-b-2  hover:border-color-primary duration-200 ease-out py-6'>Specialties</li>



            <li className=' inline-block hover:text-color-primary hover:border-b-2  hover:border-color-primary duration-200 ease-out py-6'>Contact Us</li>
            <li className='btn'>Book Appoinment</li>
          </ul>

        </div>
      </header>
      {/* Nav End End*/}



      {/* Bannerslider Start */}
      <Bannerslider></Bannerslider>
      {/* Bannerslider End */}



      {/* About Start*/}
      <About></About>
      {/* About End*/}


      {/* Team Start */}
      <div className='max-w-[1320px] mx-auto text-center pt-20 '>

        <div className=' flex justify-center items-center '>
          <div className='space-y-1 rotate-180'>
            <div className='bg-color-primary h-[2px] w-24 rounded'></div>
            <div className='bg-color-primary h-[2px] w-12 rounded'></div>
          </div>



          <span className='px-2 Playfiar uppercase font-medium text-2xl text-color-primary font-playfair'>Meet our team</span>

          <div className='space-y-1 '>
            <div className='bg-color-primary h-[2px] w-12 rounded'></div>
            <div className='bg-color-primary h-[2px] w-24 rounded'></div>
          </div>

        </div>
        <h1 className='text-4xl  text-center  font-playfair '>Our Doctors</h1>


      </div>
      <Team></Team>
      {/* Team End */}


  <Testimonial></Testimonial>




      




      {/* Serives Start*/}
      <div className='max-w-[1400px] mx-auto text-center pt-20 px-6'>
        <div className=' flex justify-center items-center '>

          <div className='space-y-1 rotate-180'>
            <div className='bg-color-primary h-[2px] w-24 rounded'></div>
            <div className='bg-color-primary h-[2px] w-12 rounded'></div>
          </div>



          <span className='px-2 Playfiar uppercase font-medium text-2xl text-color-primary font-playfair'>Services</span>

          <div className='space-y-1 '>
            <div className='bg-color-primary h-[2px] w-12 rounded'></div>
            <div className='bg-color-primary h-[2px] w-24 rounded'></div>
          </div>

        </div>
        <h1 className='text-4xl  text-center py-5 font-playfair '>Strength in Unity, Together, We Beat Cancer</h1>



        <div className='max-w-[1400px] mx-auto text-center py-10'>
          <Services></Services>
          <div className='pt-14'>
            <button className='btn2'>Services More</button>
          </div>

        </div>

      </div>
      {/* Serives End*/}

      <Faq></Faq>

      {/* Footer start */}

      <Footer></Footer>
      <div>
        <div className=' bg-[#202135] '>
          <div className=' max-w-[1320px] mx-auto py-4  flex gap-2  md:justify-start justify-center px-6 '>

            <CopyrightIcon className='text-white'></CopyrightIcon>
            <span className='text-white  '>Carcinova, All right reserved. @ 2024</span>
          </div>
        </div>
      </div>
      {/* Footer start End*/}


    </div>
  );
}

export default App;
