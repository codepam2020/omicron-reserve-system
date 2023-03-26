import { Link } from "react-router-dom";
import { CustomButton } from "./components";


export default function HomePage () {

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen p-2">
      <img src="img/croni.png" alt="croni" className="w-64" />
      <div className="h-16" />
      <CustomButton to='/regular-reserve' title="정규훈련 예약" />
      <div className="h-8" />
      <CustomButton to="/free-reserve" title="자율훈련 예약" />
      <div className="h-8" />
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
