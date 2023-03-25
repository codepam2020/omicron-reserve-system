import { useState } from 'react';
import { Appbar, CustomButton } from "./components";
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { ManageContent } from "./components";

export default function ManagaPage () {

  const [pw, setPw] = useState('');
  const [visible, setVisible] = useState(false);

  function clickButton () {
    if (pw === '960221') {
      setVisible(true);
    } else {
      alert('비밀번호를 다시 확인하세요');
    }
  }

  return (

    <div className="flex flex-col items-center justify-start w-screen min-h-screen p-2">

      <Appbar title="관리자 페이지" />

      <div className="h-8" />
      {visible ?
        <ManageContent />
        :
        <div className="flex flex-col items-center w-full">
          <div className="mt-10">
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

          <Link to="#" onClick={clickButton} className="flex flex-col items-center justify-center w-32 h-9 bg-button rounded-xl">
            <div className="text-basic">확인</div>
          </Link>

        </div>
      }



    </div>
  );
}