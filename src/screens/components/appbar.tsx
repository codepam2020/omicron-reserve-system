import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

export default function Appbar ({ title }: { title: string; }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row w-screen items-center justify-center h-12 shadow-md px-3">
      <a className="absolute left-3" onClick={() => {
        navigate('/');
      }}>
        <ArrowBackIcon sx={{ fontSize: 30, marginBottom: 1 }} />
      </a>
      <div className="text-basic text-title pb-2 font-bold">{title}</div>
    </div>

  );
}