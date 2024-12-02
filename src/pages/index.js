import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lift Monkey</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className={`${styles.page}`}
      >
        <main className={styles.main}>Hello, world!</main>
      </div>
    </>
  );
}