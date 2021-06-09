// import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          font-family: 'Roboto', sans-serif;
          color: red;
          /*фонтсайз в рэмах*/
        }
      `}</style>
    </>
  )
}

export default MyApp
