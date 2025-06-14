import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{process.env.NEXT_PUBLIC_SITE_NAME || 'いとや旅館'}</h1>
        <p>山形県南陽市 熊野大社の麓宮内にある老舗旅館です</p>


      </main>
    </div>
  );
}
