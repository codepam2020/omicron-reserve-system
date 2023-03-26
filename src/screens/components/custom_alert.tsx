import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50%;
  border-radius: 15px;
  width: 70%;
  height: 120px;
  background-color: white;
  box-shadow: 2px 8px 10px lightgray;
  transform: translate(-50%,-50%);
`;

export default function CustomAlert ({ title, clickYes, clickNo }: { title: string, clickYes: any, clickNo: any; }) {
  return (
    <div className="absolute w-screen h-full">
      <Container>
        <div className="flex flex-col items-center justify-center p-3">
          <div className="text-xl mt-4">{title}</div>
          <div className="h-5" />
          <div className="flex flex-row w-10/12 justify-around">
            <Link to="#!" onClick={clickYes}>예</Link>
            <Link to="#!" onClick={clickNo}>아니요</Link>
          </div>
        </div>


      </Container>
    </div>
  );
}