import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { config } from '../config'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{config.name}</title>
        <meta name="description" content={config.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to {config.name}!
        </h1>

        <p className={styles.description}>
          {config.description}
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://backstage.io/docs" className={styles.card}>
            <h2>Backstage &rarr;</h2>
            <p>Learn about the platform that created this application.</p>
          </a>

          <a
            href={`https://github.com/${config.repoOwner}/${config.repoName}`}
            className={styles.card}
          >
            <h2>Repository &rarr;</h2>
            <p>View the source code on GitHub.</p>
          </a>

          <a
            href={`https://${config.azureWebAppName}.azurewebsites.net`}
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>Deployed on Azure Web App with CI/CD.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Powered by Next.js | Deployed on Azure | Created with Backstage
        </p>
      </footer>
    </div>
  )
}
