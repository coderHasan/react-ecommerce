

 function Card({icon, title, disc}) {
  return (
    
    <div className=" w-full items-center">

        <div className= "md:flex items-center space-y-5 md:space-y-0 md:w-full w-[300px]">

                <div className=" w-20 h-20 mt-10 md:mt-0 bg-slate-100 p-4 rounded-full mr-5 flex justify-center">
                   <div className="w-[40px]">
                        <img src={icon} />
                   </div>
                </div>

                <div className="md:w-60">
                    <h1 className="font font-semibold text-xl ">{title}</h1>
                    <p className=" text-zinc-400 mt-3">{disc}</p>
                </div>
        </div>

    </div>

  );
}

export default Card