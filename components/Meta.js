import Head from "next/head";

export default () => (
  <div>
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
        key="viewport"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="shortcut icon" href="/favicon.ico"></link>
      <title>Justin Gaba | Software Engineer</title>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans|Raleway|Noto+Sans:400,600,700&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
      />
    </Head>
    <style jsx global>{`
      body {
        background: #00000002;
        background-position: 0 0, 25px 25px;
        background-size: 50px 50px;
        margin: 0;
        font-family: "Noto Sans";
      }
    `}</style>
  </div>
);
