import { useEffect, useState } from "react";
import DormCheap from "../components/DormCheap";
import Footter from "../components/Footter";
import Navbar from "../components/Navbar";
import RecommendDorm from "../components/RecommendDorm";
import SearchDorm from "../components/SearchDorm";
import axios from "axios";
const Home = () => {
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
      <div className="flex flex-col bg-[#F0F0F0] ">
        <Navbar />
        <div className="flex flex-col m-6 ">
          <SearchDorm />
          <div className="flex flex-col mt-8">
            <DormCheap dormData={dormData} />
            <RecommendDorm dormData={dormData} />
          </div>
        </div>
        <Footter />
      </div>
    </>
  );
};

export default Home;
