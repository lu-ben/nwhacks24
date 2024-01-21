
import { Header } from "../components/Header";

export const RideAccepted = () => {

  return (
    <div>
      <Header back={false} info="Your ride request has been" underlined="Accepted" marginBottom="mb-12" children={
        <div>
          <div className="flex flex-col items-center bg-light-gray text-black text-2xl rounded-3xl w-full px-6 py-10 mb-12">
            <div><img src="https://picsum.photos/200/300" alt="Profile pic" className="rounded-full h-36 w-36 object-cover mb-4"/></div>
            <div className="font-bold text-4xl mb-2">John Smith </div>
            <div className="mb-8">Tesla Model 3</div>
            <div className="">(778) 123-4567</div>
          </div>

          <div className="underline text-2xl">Reject Driver</div>
        </div>
      }/>
    </div>
  )
}
