import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import LogoutButton from "./LogoutButton";

type HeaderProps = {
  back: boolean;
  info: string;
  underlined: string;
  marginBottom: string;
  children?: any;
}

export const Header = ({ back, info, underlined, marginBottom, children }: HeaderProps) => {
	const navigate = useNavigate();
  const goBack = () => {
		navigate(-1);
	}
  return (
    <div>
        <div className="mb-12 h-4 flex">
          {back && <div className="text-4xl" onClick={goBack}><MdArrowBack/></div>}
          <div className="ml-auto"><LogoutButton /></div>
        </div>
      <div className={`text-white w-3/5 ${marginBottom}`}>
        <div className="text-left">
          <div className="text-lg">{info}</div>
          <div className="underline text-4xl mt-1">{underlined}</div>
        </div>
      </div>

      <div>
        {children}
      </div>
    </div>
  )
}
