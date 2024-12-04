import { MdArrowBackIos } from "react-icons/md";
import CardConnects from "./CardConnects";
const forSellers = [
  {
    image: "/For_Sellers_1.png",

    text: "Set up a business account.",
  },

  {
    image: "/For_Sellers_2.png",
    text: "Choose the features you want to start with. You can go back, change or add to them later.",
  },
  {
    image: "/For_Sellers_3.png",
    text: "Integrate PayPal via a partner, a developer or by yourself.",
  },
];

function ForSellers({ active }) {
  return (
    <>
      <div className="md:hidden">
        <CardConnects
          tab={active}
          image={forSellers[active - 1].image}
          text={forSellers[active - 1].text}
        />
      </div>

      <div className="hidden  md:flex px-0 gap-2 items-center ">
        <CardConnects
          label={"1"}
          image={"/For_Sellers_1.png"}
          text={"Set up a business account."}
        />
        {
          <MdArrowBackIos className="size-10 min-w-8 font-serif font-light text-gray-300 rotate-180 mb-20" />
        }

        <CardConnects
          label={"2"}
          image={"/For_Sellers_2.png"}
          text={
            "Choose the features you want to start with. You can go back, change or add to them later."
          }
        />
        {
          <MdArrowBackIos className="size-10 min-w-8 font-serif font-light text-gray-300 rotate-180 mb-20" />
        }
        <CardConnects
          label={"3"}
          image={"/For_Sellers_3.png"}
          text={"Integrate PayPal via a partner, a developer or by yourself."}
        />
      </div>
    </>
  );
}

export default ForSellers;
