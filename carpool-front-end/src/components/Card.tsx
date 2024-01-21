
type CardProps = {
  imgSrc: string;
  to: string;
  from: string;
  time: string;
  date: string;
}

export const Card = ({ imgSrc, to, from, time, date }: CardProps) => {
  return (
    <div className="flex bg-light-gray text-black rounded-3xl w-full p-4 mb-4 items-center">
      <div><img src={imgSrc} alt="Profile pic" className="rounded-full h-12 w-12 object-cover mr-4"/></div>
      <div className="text-left leading-5">
        <div className="line-clamp-1"><span className="font-bold">To: </span>{to}</div>
        <div className="line-clamp-1"><span className="font-bold">From: </span>{from}</div>
        <div className="text-xs line-clamp-1 mt-1">{time}</div>
        <div className="text-xs line-clamp-1 mt-1">{date}</div>
      </div>
    </div>
  )
}
