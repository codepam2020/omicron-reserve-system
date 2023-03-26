import { useState } from "react";
import { Link } from "react-router-dom";
import CustomAlert from "./custom_alert";
import { resetRegularReserve, resetFreeReserve } from "../../data/firebase";

export default function ManageContent () {

  const [regAlertVisible, setRegAlertVisible] = useState(false);
  const [freeAlertVisible, setFreeAlertVisible] = useState(false);

  function clickRegResetButton () {
    setRegAlertVisible(true);
  }

  function clickFreeResetButton () {
    setFreeAlertVisible(true);
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

  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen">
      <Link to="#!" onClick={clickRegResetButton}>정규훈련 Reset</Link>
      <div className="h-8" />
      <Link to="#!" onClick={clickFreeResetButton}>자율훈련 Reset</Link>

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