import { MdAdd, MdClear } from "react-icons/md";

type CardProps = {
  imgSrc: string;
  to: string;
  from: string;
  time?: string;
  date: string;
  add: boolean;
  onClick: any;
}

export const Card = ({ imgSrc, to, from, time, date, add, onClick }: CardProps) => {
  return (
    <div className="flex bg-light-gray text-black rounded-3xl w-full p-4 mb-4 items-center">
      <div><img src={imgSrc} alt="Profile pic" className="rounded-full h-12 w-12 object-cover mr-4"/></div>
      <div className="text-left leading-5 shrink-[20]">
        <div className="line-clamp-1"><span className="font-bold">To: </span>{to}</div>
        <div className="line-clamp-1"><span className="font-bold">From: </span>{from}</div>
        <div className="text-xs line-clamp-1 mt-1">{time}</div>
        <div className="text-xs line-clamp-1 mt-1">{date}</div>
      </div>
      <div className="ml-auto mr-2">{add ? <MdAdd size={28} onClick={onClick}/> : <MdClear size={28} onClick={onClick}/>}</div>
    </div>
  )
}
