"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function Form() {
  const [email, setEmail] = useState("");

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const router = useRouter();

  const handleReset = () => {
    router.push("/Dashboard");
  };
  return (
    <div>
      <form className="flex flex-col items-center justify-center h-96 w-96 bg-gradient-to-tr from-slate-400 via-green-200 to-pink-400 border-2 rounded-xl text-left">
        <Input
          type="email"
          placeholder="john@doe.com"
          fieldName="Enter Your Email"
          value={email}
          onChange={handleEmail}
        />
        <Button text="Reset" onClick={handleReset} />
        <p className="mt-5 text-center">
          Enter your account Email and we will send you a reset link to reset
          your password
        </p>
      </form>
    </div>
  );
}

export default Form;
