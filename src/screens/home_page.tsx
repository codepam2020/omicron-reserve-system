import React from "react";
import { CustomButton } from "./components";


export default function HomePage () {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen p-2">
      <div className="text-3xl">omicron reserve system</div>
      <div className="h-16" />
      <CustomButton to='/regular-reserve' title="정규훈련 예약" />
      <div className="h-8" />
      <CustomButton to="/free-reserve" title="자율훈련 예약" />
      <div className="h-8" />
      <CustomButton to="/state" title="예약현황" />
      <div className="h-20" />
    </div>
  );
}
