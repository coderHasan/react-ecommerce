


 function Hero() {
  return (
    <section className="bg-slate-100 pb-16">

     <div className="container mx-auto">

        <div className="flex h-[600px] flex-col md:flex-row  items-center w-full">

        
            <div className=" mr-5 sm:w-full">
                <div className="w-full">
                    <h1 className="font font-bold md:text-7xl text-6xl leading-relaxed">Future<br/>of furniutre</h1>
                    <p className="text-zinc-400 my-5 text-lg w-[430px]">Find an elegant and luxurious interior designed by a professional interior designer</p>
                    <div className="flex w-full">
                        <input className="border-black border outline-none py-[15px] pl-4 w-full" type="text" placeholder="Search your products"/>
                        <button className="border-black border px-5 bg-black text-white">Search</button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 justify-between gap-6 h-full w-full md:mt-0 mt-14">

                <img className="block h-full object-cover" src="https://images.unsplash.com/photo-1617806265182-7b3f847f0b75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                <img className="block h-full object-cover"  src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" alt="" />
                <img className="block h-full object-cover"  src="https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1309&q=80" alt="" />
                
            </div>
           
        </div>

     </div>

    </section>
  )
}

export default Hero