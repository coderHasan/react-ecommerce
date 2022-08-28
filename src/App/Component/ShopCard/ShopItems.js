import { useEffect } from "react";
import { useState } from "react";
import ShopCart from "./ShopCart";
import BounceLoader from "react-spinners/BounceLoader";
import { useDispatch, useSelector } from "react-redux";
import { addItem, sliceItems } from "../../redux/Slice/busketSlice";


const ShopItems = () => {

    const [products, setProduct] = useState([]);
    const [loadedProducts, setLoadedProducts] = useState(false)
    const [loding, setLoding] = useState(false);
    const dispacth = useDispatch()
    const cartItems = useSelector(sliceItems)
    
    const getProduct = async ()=>{
        setLoding(true)
        const response = await fetch('https://course-api.com/react-store-products').then(res => res.json());
        setProduct(response)
        setLoadedProducts(createPagination(response))
        setLoding(false)
    }

    useEffect(() => {
        getProduct()
    }, []);

    const createPagination = (items, limit = 8, offset = 0) => {
        let arr = []
        items.forEach((item, index) => {
          if (index >= offset && index < offset + limit) {
            arr.push(item)
          }
        })
        return arr
      }

      const loadMore = () => {
        if (loadedProducts.length === products.length) return
        const newProducts = createPagination(products, 8, loadedProducts.length)
        setLoadedProducts([...loadedProducts, ...newProducts])
      }

      const addToBasket = (product) =>{
        dispacth(addItem({
          ...product,
          quantity : 1
        }))

      }

      const checkItems = (id) =>  {
          const find = cartItems.filter(item => item.id===id)
          return !!find.length
      }


    return (
        <section className="py-16">
            <div className="container mx-auto">
            <div className="flex flex-wrap justify-between">
                {loding && (
                     <div className="flex justify-center w-full my-5 ">
                    <BounceLoader color="#54ff54"/>
                </div>
                )}
               

               
                {!!loadedProducts.length && loadedProducts?.map(product =>(
                    
                    <ShopCart 
                    key={product?.id}
                    {...product}
                    onClick={()=> addToBasket(product)}
                    exist = {checkItems}
                    />
    
              ))}
                

            </div>

            {loadedProducts.length !== products.length && (
              <button onClick={loadMore} className="bg-black mx-auto text-white px-11 py-3 block">Load More</button>
            )}

        </div>
        </section>
    );
}

export default ShopItems;
