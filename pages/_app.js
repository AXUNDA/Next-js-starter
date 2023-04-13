import Footer from '@/src/components/footer/Footer'
import Header from '@/src/components/header/Header'
import '@/styles/globals.css'
import '@/styles/general.css'
import Layout from '@/src/components/layout/Layout'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>



    </>



  )
}
