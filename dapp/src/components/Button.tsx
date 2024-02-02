"use client";
import { login } from "@/service/web3Service";
import { useState } from "react";

export function Button() {
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    const wallet = await login();
    console.log(wallet);
  };
  return (
    <button
      type="button"
      className="btn btn-primary btn-lg px-4 me-md-2"
      onClick={handleClick}
    >
      <img
        src="/metamask.svg"
        width={64}
        alt="Conectar com Metamask"
        className="me-3"
        title="Conectar com Metamask"
      />
      Conectar com Metamask
      <p className="message">{message}</p>
    </button>
  );
}
