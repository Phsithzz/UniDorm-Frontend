import dorm1 from "../assets/dorm1.jpg"
import dorm2 from "../assets/dorm2.jpg"
import dorm3 from "../assets/dorm3.jpg"
import dorm4 from "../assets/dorm4.jpg"
import dorm5 from "../assets/dorm5.jpg"
import map from "../assets/map.png"
import Navbar from "../components/Navbar";
import DormSlide from "../components/DormSlide";
import { LuMousePointerClick } from "react-icons/lu";
import { FaPhoneVolume } from "react-icons/fa6";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
const dormData = [
  {
    image:[
        dorm1,
        dorm2,
        dorm3,
        dorm4,
        dorm5,
    ],
    roomTypes: [
      {
        type: "Standard room",
        format: "สตูดิโอ",
        size: "28 ตร.ม.",
        priceMonth: "5,200 - 6,000 บาท",
        water: "30 หน่วย",
        electric: "7 หน่วย",
        status: "ว่าง",
      },
    ],
    facilities: [
      "เครื่องปรับอากาศ",
      "ที่จอดรถ",
      "เฟอร์นิเจอร์ - ตู้ ,เตียง",
      "ลิฟต์",
      "มี TV",
      "ฟิตเนส",
      "ตู้เย็น",
    ],
    facilitiesUnavailable: ["พัดลม", "โซฟา"], 
    reviews: {
      score: 5.0,
      topics: ["ความสะอาด", "ความคุ้มค่าของราคา", "การให้บริการ"],
    },
  },
];
const DormDetail = () => {
  const { id } = useParams();
  const [dorm, setDorm] = useState(null);

useEffect(() => {
  const fetchDorm = async () => {
    const res = await axios.get(`http://localhost:8080/dorms/${id}`);
    const mockExtra = dormData[0];

    setDorm({
      ...res.data,
      ...mockExtra
    });
    console.log(res.data)
  };

  fetchDorm();
}, [id]);
if (!dorm) return <div>Loading...</div>;
  return (
    <>
     <div className="flex flex-col min-h-screen bg-[#F0F0F0] font-sans">
      <Navbar />

      <div className="flex flex-col m-4 md:m-8 gap-6">

        <div className="bg-[#B8D8BE] p-6 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-black">{dorm.name}</h1>
              <div className="flex gap-2 items-center">
              <p>{dorm.address}</p>
<div className="flex gap-4 justify-center items-center bg-white w-fit rounded-xl px-2 py-1">
                    <p className="text-md font-semibold">ที่ตั้ง</p>
                    <img src={map} alt="google map" className="w-10 h-10 object-cover"/>
                </div>

              </div>
              <p className="text-sm ">{dorm.district}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="bg-white rounded-full px-6 py-2 flex items-center gap-2 font-bold shadow-sm w-fit">
              <span>   <FaPhoneVolume size={20} /></span> {dorm.province}
            </div>
            <div className="bg-white rounded-full px-6 py-2 flex items-center font-bold shadow-sm w-fit">
              ค่าเช่า : <span className="ml-2 text-lg">{dorm.price} บาท/เดือน</span>
            </div>
            
          </div>
          <div className="flex flex-col space-y-4 mt-4">

          <img src={dorm.imageUrl} alt={dorm.name} className="w-full h-100 object-cotain" />
          <div className="flex gap-4">
              <img src={dorm1} alt={dorm.name} className="w-full h-50 object-cover" />
                <img src={dorm2} alt={dorm.name} className="w-full h-50 object-cover" />
                  <img src={dorm3} alt={dorm.name} className="w-full h-50 object-cover" />
                    <img src={dorm4} alt={dorm.name} className="w-full h-50 object-cover" />
          </div>
          </div>
        </div>

 


  
        <div className="bg-white/50 p-4 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">ประเภทห้อง</h2>
          <div className="overflow-x-auto rounded-lg shadow-sm">
            <table className="w-full text-left bg-[#E3EFE5]">
              <thead className="bg-[#B6CEB4] text-gray-800">
                <tr>
                  <th className="p-3">ประเภท</th>
                  <th className="p-3">รูปแบบห้อง</th>
                  <th className="p-3">ขนาด</th>
                  <th className="p-3">รายเดือน</th>
                  <th className="p-3">ค่าน้ำ</th>
                  <th className="p-3">ค่าไฟ</th>
                  <th className="p-3 text-center">สถานะ</th>
                </tr>
              </thead>
              <tbody className="bg-[#D9E9CF]">
                {dorm.roomTypes?.map((room, index) => (
                  <tr key={index} className="border-b border-green-100 last:border-0">
                    <td className="p-3 font-semibold">{room.type}</td>
                    <td className="p-3">{room.format}</td>
                    <td className="p-3">{room.size}</td>
                    <td className="p-3">{dorm.price}</td>
                    <td className="p-3">{room.water}</td>
                    <td className="p-3">{room.electric}</td>
                    <td className="p-3 text-center text-green-700 font-bold">{room.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-[#D9E9CF] p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">สิ่งอำนวยความสะดวก</h2>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-gray-800">
              {dorm.facilities?.map((item, index) => (
                <div key={index} className="flex items-center">
                   • {item}
                </div>
              ))}

              {dorm.facilitiesUnavailable?.map((item, index) => (
                 <div key={`na-${index}`} className="flex items-center text-gray-400 line-through">
                 - {item}
              </div>
              ))}
            </div>
          </div>

  
          <div className="bg-[#D9E9CF] p-6 rounded-xl">
            <div className="flex justify-between items-center mb-4">
               <h2 className="text-2xl font-bold">รีวิวจากผู้เข้าพัก</h2>
               <button className="bg-[#40916C] text-white text-md px-4 py-2 rounded shadow-sm hover:bg-[#40916C]">
                 เขียนรีวิวของคุณ
               </button>
            </div>
            
            <div className="flex flex-col gap-3">
               <div className="bg-[#40916C] text-white p-2 rounded-lg text-center font-bold w-12 self-start mb-2">
                 {dorm.reviews.score}
               </div>
               
               <p className="font-semibold mb-1">หัวข้อ</p>
               {dorm.reviews.topics.map((topic, index) => (
                 <div key={index} className="bg-[#40916C] text-white px-4 py-2 rounded-lg flex justify-between items-center shadow-sm">
                   {topic}
                   <span><LuMousePointerClick /></span> 
                 </div>
               ))}
            </div>
          </div>

        </div>
      </div>
              <div className="w-full">
           <DormSlide />
        </div>
    </div>
    </>
  );
};

export default DormDetail;
