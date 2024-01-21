import { Header } from "../components/Header";

export const RideCancelled = () => {
  return(
    <div>
      <Header back={false} info="Due to unforseen circumstances..." underlined="" marginBottom="mb-12" children={
          <div className="flex flex-col text-white text-center text-2xl rounded-3xl w-full px-6 py-10 mb-8">
            <div className="mt-20 mb-20">
              <div className="underline  text-5xl mb-4 ">Sorry!</div>
              <div className="text-2xl ">Your ride has been cancelled :(</div>
            </div>
          </div>
      }/>
      <div className="underline text-white text-2xl">New Request</div>
    </div>
  )
}