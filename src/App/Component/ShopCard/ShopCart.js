
import { BsFillCartCheckFill, BsFillCartPlusFill } from 'react-icons/bs';

const ShopCart = ({image, name,id, price, company, onClick, exist}) => {

    return (
        
        <div className='bg-neutral-200 md:w-[24%] sm:w-[48%] mb-7 w-full rounded-lg '>

                <>

                    <div className='rounded-lg overflow-hidden hoverEffet ease-in-out duration-200'>
                        <div className='overflow-hidden w-auto h-[200px]'>
                            <img className='block ease-in duration-300 h-full' src={image} alt="" />
                        </div>
                        <div className='px-5 py-6 overflow-hidden'>
                            <p className='text-gray-400 text-sm'>{company}</p>
                            <h1 className='font font-semibold text-lg mb-2'>{name}</h1>
                            <div className='flex justify-between items-center'>
                                <span className='text-[#4c4c4c]'>${price}</span>
                                    {exist(id) ? (

                                        <button className='w-10 h-10 items-center flex justify-center text-gray-100 rounded-full bg-[#94634b] '>
                                        <BsFillCartCheckFill size={16} />
                                        </button>

                                    ):(

                                        <button onClick={onClick} className='w-10 h-10 items-center flex justify-center text-gray-100 rounded-full bg-[#94634b] '>
                                        <BsFillCartPlusFill size={16} />
                                        {exist(id) && 'Mango'}
                                        </button>

                                    )}


                            </div>
                        </div>
                    </div>

                </>
            </div>
        
    );

}

export default ShopCart;
