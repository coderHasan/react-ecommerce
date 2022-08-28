
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OurCustomers from './OurCustomers'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Customers() {

  return (

    <section className='bg-[#f6f6f6] py-16'>
        <div className='container mx-auto'>
          <h1 className='font text-4xl font-bold mb-10'>Words from our customers</h1>
            
   

                    <Carousel 
                    
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    infinite={true}
                    >
                      
                    <OurCustomers />
                    <OurCustomers />
                    <OurCustomers />
                    <OurCustomers />
                    <OurCustomers />
                    <OurCustomers />
                    <OurCustomers />
                    <OurCustomers />

                  </Carousel>


        </div>
    </section>

  )

}


export default Customers