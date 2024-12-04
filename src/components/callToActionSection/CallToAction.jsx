import CommonBtn from "../buttons/CommonBtn";
import CallActionText from "./CallActionText";

function CallToAction() {
  return (
    <div className="pb-5">
      <div className="bg-radial-center w-full py-20  px-5">
        <div className="flex flex-col items-center gap-6">
          <h1 className="sm:text-3xl text-2xl font-normal font-serif text-white text-start  ">
            Join 200M active PayPal accounts worldwide.
          </h1>

          <div className="flex gap-4 lg:px-20 flex-col md:flex-row">
            <CallActionText
              heading={"Safer and protected"}
              more={"More about security"}
              text={
                "Shop with peace of mind. We don’t share your full financial information with sellers. And PayPal Buyer Protection covers your eligible purchases if they don’t show up or match their description."
              }
            />
            <CallActionText
              heading={"Across devices, worldwide"}
              more={"Get the mobile app"}
              text={
                "With just one account, you can shop at millions of merchants around the world, and pay for goods or services almost anywhere. Use any of your devices to manage your account on the go with the PayPal app."
              }
            />
            <CallActionText
              heading={"Mostly free, always upfront"}
              more={"More about fees"}
              text={
                "It’s free to open a PayPal account and buy something using PayPal unless it involves a currency conversion. There may be fees for other transactions."
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-7 mt-10">
        <h2 className="lg:text-4xl sm:3xl text-2xl font-normal font-serif text-headingPrimary">
          Sign up and get started.
        </h2>
        <button className="text-base font-bold bg-buttonTextColor max-w-80 border-2 border-buttonTextColor/45 text-white w-full rounded-3xl py-3 flex justify-center items-center font-sans">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default CallToAction;
