import React from "react";

type PropsType = {
  placeholder: string;
  type: string;
  fieldName: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ placeholder, type, fieldName, value }: PropsType) {
  return (
    <div>
      <label className="text-gray-700 font-bold text-lg">{fieldName}:</label>
      <input
        className="sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 mb-8"
        placeholder={placeholder}
        type={type}
        required
      ></input>
    </div>
  );
}

export default Input;
