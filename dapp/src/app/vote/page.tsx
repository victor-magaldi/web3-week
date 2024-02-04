"use client";

import { Footer } from "@/components/Footer";
import { getCurrentVotin, addvote } from "@/service/web3Service";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const { push } = useRouter();
  const [voting, setVoting] = useState<any>({ maxDate: Date.now() });
  const [option1, setOption1] = useState({
    name: "Loading",
    image: "/avatar.jpg",
  });
  const [option2, setOption2] = useState({
    name: "Loading",
    image: "/avatar.jpg",
  });
  const [showVotes, setShowVotes] = useState(0);

  useEffect(() => {
    const wallet = localStorage.getItem("wallet");
    if (!wallet) push("/");

    getCurrentVoting().then((voting: any) => {
      console.log(voting);

      setOption1({
        name: voting.option1,
        image: "/avatar.jpg",
      });
      setOption2({
        name: voting.option2,
        image: "/avatar.jpg",
      });
      setVoting(voting);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Webbb3 | Vote</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row align-items-center">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Webb3
          </h1>
          <p className="lead">Votação on-chain do BBB.</p>
          {voting.maxDate > Date.now() / 1000 ? ( // Block chain armazena o tempo em segundos e js em milisegundos
            <p className="lead mb-3">
              Você tem até {new Date(Number(voting.maxDate) * 1000).toString()}{" "}
              para deixar seu voto em um dos participantes abaixo para que ele
              saia do programa.
            </p>
          ) : (
            <p className="lead mb-3">
              Votação encerrada, confira abaixo os resultados
            </p>
          )}
        </div>
        <div className="row flex-lg-row align-items-center g-1 py-5">
          <div className="col-1"></div>
          <div className="col-5">
            <h3 className="my-2 d-block mx-autor" style={{ width: 250 }}>
              {option1.name}
            </h3>
            <img
              src={option1.image}
              alt={option1.name}
              className="d-block mx-auto img-fluid rounded"
              width={250}
              height={250}
            />
            {showVotes > 0 || voting.maxDate < Date.now() / 1000 ? (
              <button
                className="btn btn-secondary p-3 my-2 d-block mx-auto"
                disabled={true}
              >
                {showVotes === 2
                  ? Number(voting.votes1) + 1
                  : Number(voting.votes1)}
              </button>
            ) : (
              <button
                className="btn btn-primary p-3 my-2 d-block mx-auto"
                disabled={false}
                onClick={() => {
                  console.log("vote1");
                }}
              >
                {showVotes === 2
                  ? Number(voting.votes1) + 1
                  : Number(voting.votes1)}
              </button>
            )}
          </div>
          <div className="col-5">
            <h3 className="my-2 d-block mx-autor" style={{ width: 250 }}>
              {option2.name}
            </h3>
            <img
              src={option2.image}
              alt={option2.name}
              className="d-block mx-auto img-fluid rounded"
              width={250}
              height={250}
            />
            {showVotes > 0 || voting.maxDate < Date.now() / 1000 ? (
              <button
                className="btn btn-secondary p-3 my-2 d-block mx-auto"
                disabled={true}
              >
                {showVotes === 2
                  ? Number(voting.votes2) + 1
                  : Number(voting.votes2)}
              </button>
            ) : (
              <button
                className="btn btn-primary p-3 my-2 d-block mx-auto"
                disabled={false}
                onClick={() => {
                  console.log("vote1");
                }}
              >
                {showVotes === 2
                  ? Number(voting.votes2) + 1
                  : Number(voting.votes2)}
              </button>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
