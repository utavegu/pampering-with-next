import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/MainPage.module.css'


// export function MainLayout({ children, title:string = 'Next App' }) {
// Лучше сделай дефолт пропс 
export function MainLayout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title} | Create Next App</title>
        <meta name="keywords" content="next,javascript,react,nextjs" />
        <meta name="description" content="Generated by create next app" />
        <meta charSet="utf-8" />        
        <link rel="icon" href="/favicon.ico" />
        {/* ШТУКА ДЛЯ АДАПТИВНОСТИ */}
      </Head>

      <div className={styles.container}>

        <header>
          <nav>
            <ul>
              <li>
                <Link href={'/'}><a>Главная</a></Link>
              </li>
              <li>
                <Link href={'/contacts'}><a>Контакты</a></Link>
              </li>
              <li>
                <Link href={'/gallery'}><a>Галерея</a></Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className={styles.main}>
          {children}
        </main>

        <footer className={styles.footer}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </footer>

      </div>

      <style jsx>{`
      
      `}</style>
    </>
  )
}