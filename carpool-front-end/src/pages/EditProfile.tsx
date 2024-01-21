import { Header } from '../components/Header';

export const EditProfile = () => {
    return (
      <div>
        <Header back={false} info="Fill in your information to" underlined="Complete Sign-up" marginBottom='mb-16'
          children={
            <div className='text-left text-lg'>
              <div>
                <div>Phone Number</div>
                <input className="bg-light-gray text-black w-full h-14 outline-none rounded-2xl px-6 mt-2" type="number" />
              </div>

              <div className="mt-6 mb-16">
                <div>Car Model + Make (Optional)</div>
                <input className="bg-light-gray text-black w-full h-14 outline-none rounded-2xl px-6 mt-2" type="string" />
              </div>

              <div className='text-center'>
                <div className='text-3xl underline'>Submit</div>
              </div>
            </div>
          }
        />
      </div>
    )
};
