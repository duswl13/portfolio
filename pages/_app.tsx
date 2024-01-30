import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CommonContextProvider } from "@/lib/CommonContext";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import TopButton from "@/components/TopButton";
import LodingButton from "@/components/LodingButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/global.css";

SyntaxHighlighter.registerLanguage("tsx", tsx);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>장연지 포트폴리오</title>
      </Head>
      <CommonContextProvider>
        <Header />
        <Component {...pageProps} />
        <LodingButton />
        <TopButton />
        <Footer />
      </CommonContextProvider>
      {/* <Script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin="anonymous" /> */}
    </>
  );
}
