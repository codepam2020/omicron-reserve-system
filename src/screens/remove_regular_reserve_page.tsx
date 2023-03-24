import React, { useEffect, useState } from "react";
import { Appbar } from "./components";
import TextField from '@mui/material/TextField';
import { useNavigate, useLocation, Link } from "react-router-dom";


export default function RemoveRegularReservePage () {
  const { state } = useLocation();

  const [data, setData] = useState(state);
  const [pw, setPw] = useState('');

  const [week, setWeek] = useState('');

  useEffect(() => {
    if (data.week === 'tue') {
      setWeek('화요일');
    } else if (data.week === 'wed') {
      setWeek('수요일');
    } else {
      setWeek('목요일');
    }
  }, [data]);

  function clickCancelButton () {
    if (pw === data.pw) {
      alert('pass');
    } else if (pw === '960221') {
      alert('pass');
    } else {
      alert('비밀번호 오류');
    }
  }

  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-screen p-2">
      <Appbar title="예약 취소" />

      <div className="h-8" />



      <div className="grid grid-cols-2 gap-8">
        <div>예약자 : </div>
        <div>{data.name}</div>
        <div>요일 : </div>
        <div>{week}</div>
        <div>훈련시간 : </div>
        <div>17:30 ~ 18:30</div>
      </div>

      <div className="h-12" />

      <div>
        <TextField
          id="outlined-basic"
          label="비밀번호"
          variant="outlined"
          size="small"
          type="password"

          sx={{ width: 190 }}
          onChange={(e) => setPw(e.target.value)}
          value={pw}
        />
      </div>

      <div className="h-12" />

      <Link
        onClick={() => { clickCancelButton(); }}
        to="#"
        className="flex flex-col items-center justify-center w-32 h-9 bg-button rounded-xl">
        <div>예약취소</div>
      </Link>

      <div className="h-6" />


    </div>
  );
}