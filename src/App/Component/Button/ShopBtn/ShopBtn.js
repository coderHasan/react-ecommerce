
import React from 'react'

function ShopBtn({icon,point}) {
  return (

    <div className='bg-[#DFC4AF] w-[70px] h-[70px] grid items-center justify-center text-black rounded-lg fixed right-4 bottom-8 cursor-pointer'>
        <button>
            {icon}
        </button>
        <span className='absolute top-0 right-0 grid  font-bold bg-white w-6 h-6 text-black rounded-full items-center justify-center'>0</span>
    </div>

  )
}

export default ShopBtn