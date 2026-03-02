import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import map from "../assets/map.png"
import axios from "axios";
const DormSlide = () => {
      const [dormData, setDormData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
    const res = await axios.get("http://localhost:8080/dorms");
    setDormData(res.data);
  };
    fetchData();
  }, []);
  return (
    <>
    <div className="flex flex-col space-y-4 p-6">
   
    
            <div className="flex gap-6 items-center ">
    
                    {dormData?.map((dorm)=>(
                         <Link 
                         key={dorm.id}
                         to={`/detail/${dorm.id}`} className="w-140 h-90 flex flex-col space-y-2 p-4 bg-[#40916C] rounded-xl">
                        <img src={dorm.imageUrl} alt={dorm.name} className="w-120 h-50 object-cotain"/>
                    
                    <p className="text-md font-semibold text-white">{dorm.name}</p>
    
                    <div className="flex gap-4 justify-center items-center bg-white w-fit rounded-xl px-2 py-1">
                        <p className="text-md font-semibold">ที่ตั้ง</p>
                        <img src={map} alt="google map" className="w-10 h-10 object-cover"/>
                    </div>
    
                     <div className="flex justify-between items-center">
    
                        <p className="text-md font-semibold text-white">
                            ฿{dorm.price} / เดือน
                        </p>
    
                
    
                        </div>
                         </Link>
    
                   
                    
                  
                    ))}
       
    
            </div>
    
                <div className=" justify-center items-center flex gap-4">
    
                                <div className="bg-[#5FCC9C] px-2 py-2 w-5 h-5 rounded-full justify-center">   
                </div>
                            <div className="bg-[#D9D9D9] px-2 py-2 w-5 h-5 rounded-full justify-center">   
                </div>
                            <div className="bg-[#D9D9D9] px-2 py-2 w-5 h-5 rounded-full justify-center">   
                </div>
                </div>
    
    
        
        </div>
    </>
  )
}

export default DormSlide