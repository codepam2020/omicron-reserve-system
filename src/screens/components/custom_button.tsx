import { Link } from "react-router-dom";

export default function CustomButton ({ title, to }: CustomButtonType) {
  return (
    <Link
      className="flex flex-col items-center justify-center w-32 h-9 bg-button rounded-xl"
      to={to}
    >
      <div className="text-basic">{title}</div>
    </Link>
  );
}

interface CustomButtonType {
  title: string;
  to: string;
}