function CallActionText({heading,text,more}) {
    return (
      <div className="flex flex-col items-start px-2 py-2 gap-3">
        <h2 className="sm:text-2xl text-xl font-normal text-white text-start  ">
          {heading}
        </h2>
        <p className="text-base font-semibold font-sans text-start text-white">
         {text}
        </p>
        <span className="font-bold text-base font-serif text-white hover:underline">{more}</span>
      </div>
    );
}

export default CallActionText
