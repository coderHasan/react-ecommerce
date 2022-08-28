
import "./App.css"
import Header from "./App/Component/Header/Header";
import OrderCard from "./App/Component/Order/Order";
import Table from "./App/Component/CoffeeTable/Table";
import ShopItems from "./App/Component/ShopCard/ShopItems";
import Inspired from "./App/Component/Inspired/Inspired";
import Customers from "./App/Component/Customers/Customers";
import NewsLetter from "./App/Component/NewsLetter/NewsLetter";
import Footer from "./App/Component/Footer/Footer";
import CardDrawer from "./App/Component/CardDrawer/CardDrawer";
import { Provider } from "react-redux";
import { store } from "./App/redux/Store";
import HashLoader from "react-spinners/HashLoader";
import { useEffect, useState } from "react";
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import Banner from "./App/Component/Hero/Hero";



function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000);
    
  }, []);

  return (
      <>
      {loading ?
      
        <div className="w-full flex h-screen items-center justify-center">
          <HashLoader 
            color="#36D756"
            size={80}
          />
        </div>
        : 

      <Provider store={store}>

      <Header/>
        <CardDrawer />
        <Banner />

        <Flip top>
        <OrderCard />
        </Flip>
        
        <Table />
        <Slide bottom>
        <ShopItems />
        </Slide>
        <Inspired />
        <Customers />
        <NewsLetter / >
        <Footer />

      </Provider>
      }
      </>

  );

}

export default App;
