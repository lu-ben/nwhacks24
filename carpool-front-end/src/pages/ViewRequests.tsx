
import { Card } from "../components/Card";
import { Header } from "../components/Header";

export const ViewRequests = () => {
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
    {
      imgSrc: "https://picsum.photos/200/300",
      to: "dd",
      from: "ubc",
      date: "Jan 20",
    },
    {
      imgSrc: "https://picsum.photos/200/300",
      to: "dd",
      from: "ubc",
      date: "this date",
    }
  ]
  return (
    <div>
      <Header back info="You are currently" underlined="Accepting Requests" marginBottom="mb-12" children={
        <div className="">
            {requests.map((card) => (
              <Card
                imgSrc={card.imgSrc}
                from={card.from}
                to={card.to}
                date={card.date}
              />
            ))}
        </div>
      } />
    </div>
  )
};
