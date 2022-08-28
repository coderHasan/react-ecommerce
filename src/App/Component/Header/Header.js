import {useState} from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { HiOutlineUser } from 'react-icons/hi';
import { FiMenu } from 'react-icons/fi';
import { menus } from "./Manus"



 function Header() {

    const [menu, setmenu] = useState(false);

    const removeNav = ()=>{
        setmenu(!menu)
    }
    
  return (

    <header className="bg-gray-200 sticky top-0 z-[99999]">
       <div className="container m-auto">
        <div className="flex justify-between items-center py-5">

                <div className='text-3xl font-semibold '>
                    <a className='font' href="">Furnuture.</a>
                </div>

                <div className='md:block hidden'>
                    <ul className="flex gap-20">

                        {menus?.map((item,index) => (
                         <li key={index}><a className="font-normal text-lg" href={item.link}>{item.name}</a></li>
                        ))} 
                        
                    </ul>
                </div>
                <div className='flex gap-5 text-3xl'>
                    <a href=""><TiShoppingCart/></a>
                    <a href=""><HiOutlineUser /></a>

                    <li onClick={()=> removeNav()} className='md:hidden block'> <FiMenu /></li>

                </div>
            </div>

        

            {menu && 

                <div className='md:hidden block bg-gray-200 py-4 '>

                    <ul className='flex md:flex-row flex-col md:gap-10 gap-3 text-center pb-3 '>
                        
                        {menus?.map((item,index) => (
                         <li key={index}><a className="font-normal text-lg" href={item.link}>{item.name}</a></li>
                       ))} 

                    </ul>
                </div>
                        
            }


        </div>

    </header>
 
  )
}

export default Header