import { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Modal } from "../components/Modal";
import { useNavigate } from "react-router-dom";

export const AcceptedRequests = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const requests = [
    {
      imgSrc: "https://picsum.photos/200/300",
      to: "dd",
      from: "ubc",
      time: "Jan 21",
      name: "John Smith",
      title: "Student at UBC",
      number: "4376578912"
    },
    {
      imgSrc: "https://picsum.photos/200/300",
      to: "here",
      from: "there",
      time: "May 17",
      name: "Mary Janes",
      title: "Professor at UBC",
      number: "2266568273"
    },
  ]

  const handleCardClick = (cardData:any) => {
    setSelectedCard(cardData);
    setIsModalOpen(true);
  };

  return (
    <div>
      <Header back info="You are currently viewing" underlined="Accepted Requests" marginBottom="mb-12" onClick={() => navigate("../")} children={
        <div className="mb-1">
          {requests.map((card, index) => (
            <div key={index} onClick={() => handleCardClick(card)}>
              <Card
                imgSrc={card.imgSrc}
                from={card.from}
                to={card.to}
                time={card.time}
                add={false}
              />
            </div>
          ))}
        </div>
      } />
      <div className="flex flex-col items-center">
        <div className="flex bg-light-gray text-black rounded-3xl w-fit py-4 px-6 mt-4 items-center">
          <div className="text-lg mr-2">Start Trip</div><MdArrowRightAlt size={32} />
        </div>
        <div className="mt-4">
          <div className="underline text-xl" onClick={() =>{ navigate("../viewRequests")}}>more requests</div>
        </div>
      </div>
      {isModalOpen && selectedCard && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
          <div className=" rounded-lg bg-black shadow-lg w-full" onClick={e => e.stopPropagation()}>
          <Modal
            imgSrc={selectedCard.imgSrc}
            name={selectedCard.name}
            title={selectedCard.title}
            number={selectedCard.number}
          />
        </div>
        </div>
      )}
    </div>
  )
};
