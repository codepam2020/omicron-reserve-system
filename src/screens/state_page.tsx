import React, { useEffect, useState } from "react";
import { Appbar, FreeTrainingState, RegularTrainingState } from "./components";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function StatePage () {

  const [trainingType, setTrainingType] = useState('정규훈련');

  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-screen p-2">
      <Appbar title="예약현황" />

      <div className="h-8" />




      <FormControl size="small" sx={{ width: 190 }}>
        <InputLabel id="demo-simple-select-label">훈련 종류</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={trainingType}
          label="훈련 타입"
          onChange={(e: SelectChangeEvent) => { setTrainingType(e.target.value); }}
        >
          <MenuItem value="정규훈련">정규훈련</MenuItem>
          <MenuItem value="자율훈련">자율훈련</MenuItem>
        </Select>
      </FormControl>
      <div className="h-5" />
      {trainingType == '정규훈련' ?
        <RegularTrainingState /> :
        <FreeTrainingState />
      }



    </div>
  );
}