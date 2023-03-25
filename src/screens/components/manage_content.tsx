import { useState } from "react";
import { Link } from "react-router-dom";
import CustomAlert from "./custom_alert";

export default function ManageContent () {

  const [regAlertVisible, setRegAlertVisible] = useState(false);
  const [freeAlertVisible, setFreeAlertVisible] = useState(false);

  function clickRegResetButton () {
    setRegAlertVisible(true);
  }

  function clickFreeResetButton () {
    setFreeAlertVisible(true);
  }

  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen">
      <Link to="#" onClick={clickRegResetButton}>정규훈련 Reset</Link>
      <div className="h-8" />
      <Link to="#" onClick={clickFreeResetButton}>자율훈련 Reset</Link>

      {regAlertVisible ?
        <CustomAlert title="정규훈련 Reset" clickYes={() => { }} clickNo={() => { setRegAlertVisible(false); }} />
        : <div />}
      {freeAlertVisible ?
        <CustomAlert title="자율훈련 Reset" clickYes={() => { }} clickNo={() => { setFreeAlertVisible(false); }} />
        : <div />}

    </div>
  );
}