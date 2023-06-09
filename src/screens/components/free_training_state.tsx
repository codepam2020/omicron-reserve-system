import { useState, useEffect } from "react";
import { getThuData, getTueData, getWedData } from "../../data/firebase";
import { Link } from "react-router-dom";

export default function FreeTrainingState () {
  const [tueData, setTueData] = useState({
    time1: {
      A: { names: [{ name: '', timeStamp: 1 }] },
      B: { names: [{ name: '', timeStamp: 1 }] }
    }
  });
  const [thuData, setThuData] = useState({
    time1: {
      A: { names: [{ name: '', timeStamp: 1 }] },
      B: { names: [{ name: '', timeStamp: 1 }] }
    }
  });
  const [wedData, setWedData] = useState({
    time1: {
      A: { names: [{ name: '', timeStamp: 1 }] },
      B: { names: [{ name: '', timeStamp: 1 }] }
    },
    time2: {
      A: { names: [{ name: '', timeStamp: 1 }] },
      B: { names: [{ name: '', timeStamp: 1 }] }
    },
    time3: {
      A: { names: [{ name: '', timeStamp: 1 }] },
      B: { names: [{ name: '', timeStamp: 1 }] }
    },
    time4: {
      A: { names: [{ name: '', timeStamp: 1 }] },
      B: { names: [{ name: '', timeStamp: 1 }] }
    }
  });

  useEffect(() => {
    getTueData().then((data: any) => setTueData(data));
    getThuData().then((data: any) => setThuData(data));
    getWedData().then((data: any) => setWedData(data));

  }, []);

  return (
    <div className="flex flex-col items-center justify-start w-full">
      <div className="flex flex-col items-center justify-start w-11/12 pb-4 my-5 border-dotted border-gray-400 border-2">
        <div className="flex flex-col items-center justify-center bg-white px-2 relative bottom-3">화요일</div>
        <div className="mb-2" >19:30 ~ 20:30</div>

        <div className="grid grid-cols-2 w-full mb-2">
          <div className="flex flex-col items-center">
            <div className="text-center">코트 A</div>
            <div className="grid grid-cols-2 gap-5">
              {tueData.time1.A.names.sort(function (a, b) { return a.timeStamp - b.timeStamp; }).map((data) =>
                <Link to='/remove-free-reserve' state={data} className="text-name" key={data.timeStamp} >
                  <div>{data.name}</div>
                </Link>
              )}
            </div>

          </div>
          <div className="flex flex-col items-center">
            <div className="text-center">코트 B</div>
            <div className="grid grid-cols-2 gap-5">
              {tueData.time1.B.names.sort(function (a, b) { return a.timeStamp - b.timeStamp; }).map((data) =>
                <Link to='/remove-free-reserve' state={data} className="text-name" key={data.timeStamp} >
                  <div>{data.name}</div>
                </Link>
              )}
            </div>
          </div>
        </div>

      </div>

      <div className="flex flex-col items-center justify-start w-11/12 pb-4 my-5 border-dotted border-gray-400 border-2">
        <div className="flex flex-col items-center justify-center bg-white px-2 relative bottom-3">수요일</div>

        <div className="mb-2">17:30 ~ 18:15</div>

        <div className="grid grid-cols-2 w-full mb-4">

          <div className="flex flex-col items-center">
            <div className="text-center">코트 A</div>
            <div className="grid grid-cols-2 gap-5">
              {wedData.time1.A.names.sort(function (a, b) { return a.timeStamp - b.timeStamp; }).map((data) =>
                <Link to='/remove-free-reserve' state={data} className="text-name" key={data.timeStamp} >
                  <div>{data.name}</div>
                </Link>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-center">코트 B</div>
            <div className="grid grid-cols-2 gap-5">
              {wedData.time1.B.names.sort(function (a, b) { return a.timeStamp - b.timeStamp; }).map((data) =>
                <Link to='/remove-free-reserve' state={data} className="text-name" key={data.timeStamp} >
                  <div>{data.name}</div>
                </Link>
              )}
            </div>

          </div>
        </div>

        <div className="mb-2">18:15 ~ 19:00</div>

        <div className="grid grid-cols-2 w-full mb-4">

          <div className="flex flex-col items-center">
            <div className="text-center">코트 A</div>
            <div className="grid grid-cols-2 gap-5">
              {wedData.time2.A.names.sort(function (a, b) { return a.timeStamp - b.timeStamp; }).map((data) =>
                <Link to='/remove-free-reserve' state={data} className="text-name" key={data.timeStamp} >
                  <div>{data.name}</div>
                </Link>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-center">코트 B</div>
            <div className="grid grid-cols-2 gap-3">
              {wedData.time2.B.names.sort(function (a, b) { return a.timeStamp - b.timeStamp; }).map((data) =>
                <Link to='/remove-free-reserve' state={data} className="text-name" key={data.timeStamp} >
                  <div>{data.name}</div>
                </Link>
              )}
            </div>
          </div>

        </div>

        <div className="mb-2">19:00 ~ 19:45</div>

        <div className="grid grid-cols-2 w-full mb-4">

          <div className="flex flex-col items-center">
            <div className="text-center">코트 A</div>
            <div className="grid grid-cols-2 gap-5">
              {wedData.time3.A.names.sort(function (a, b) { return a.timeStamp - b.timeStamp; }).map((data) =>
                <Link to='/remove-free-reserve' state={data} className="text-name" key={data.timeStamp} >
                  <div>{data.name}</div>
                </Link>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-center">코트 B</div>
            <div className="grid grid-cols-2 gap-5">
              {wedData.time3.B.names.sort(function (a, b) { return a.timeStamp - b.timeStamp; }).map((data) =>
                <Link to='/remove-free-reserve' state={data} className="text-name" key={data.timeStamp} >
                  <div>{data.name}</div>
                </Link>
              )}
            </div>
          </div>

        </div>

        <div className="mb-2">19:45 ~ 20:30</div>

        <div className="grid grid-cols-2 w-full mb-4">

          <div className="flex flex-col items-center">
            <div className="text-center">코트 A</div>
            <div className="grid grid-cols-2 gap-5">
              {wedData.time4.A.names.sort(function (a, b) { return a.timeStamp - b.timeStamp; }).map((data) =>
                <Link to='/remove-free-reserve' state={data} className="text-name" key={data.timeStamp} >
                  <div>{data.name}</div>
                </Link>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-center">코트 B</div>
            <div className="grid grid-cols-2 gap-5">
              {wedData.time4.B.names.sort(function (a, b) { return a.timeStamp - b.timeStamp; }).map((data) =>
                <Link to='/remove-free-reserve' state={data} className="text-name" key={data.timeStamp} >
                  <div>{data.name}</div>
                </Link>
              )}
            </div>
          </div>

        </div>

      </div>

      <div className="flex flex-col items-center justify-start w-11/12 pb-4 my-5 border-dotted border-gray-400 border-2">
        <div className="flex flex-col items-center justify-center bg-white px-2 relative bottom-3">목요일</div>

        <div className="mb-2">19:30 ~ 20:30</div>

        <div className="grid grid-cols-2 w-full mb-4">

          <div className="flex flex-col items-center">
            <div className="text-center">코트 A</div>
            <div className="grid grid-cols-2 gap-5">
              {thuData.time1.A.names.sort(function (a, b) { return a.timeStamp - b.timeStamp; }).map((data) =>
                <Link to='/remove-free-reserve' state={data} className="text-name" key={data.timeStamp} >
                  <div>{data.name}</div>
                </Link>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-center">코트 B</div>
            <div className="grid grid-cols-2 gap-5">
              {thuData.time1.B.names.sort(function (a, b) { return a.timeStamp - b.timeStamp; }).map((data) =>
                <Link to='/remove-free-reserve' state={data} className="text-name" key={data.timeStamp} >
                  <div>{data.name}</div>
                </Link>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );

}