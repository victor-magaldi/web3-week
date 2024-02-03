"use client";
import { login } from "@/service/web3Service";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Button() {
  const { push } = useRouter();
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    try {
      await login();
      setMessage("Conectado na Carteira");
      push("/vote");
    } catch (err) {
      setMessage("não foi possível se conectar em sua carteira");
      throw new Error(`err==>${err}`);
    }
  };
  return (
    <div className="d-flex flex-column bd-highlight mb-3">
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
      </button>
      <br />
      <p className="message">{message}</p>
    </div>
  );
}
