
import React from 'react'
import Button from '../Button/Button'

function NewsLetter() {

  return (

    <section className='py-16'>
        <div className='container mx-auto'>
            <div className='items-center text-center mx-auto md:w-[600px] w-full'> 
                <h1 className='text-4xl font-semibold font mb-4'>Join our newsletter for $10 off</h1>
                <p className='text-[#a5a5a5] mb-5'>Lorem ipsum dolor sit amet consectetur adipiscing elit pharetra tristique, ridiculus vel habitant cras ligula aenean euismod est erat, ac mi duis venenatis et nascetur vivamus vestibulum.</p>
                <div className='flex w-full'>
                <input className='border border-black w-full px-4 outline-none' type="text" placeholder='Enter email'/>
                <Button
                    title={'Subscribe'}
                />
                </div>
            </div>
        </div>
    </section>

  )

}

export default NewsLetter