import Heading from "../Heading";
import AdvertCard from "./AdvertCard";


function Advert() {
  return (
    <div className="bg-white flex flex-col gap-3  md:px-10 lg:px-16 py-12">
      <Heading text={"PayPal is for everyone who pays or gets paid."} />
      <div className="flex gap-3 flex-col md:flex-row">
        <AdvertCard
          image={"/img-1.jpg"}
          heading={"Individuals"}
          text={
            "Find out why we have more than 200M active accounts worldwide."
          }
        />
        <AdvertCard
          image={"/img-2.jpg"}
          heading={"Businesses"}
          text={
            "Join more than 7 million businesses around the world offering PayPal."
          }
        />
        <AdvertCard
          image={"/img-3.jpg"}
          heading={"Partners and developers"}
          text={
            "Work with PayPal to offer your customers world class payment solutions."
          }
        />
      </div>
    </div>
  );
}

export default Advert;
