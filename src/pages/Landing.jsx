
import Header from "../components/header";  
import Card from "../components/card";        
import Todocomp from "../components/todocomp";
import { useLocation } from "react-router-dom";

function Landingpage(){

    const data=useLocation()


    return (<div className="bg-black p-16">
        <div className="bg-white p-10  border rounded-md">
    
          <Header Username={data.state.user} />
    
          <div className="flex justify-between gap-5 my-7 flex-wrap">
            <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}></Card>
            <Card bgcolor={"#FD6663"} title={"25/10/24"} subtitle={"Friday"}></Card>
            <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}></Card>
          </div>
    
          <Todocomp/>
    
         
        </div>
      </div>)
}

export default Landingpage;