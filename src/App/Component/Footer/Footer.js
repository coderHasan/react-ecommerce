import { FaFacebookF } from 'react-icons/fa';
import { BsFillTelephoneFill, BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';


function Footer() {
  return (
    
    <footer className='bg-[#3f3e3e]'>
        <div className="container mx-auto">

            <div className='grid sm:grid-cols-2 md:grid-cols-4 text-[#ababab] py-10 w-full'>
              <div className='mr-8'>
                <h1 className='text-2xl text-white font font-bold mb-5 mt-6 md:mt-0'>Parabot</h1>
                <p className=''>625 E Franklin Ave, Minneapolis, MN 55404, USA</p>
                <span className='mt-8 block'>&copy; 2021 Mahadidev7. All rights reserved.</span>
              </div>

              <div className='md:ml-8'>
                <h1 className='text-xl text-white  mb-5 mt-6  md:mt-0'>About us</h1>
                  <ul>
                    <li className='py-2'>
                      <a href="">Our story</a>
                    </li>
                    <li className='py-2'>
                      <a href="">Designer</a>
                    </li>
                    <li className='py-2'>
                      <a href="">Craftsmanship</a>
                    </li>
                    <li className='py-2'>
                      <a href="">Sustainability</a>
                    </li>
                  </ul>
              </div>

              <div>
                <h1 className='text-xl text-white  mb-5 mt-6  md:mt-0'>Support</h1>
                  <ul>
                    <li className='py-2'>
                      <a href="">FAQ's</a>
                    </li>
                    <li className='py-2'>
                      <a href="">Shipping & Returns</a>
                    </li>
                    <li className='py-2'>
                      <a href="">Care Guide</a>
                    </li>
                    <li className='py-2'>
                      <a href="">Warranty</a>
                    </li>
                  </ul>
              </div>

              <div className='w-full'>
                <h1 className='text-xl text-white  mb-5 mt-6  md:mt-0'>Contact us</h1>
                  <ul>
                    <li className='py-2 flex gap-3'>
                      <a href="tel:01724754996"><BsFillTelephoneFill size={'16'}/></a>
                      <a className='text-sm' href="tel:01724754996">01724754996</a>
                    </li>
                    <li className='py-2 flex gap-3'>
                      <a href="mailto:skmdmehedihasan420@gmail.com"><FiMail size={"16"}/></a>
                      <a className='text-sm' href="mailto:skmdmehedihasan420@gmail.com">hassankhan09m@gmail.com</a>
                    </li>
                    <li className='mt-6 flex gap-6 text-white text-xl'>
                      <a href=""><FaFacebookF/></a>
                      <a href=""><BsInstagram/></a>
                      <a href=""><AiOutlineTwitter/></a>
                    </li>
                    
                  </ul>
              </div>

            </div>

          <div className='text-center text-[#ababab] pb-7 border-t border-[#7b7b7b] pt-7'><p>Privacy Policy | Term Of Usw | California Code</p></div>

        </div>
    </footer>

  )
}

export default Footer