"use client";
import Head from "next/head";

export default function Home() {
  const handleClick = () => {
    console.log("handleClick");
  };
  return (
    <div>
      <Head>
        <title>Webbb3 | Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse allign-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              className="d-block mx-lg-auto img-fluid"
              src="https://aventurasnahistoria.uol.com.br/media/_versions/bbb_HiXlDX3_widelg.jpg"
              alt="bbb-mascote"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb3">
              Webbb3
            </h1>
            <p className="lead">Votação On-chain do BBB.</p>
            <p className="lead mb-3">
              Autentique-se com sua carteira e deixe seu voto para o Paredão
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
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
            </div>
          </div>
        </div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-body-secondary">
            &copy; 2024 Webbb3, INC
          </p>
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
