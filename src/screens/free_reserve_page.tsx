import { useState } from "react";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
import Appbar from "./components/appbar";
import { addFreeReserve } from "../data/firebase";

export default function FreeReservePage () {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [week, setWeek] = useState('');
  const [time, setTime] = useState('');
  const [court, setCourt] = useState('');
  const [pw, setPw] = useState('');
  const [rePw, setRePw] = useState('');
  const [errMessage, setErrMessage] = useState('');


  function clickReserveButton () {
    if (name.trim() === '') {
      setErrMessage('이름을 입력하세요');
    }

    else if (week === '') {
      setErrMessage('요일을 선택하세요');
    }

    else if (time === '') {
      setErrMessage('시간을 선택하세요');
    }

    else if (court === '') {
      setErrMessage('코트를 선택하세요');
    }

    else if (pw === '') {
      setErrMessage('비밀번호를 입력하세요');
    }

    else if (pw !== rePw) {
      setErrMessage('비밀번호가 일치하지않습니다');
    }

    else {
      setErrMessage('');
      addFreeReserve({ name: name, week: week, time: time, court: court, pw: pw, timeStamp: Date.now().toString() }, week, time, court);
      console.log("hi");
    }
  }


  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-screen p-2">
      <Appbar title="자율훈련 예약" />


      <div className="mb-9 mt-10">

        <TextField
          id="outlined-basic"
          label="예약자 이름"
          variant="outlined"
          size="small"
          sx={{ width: 190 }}
          onChange={(e) => { setName(e.target.value); }}
          value={name}
        />
      </div>



      <div className="flex flex-col items-center justify-center">
        <FormControl size="small" sx={{ width: 190 }}>
          <InputLabel id="demo-simple-select-label">요일</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={week}
            label="요일"
            onChange={(e: SelectChangeEvent) => { setWeek(e.target.value); }}
          >
            <MenuItem value="tue">화요일</MenuItem>
            <MenuItem value="wed">수요일</MenuItem>
            <MenuItem value="thu">목요일</MenuItem>
          </Select>
        </FormControl>

        <div className="h-10" />

        <FormControl size="small" sx={{ width: 190 }}>
          <InputLabel id="demo-simple-select-label">시간</InputLabel>

          {week === "wed" ?
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={time}
              label="시간"
              onChange={(e: SelectChangeEvent) => { setTime(e.target.value); }}
            >
              <MenuItem value="time1">17:30 ~ 18:15</MenuItem>
              <MenuItem value="time2">18:15 ~ 19:00</MenuItem>
              <MenuItem value="time3">19:00 ~ 19:45</MenuItem>
              <MenuItem value="time4">19:45 ~ 20:30</MenuItem>

            </Select>
            :
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={time}
              label="시간"
              onChange={(e: SelectChangeEvent) => { setTime(e.target.value); }}
            >
              <MenuItem value="time1">19:30 ~ 20:30</MenuItem>
            </Select>
          }

          <div className="h-10" />

          <FormControl size="small" sx={{ width: 190 }}>
            <InputLabel id="demo-simple-select-label">코트</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={court}
              label="코트"
              onChange={(e: SelectChangeEvent) => { setCourt(e.target.value); }}
            >
              <MenuItem value="A">A (풋살장 쪽)</MenuItem>
              <MenuItem value="B">B (정문 쪽)</MenuItem>
            </Select>
          </FormControl>
        </FormControl>
      </div>

      <div className="h-10" />

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

      <div className="h-10" />

      <div>
        <TextField
          id="outlined-basic"
          label="비밀번호 확인"
          variant="outlined"
          size="small"
          type='password'
          sx={{ width: 190 }}
          onChange={(e) => setRePw(e.target.value)}
          value={rePw}
        />
      </div>

      <div className="h-5" />

      <div className="text-basic">비밀번호는 본인 확인 및 예약 취소시 사용됩니다.</div>

      <div className="h-10" />


      <div className="text-red-500">{errMessage}</div>

      <div className="h-6" />

      <a
        href="#"
        className="flex flex-col items-center justify-center w-32 h-9 bg-button rounded-xl"
        onClick={clickReserveButton}
      >

        <div>예약하기</div>
      </a>
      <div className="h-6" />


    </div>
  );
}