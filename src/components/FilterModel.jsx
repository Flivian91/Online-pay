import React from "react";

function FilterModel({onClose}) {
  return (
    <div className="absolute top-full -left-8 md:left-1/2 md:-translate-x-1/2 flex flex-col gap-2 px-3 py-3 bg-gray-100 transition-all duration-300 rounded shadow-md">
      <button onClick={onClose} className="text-lg font-bold px-4 py-1 tracking-wide hover:bg-gray-200 rounded">
        Done
      </button>
      <button onClick={onClose} className="text-lg font-bold px-4 py-1 tracking-wide hover:bg-gray-200 rounded">
        Pending
      </button>
    </div>
  );
}

export default FilterModel;
