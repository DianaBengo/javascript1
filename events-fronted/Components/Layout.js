import Head from "next/head";
import {useRouter} from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import ShowCase from "./ShowCase";
import styles from "../styles/Layout.module.css";

export default function Layout({ title, keywords, description, children }) {
  const router= useRouter();//to read path
  console.log(useRouter )
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname=== "/" && <ShowCase/>}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultprops *
  {
    title: "FemiEvents",
    description: "Find the latest musical events and concerts",
    keywords: "music, dance, rock, bands",
  };
