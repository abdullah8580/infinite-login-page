"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Input from "./Input";
import Button from "./Button";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const router = useRouter();
  const handleSubmit = () => {
    if (email === "" || password === "") {
      setError("Email and password are required!");
    } else {
      router.push("/Dashboard");
    }
  };

  return (
    <div>
      <form className="flex flex-col items-center justify-center h-96 w-96 bg-gradient-to-tr from-slate-400 via-green-200 to-pink-400 border-2 rounded-xl text-left">
        <Input
          placeholder="john@doe.com"
          type="email"
          fieldName="Email"
          value={email}
          onChange={handleEmail}
        />
        <Input
          type="password"
          placeholder="Enter Your Password"
          fieldName="Password"
          value={password}
          onChange={handlePassword}
        />
        {error}
        <Button text="Login" onClick={handleSubmit} />
        <p className="mt-5">
          Fogot Password?{" "}
          <Link href={"/PassReset"} className="hover:text-lg">
            Reset Here!
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Form;
