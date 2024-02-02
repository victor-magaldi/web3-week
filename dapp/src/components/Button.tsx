"use client";

export default function Button() {
  const handleClick = () => {
    console.log("handleClick");
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
    </button>
  );
}
