
import { MdArrowRightAlt } from "react-icons/md";
import { Card } from "../components/Card";
import { Header } from "../components/Header";

export const AcceptedRequests = () => {
  const requests = [
    {
      imgSrc: "https://picsum.photos/200/300",
      to: "dd",
      from: "ubc",
      date: "Jan 21",
    },
    {
      imgSrc: "https://picsum.photos/200/300",
      to: "here",
      from: "there",
      date: "May 17",
    },
  ]

  return (
    <div>
      <Header back={false} info="You are currently viewing" underlined="Accepted Requests" marginBottom="mb-12" children={
        <div className="mb-1">
            {requests.map((card) => (
              <Card
                imgSrc={card.imgSrc}
                from={card.from}
                to={card.to}
                date={card.date}
                add={false}
              />
            ))}

        </div>
      } />
      <div className="flex flex-col items-center">
        <div className="flex bg-light-gray text-black rounded-3xl w-fit py-4 px-6 mt-4 items-center">
          <div className="text-lg mr-2">Start Trip</div><MdArrowRightAlt size={32} />
        </div>
        <div className="mt-4">
          <div className="underline text-xl">more requests</div>
        </div>
      </div>
    </div>
  )
};
