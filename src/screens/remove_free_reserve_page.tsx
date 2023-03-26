import { useEffect, useState } from "react";
import { Appbar } from "./components";
import TextField from '@mui/material/TextField';
import { useNavigate, useLocation, Link } from "react-router-dom";
import { removeFreeReserve } from "../data/firebase";


export default function RemoveFreeReserve () {
  const navigate = useNavigate();

  const { state } = useLocation();

  const [data, setData] = useState(state);
  const [pw, setPw] = useState('');

  const [week, setWeek] = useState('');
  const [time, setTime] = useState('');
  const [court, setCourt] = useState('');

  useEffect(() => {
    if (data.week === 'tue') {
      setWeek('화요일');
    } else if (data.week === 'wed') {
      setWeek('수요일');
    } else {
      setWeek('목요일');
    }

    if (data.time === 'time1') {
      if (data.week === 'wed') {
        setTime('17:30 ~ 18:15');
      } else {
        setTime('19:30 ~ 20:30');
      }
    } else if (data.time === 'time2') {
      setTime('18:15 ~ 19:00');
    } else if (data.time === 'time3') {
      setTime('19:00 ~ 19:45');
    } else {
      setTime('19:45 ~ 20:30');
    }


    if (data.court === 'A') {
      setCourt('코트 A');
    } else {
      setCourt('코트 B');
    }
  }, [data]);

  function clickCancelButton () {
    if (pw === data.pw) {
      try {
        removeFreeReserve(data);
        alert('취소되었습니다');
        navigate(-1);
      } catch (e) {
        alert('ERROR');
      }

    } else if (pw === '960221') {
      try {
        removeFreeReserve(data);
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
        <div>테니스 코트</div>
        <div>{court}</div>
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


    </div>
  );
}