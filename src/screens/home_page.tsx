import { click } from "@testing-library/user-event/dist/click";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrainingReserveButtonVisible } from "../data/firebase";
import { CustomButton } from "./components";


export default function HomePage () {

  const [reserveButtonVisible, setReserveButtonVisible] = useState(false);

  useEffect(() => {
    getTrainingReserveButtonVisible().then((re: any) => setReserveButtonVisible(re.reserve_button_visible));
  }, []);

  function clickNotTime () {
    alert('훈련 예약 기간이 아닙니다');
  }


  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen p-2">
      <img src="img/croni.png" alt="croni" className="w-64" />
      <div className="h-12" />
      {
        reserveButtonVisible ?
          <div>
            <CustomButton to='/regular-reserve' title="정규훈련 예약" />
            <div className="h-8" />
            <CustomButton to="/free-reserve" title="자율훈련 예약" />
            <div className="h-8" />
          </div>
          :
          <div>
            <Link to="#!" className="flex flex-col items-center justify-center w-32 h-9 bg-button rounded-xl" onClick={clickNotTime}>
              <div>정규훈련 예약</div>
            </Link>
            <div className="h-8" />
            <Link to="#!" className="flex flex-col items-center justify-center w-32 h-9 bg-button rounded-xl" onClick={clickNotTime} >
              <div>자율훈련 예약</div>
            </Link>
            <div className="h-8" />
          </div>
      }

      <CustomButton to="/state" title="예약현황" />
      <div className="h-20" />


      <div className="flex flex-row items-center justify-between w-full absolute bottom-3 px-3">
        <div className="text-gray-200">made by Yook</div>
        <Link to="/manage">
          <div className="text-gray-100">관리자 페이지</div>
        </Link>
      </div>
    </div>
  );
}
