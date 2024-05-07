import React from "react";
import Form from "./Form";

type ButtonInput = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({ text, onClick }: ButtonInput) {
  return (
    <button
      className="px-5 py-2 my-5 text-gray-700 text-lg font-bold shadow-sm rounded-lg border-2 border-slate-400 ring-2 ring-slate-900/10 hover:text-xl bg-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
