import Button from "../Button/Button";

const Table = () => {

    return (

        <section className="py-16 bg-gray-100">
            <div className="container mx-auto">
                <div className="">
                    
                        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-20 items-center">

                            <div className="">
                                <img src="https://www.pngmart.com/files/22/Chairs-And-Table-PNG-HD.png" alt="" />
                            </div>

                            <div>
                                <h1 className="font text-4xl mb-5 font-bold ">The Coffee Table</h1>
                                <p>orem ipsum dolor sit amet consectetur adipiscing elit urna gravida interdum natoque, nec orci himenaeos aliquam eleifend senectus feugiat placerat fringilla et, nam felis porttitor egestas aptent augue sed arcu mi ligula. Ultricies sed congue fames dictum suscipit eros cum, tellus primis phasellus blandit vitae litora, dapibus odio praesent pellentesque convallis curabitur. Luctus suscipit nisi eu nec risus rhoncus condimentum mus senectus felis ac pharetra, ulus vel libero egestas curae cubilia integer rutrum</p>
                                <Button 
                                title={"Shop Now"}
                                style={{marginTop: '20px'}}
                                />
                            </div>       
                        
                        </div>
                       
                    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-20 items-center mt-20">

                        <div>
                            <h1 className="text-4xl mb-5 font-bold font ">The Coffee Table</h1>
                            <p>orem ipsum dolor sit amet consectetur adipiscing elit urna gravida interdum natoque, nec orci himenaeos aliquam eleifend senectus feugiat placerat fringilla et, nam felis porttitor egestas aptent augue sed arcu mi ligula. Ultricies sed congue fames dictum suscipit eros cum, tellus primis phasellus blandit vitae litora, dapibus odio praesent pellentesque convallis curabitur. Luctus suscipit nisi eu nec risus rhoncus condimentum mus senectus felis ac pharetra, ulus vel libero egestas curae cubilia integer rutrum</p>
                            <Button 
                            title={"Shop Now"}
                            style={{marginTop: '20px'}}
                            />
                        </div> 

                        <div>
                            <img src="https://www.nicepng.com/png/detail/107-1076720_cafe-table-png-coffee-table-and-chairs-vector.png" alt="" />
                        </div>      
                    
                    </div>                       
                       
                </div>

            </div>

        </section>

    );

}

export default Table;
