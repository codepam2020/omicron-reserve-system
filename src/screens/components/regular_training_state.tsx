import React, { useState, useEffect } from "react";
import { getThuData, getTueData, getWedData } from "../../data/firebase";

export default function RegularTrainingState () {
  const [tueData, setTueData] = useState({
    reg_time1: {
      names: [
        { name: '육정수1', time: '', pw: '' },
      ]
    },
    reg_time2: {
      names: [{ name: '', time: '', pw: '' },]
    },
    reg_time3: {
      names: [{ name: '', time: '', pw: '' }]
    },

  });
  const [thuData, setThuData] = useState({
    reg_time1: {
      names: [{ name: '', time: '', pw: '' }]
    },
    reg_time2: {
      names: [{ name: '', time: '', pw: '' }]
    },
    reg_time3: {
      names: [{ name: '', time: '', pw: '' }]
    },
  });

  useEffect(() => {
    // getTueData().then((data: any) => setTueData(data));
    getThuData().then((data: any) => setThuData(data));

  }, []);

  return (
    <div className="flex flex-col items-center justify-start w-full">
      <div className="flex flex-col items-center justify-start w-11/12 pb-4 my-5 border-dotted border-gray-400 border-2">
        <div className="flex flex-col items-center justify-center bg-white px-2 relative bottom-3">화요일</div>

        <div className="mb-2" >17:30 ~ 18:30</div>
        <div className="grid grid-cols-4 gap-5">
          {tueData.reg_time1.names.map((data) =>
            <a href="#" className="text-name">{data.name}</a>
          )}
        </div>

        <div className="h-3" />

        <div className="mb-2" >18:00 ~ 19:00</div>
        <div className="grid grid-cols-4 gap-6">
          {tueData.reg_time2.names.map((data) =>
            <a href="#" className="text-name">{data.name}</a>
          )}
        </div>

        <div className="h-3" />

        <div className="mb-2" >18:30 ~ 19:30</div>
        <div className="grid grid-cols-4 gap-6">
          {tueData.reg_time3.names.map((data) =>
            <a href="#" className="text-name">{data.name}</a>
          )}
        </div>

        <div className="h-3" />


      </div>

      <div className="flex flex-col items-center justify-start w-11/12 pb-4 my-5 border-dotted border-gray-400 border-2">
        <div className="flex flex-col items-center justify-center bg-white px-2 relative bottom-3">목요일</div>

        <div className="mb-2" >17:30 ~ 18:30</div>
        <div className="grid grid-cols-4 gap-6">
          {thuData.reg_time1.names.map((data) =>
            <a href="#" className="text-name">{data.name}</a>
          )}
        </div>

        <div className="h-3" />

        <div className="mb-2" >18:00 ~ 19:00</div>
        <div className="grid grid-cols-4 gap-6">
          {thuData.reg_time2.names.map((data) =>
            <a href="#" className="text-name">{data.name}</a>
          )}
        </div>

        <div className="h-3" />

        <div className="mb-2" >18:30 ~ 19:30</div>
        <div className="grid grid-cols-4 gap-6">
          {thuData.reg_time3.names.map((data) =>
            <a href="#" className="text-name">{data.name}</a>
          )}
        </div>

        <div className="h-3" />



      </div>
    </div>
  );

}