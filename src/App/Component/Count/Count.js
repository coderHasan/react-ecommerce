 
import { useDispatch, useSelector } from "react-redux/es/exports" 
import { increass, selectCount, decreass } from "../../redux/slices/CountSlices"

 function Count() {

    const count = useSelector(selectCount)
    const dispadch = useDispatch()

   return (

     <div className='text-center py-10'>
        <h1>Count : {count}</h1>
        <button onClick={()=> dispadch(increass())}> decrement</button>
        <button onClick={()=> dispadch(decreass())}>decrement2</button>
     </div>

   )
 }
 
 export default Count