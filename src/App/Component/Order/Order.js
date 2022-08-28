import Card from "./Card/Card"


function OrderCard() {

  return (

    <section className="py-16 white">
        <div className="container m-auto ">
        
            <div className="grid md:grid-cols-3 sm:grid-cols-2">
                <Card 
                  icon= {'https://cdn-icons-png.flaticon.com/512/869/869019.png'}
                  title= 'Fast & Free Shipping'
                  disc= "Every single order ships for free. No minimums, no tiers no fine print whatsorver"
                />

                <Card 
                  icon= {"https://cdn-icons-png.flaticon.com/512/685/685388.png"}
                  title= 'FModular, easy-to-move design'
                  disc= "Every single order ships for free. No minimums, no tiers no fine print whatsorver"
                />

                <Card 
                  icon= {'https://cdn-icons-png.flaticon.com/512/3275/3275760.png'}
                  title= 'Durable, premium materials'
                  disc= "Every single order ships for free. No minimums, no tiers no fine print whatsorver"
                />
                
            </div>

        </div>
    </section>

  )
}

export default OrderCard