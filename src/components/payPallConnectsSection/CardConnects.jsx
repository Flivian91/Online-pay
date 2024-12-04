import Image from "next/image";

function CardConnects({ text, label, image, activeTab, tab }) {
  return (
    <>
      <div className="md:hidden flex flex-col gap-4 items-center justify-center ">
        <img src={image} alt="" className="max-w-48 object-cover w-full " />
        <div className="flex gap-2 lg:gap-4 justify-center items-center">
          <span className="md:w-14 md:h-14 min-w-12 min-h-12 rounded-full text-lg text-gray-700 flex justify-center items-center border-2 border-gray-400">
            {tab}
          </span>
          <p className=" text-base font-semibold tracking-normal text-gray-800 text-start lg:max-w-80 flex justify-start ">
            {activeTab === "buyers" ? (
              <p className="flex gap-1 text-start">
                <p className="font-bold hover:underline text-base text-buttonTextColor flex text-nowrap font-serif">
                  {text.split(" ").includes("Sign")
                    ? text.split(" ").slice(0, 2).join(" ")
                    : ""}
                </p>{" "}
                <p className="text-start flex justify-start">
                  {" "}
                  {text.split(" ").includes("Sign")
                    ? text.split(" ").slice(2).join(" ")
                    : text}
                </p>
              </p>
            ) : (
              <span
                className={`${
                  text === "Set up a business account."
                    ? "font-bold hover:underline text-base text-buttonTextColor flex text-nowrap"
                    : " "
                }`}
              >
                {text}
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="hidden md:flex flex-col gap-4 items-center justify-center ">
      <Image
              src={image}
              alt="Logo"
              width={100}
              height={100}
             className="max-w-48 object-cover w-full "
            />
       
        <div className="flex gap-4 justify-center items-center">
          <span className="  min-w-12 min-h-12 rounded-full text-lg text-gray-700 flex justify-center items-center border-2 border-gray-400">
            {label}
          </span>
          <p className=" text-base font-semibold tracking-normal text-gray-800 text-start lg:max-w-80 flex ">
            {activeTab === "buyers" ? (
              <p className="flex gap-1 text-start">
                <p className="font-bold hover:underline text-base text-buttonTextColor flex text-nowrap font-serif">
                  Sign up
                </p>{" "}
                <p className="text-start flex justify-start">{text}</p>
              </p>
            ) : (
              <span
                className={`${
                  text === "Set up a business account."
                    ? "font-bold hover:underline text-base text-buttonTextColor flex text-nowrap"
                    : " "
                }`}
              >
                {text}
              </span>
            )}
          </p>
        </div>
      </div>
    </>
  );
}

export default CardConnects;
