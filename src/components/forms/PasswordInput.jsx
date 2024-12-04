import { useState } from "react";

function PasswordInput() {
  const [password, setPassword] = useState();
  return (
    <div className="flex flex-col">
      <input
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder=""
        className="peer text-lg text-gray-500 font-semibold px-3 border-2 border-gray-300 outline-none focus:border-buttonTextColor  py-3 transition duration-300 ease-in-out rounded-md "
      />
      <label
        htmlFor="password"
        className="absolute left-3 top-2 text-gray-300 text-xs sm:text-sm transition-all duration-300 ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-semibold peer-focus:top-2 peer-focus:text-sm "
      >
        Password
      </label>
    </div>
  );
}

export default PasswordInput;
