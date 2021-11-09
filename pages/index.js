import Head from 'next/head';
import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Text Blaze Gmail Analyzer</title>
        <meta name="description" content="Text Blaze Gmail Analyzer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a className={styles.analyzeLink} href="/api/analyzer">
          Analyze my emails
        </a>
      </main>
    </div>
  );
}
