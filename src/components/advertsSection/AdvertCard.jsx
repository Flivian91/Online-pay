import Image from "next/image";
import CommonBtn from "../buttons/CommonBtn";

function AdvertCard({ heading, text, image }) {
  return (
    <div className="flex flex-col items-center gap-5 mt-12 px-4 py-2">
      <Image
        src={image}
        alt="image"
        width={100}
        height={100}
        className="h-20 w-20 object-cover"
      />
      <h3 className="text-gray-600 font-light text-xl">{heading}</h3>
      <p className="text-base text-gray-500 font-semibold text-center">{text}</p>
      <div className="w-full">
        <CommonBtn text={"Learn More"} />
      </div>
    </div>
  );
}

export default AdvertCard;
