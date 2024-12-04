function CommonBtn({text}) {
    return (
      <button className="text-base font-bold text-buttonTextColor border-2 border-buttonTextColor/45 bg-white w-full rounded-3xl py-3 flex justify-center items-center font-sans">
        {text}
      </button>
    );
}

export default CommonBtn
