import { useState } from "react";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import CustomAlert from "./custom_alert";
import { resetRegularReserve, resetFreeReserve, setTrainigReserveButtonVisible, } from "../../data/firebase";

export default function ManageContent () {

  const [regAlertVisible, setRegAlertVisible] = useState(false);
  const [freeAlertVisible, setFreeAlertVisible] = useState(false);
  const [openTime, setOpenTime] = useState('');


  function clickRegResetButton () {
    setRegAlertVisible(true);
  }

  function clickFreeResetButton () {
    setFreeAlertVisible(true);
  }

  function clickTrainingButtonShow () {
    setTrainigReserveButtonVisible(true);
    alert('예약 버튼 보이기 완료');
  }

  function clickTrainingButtonHidden () {
    setTrainigReserveButtonVisible(false);
    alert('예약 버튼 숨기기 완료');
  }

  function regReset () {
    resetRegularReserve();
    alert('reset 완료');
    setRegAlertVisible(false);
  }

  function freeReset () {
    resetFreeReserve();
    alert('reset 완료');
    setFreeAlertVisible(false);
  }

  function saveOpenTime () {
    const nowTime = new Date();
    const setedTime = new Date(openTime);
    nowTime > setedTime ? console.log('open') : console.log('closed');
  }


  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen">

      <Link to="#!" onClick={clickRegResetButton}>정규훈련 Reset</Link>
      <div className="h-8" />
      <Link to="#!" onClick={clickFreeResetButton}>자율훈련 Reset</Link>
      <div className="h-8" />
      <Link to="#!" onClick={clickTrainingButtonShow}>훈련 예약버튼 보이기</Link>
      <div className="h-8" />
      <Link to="#!" onClick={clickTrainingButtonHidden}>훈련 예약버튼 숨기기</Link>
      <div className="h-8" />
      <div>
        <TextField
          id="outlined-basic"
          label="자동 오픈 시간"
          variant="outlined"
          size="small"
          placeholder="2023-04-03 12:00"

          sx={{ width: 190 }}
          onChange={(e) => setOpenTime(e.target.value)}
          value={openTime}
        />
      </div>
      <div className="h-5" />
      <Link to="#" onClick={saveOpenTime}>오픈 시간 저장</Link>

      {
        regAlertVisible ?
          <CustomAlert title="정규훈련 Reset" clickYes={regReset} clickNo={() => { setRegAlertVisible(false); }} />
          : <div />
      }
      {
        freeAlertVisible ?
          <CustomAlert title="자율훈련 Reset" clickYes={freeReset} clickNo={() => { setFreeAlertVisible(false); }} />
          : <div />
      }

    </div>
  );
}