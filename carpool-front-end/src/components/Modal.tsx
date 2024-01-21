
type ModalProps = {
  imgSrc: string;
  name: string;
  title: string;
  number: string;
}

export const Modal = ({ imgSrc, name, title, number,}: ModalProps) => {
  return (
    <div className="flex flex-col items-center bg-light-gray text-black text-2xl rounded-3xl w-full px-6 py-10">
        <div><img src={imgSrc} alt="Profile pic" className="rounded-full h-36 w-36 object-cover mb-4"/></div>
        <div className="font-bold text-4xl mb-2">{name}</div>
        <div className="mb-8">{title}</div>
        <div className="">{number}</div>
    </div>
  )
}
