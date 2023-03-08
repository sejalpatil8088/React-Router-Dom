import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Outlet />
      <div className="flex justify-around bg-[#EEEEEE] py-10">
        <Cards
           imgSrc="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19524874/2022/8/17/0fb689b3-28b4-4f6a-be08-a2ce9dfedcdc1660715206206QOMNBluePrintMandarinCollarTop1.jpg"
         />
        <Cards
            imgSrc="https://m.media-amazon.com/images/I/71dNA6Sz2qS._UX466_.jpg"
        />
        <Cards
            imgSrc="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2506738/2018/7/18/df0c1d8c-528d-4afd-9714-a40c19b105ec1531903512284-Pannkh-Women-Navy-Blue-Printed-Top-6761531903512079-1.jpg"
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
