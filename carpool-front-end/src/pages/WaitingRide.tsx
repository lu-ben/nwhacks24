
import { Header } from "../components/Header";

export const WaitingRide = () => {

  return (
    <div>
      <Header back={false} info="You are currently" underlined="Waiting for a ride" marginBottom="mb-12" children={
        <div>
          <div className="flex flex-col bg-light-gray text-black text-left text-2xl rounded-3xl w-full px-6 py-10 mb-8">
            <div className="mb-8"><div className="font-bold text-4xl mb-4">From: </div>Life Science Institute</div>
            <div className="mb-14"><div className="font-bold text-4xl mb-4">To: </div>Wesbrook Village</div>
            <div className="">9:00 PM</div>
          </div>

          <div className="underline text-2xl">Cancel</div>
        </div>
      }/>
    </div>
  )
}
