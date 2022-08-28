
import React from 'react'
import Button from '../Button/Button'

function Inspired() {

  return (
    <section className='py-16'>
        <div className='text-slate-100 font-bold text-7xl font md:mb-0 mb-16'>Inspired</div>
        <div className='container mx-auto'>

            <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-20 items-center'>
                <div className='mr-7 w-full sm:w[50%]'>
                    <img  src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>

                <div className=''>
                   <div className=''> 
                        <h1 className='text-5xl font font-bold leading-tight'>Discover the istercrior design of your dreams</h1>
                        <p className='text-[#ddd] my-5'>Lorem ipsum dolor sit amet consectetur adipiscing elit, nam dui tincidunt nunc nisl porttitor sem mauris, faucibus duis metus aliquam erat per. Sollicitudin convallis dignissim vehicula nunc augue scelerisque varius felis,</p>
                        <Button title={'Get Inspired'}/>
                    </div>
                   <div className='float-right w-3/4 mt-12'>
                        <img src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                   </div>
                </div>

            </div>
        </div>
    </section>
  )

}

export default Inspired