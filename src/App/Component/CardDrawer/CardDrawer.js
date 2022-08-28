
import  { useState } from 'react';
import Drawer from 'react-modern-drawer'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import 'react-modern-drawer/dist/index.css'
import SingleProduct from './SingleProduct';
import { useDispatch, useSelector } from 'react-redux';
import { sliceItems, removeItems, increesItemQuantity, dicreesItemQuantity, selectTotal, selectTotalCart } from '../../redux/Slice/busketSlice';



    
    function CardDrawer() {


        const [isOpen, setIsOpen] = useState(false)
        const toggleDrawer = () => {
            setIsOpen((prevState) => !prevState)
        }
        const cartItems = useSelector(sliceItems)
        const totalPrice = useSelector(selectTotal)
        const totalCart = useSelector(selectTotalCart)
        const dispacth = useDispatch()

        
        const increesQuantity = (id)=>{
            dispacth(increesItemQuantity(id))
        }

        const dicreesQuantity = (id)=>{
            dispacth(dicreesItemQuantity(id))
        }

      return (

           <>
           
           <button onClick={() => setIsOpen(true)} className="fixed rounded bottom-10 right-4 bg-[#DFC4AF] p-5 text-2xl z-50" >
                <span>
                    <span className="flex items-center justify-center absolute text-xs top-0 right-0 p-1 bg-white font-bold w-6 h-6 rounded-full">
                        {totalCart}
                    </span>
                </span>
                <span> <AiOutlineShoppingCart /> </span>
            </button>

            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                size={350}
                zIndex={99999}
                
            >

                <div className=' flex flex-col'>
                    <h2 className='text-center w-full bg-slate-200 py-4'>
                        Cart Items ({totalCart})
                    </h2>
                    {totalCart === 0 &&(
                            <p className='text-center'>No items in card</p>
                        )}
                    <div className='flex flex-col overflow-scroll h-96 px-3'>
                        {cartItems.map(items =>(
                            <SingleProduct
                                key={items.id}
                                {...items}
                                onRemove ={()=> dispacth(removeItems(items.id))}
                                increesMent = {()=>increesQuantity(items.id)}
                                decressMent = {()=>dicreesQuantity(items.id)}
                            />
                        ))}
        
                    </div>

                    <div className="border-t mb-3 mx-auto">
                        <h2 className='text-lg mt-3 mb-3'>Total Price: ${totalPrice}</h2>
                        <button className='bg-black text-white py-3  w-full block'>Checkout</button>
                    </div>
                    
                    
                </div>               

            </Drawer>
           
           </>

      )

    }
    
    export default CardDrawer