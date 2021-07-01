import Head from 'next/head'
import { Header } from 'components/organisms/Header'

const Home = () => {

  return (
    <div className="w-full">
      <Head>
        <title>mktbsh.github.io</title>
      </Head>
      <Header />
    </div>
  )
}

export default Home

