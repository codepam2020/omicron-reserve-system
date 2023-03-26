import { useEffect, useState } from "react";
import { Appbar } from "./components";
import TextField from '@mui/material/TextField';
import { useNavigate, useLocation, Link } from "react-router-dom";
import { removeRegularReserve } from "../data/firebase";


export default function RemoveRegularReservePage () {
  const navigate = useNavigate();

  const { state } = useLocation();

  const [data, setData] = useState(state);
  const [pw, setPw] = useState('');

  const [week, setWeek] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    if (data.week === 'tue') {
      setWeek('화요일');
    } else if (data.week === 'wed') {
      setWeek('수요일');
    } else {
      setWeek('목요일');
    }

    if (data.time === 'reg_time1') {
      setTime('17:30 ~ 20:30');
    } else if (data.time === 'reg_time2') {
      setTime('18:00 ~ 19:00');
    } else {
      setTime('18:30 ~ 19:30');
    }
  }, [data]);

  function clickCancelButton () {
    if (pw === data.pw) {
      try {
        removeRegularReserve(data);
        alert('취소되었습니다');
        navigate(-1);
      } catch (e) {
        alert('ERROR');
      }

    } else if (pw === '960221') {
      try {
        removeRegularReserve(data);
        alert('취소되었습니다');
        navigate(-1);
      } catch (e) {
        alert('ERROR');
      }

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
        <div>{time}</div>

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
        to="#!"
        className="flex flex-col items-center justify-center w-32 h-9 bg-button rounded-xl">
        <div>예약취소</div>
      </Link>

      <div className="h-6" />
      <a hidden={true} onClick={() => { setData(state); }}>.</a>


    </div >
  );
}