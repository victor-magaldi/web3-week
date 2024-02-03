import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Webbb3 | Vote</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container col-xxl-8 px-4 py-5">
        <Footer />
      </div>
    </div>
  );
}
