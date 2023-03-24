import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate, Link } from "react-router-dom";

export default function Appbar ({ title }: { title: string; }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row w-screen items-center justify-center h-12 shadow-md px-3">

      <Link to="/" className="absolute right-3" >
        <HomeIcon sx={{ fontSize: 30, marginBottom: 1 }} />
      </Link>

      <Link to="#" className="absolute left-3" onClick={() => {
        navigate(-1);
      }}>
        <ArrowBackIcon sx={{ fontSize: 30, marginBottom: 1 }} />
      </Link>



      <div className="text-basic text-title pb-2 font-bold">{title}</div>
    </div>

  );
}