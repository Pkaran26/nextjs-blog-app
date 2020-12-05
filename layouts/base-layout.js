import Head from 'next/head'
import Header from '../components/header'

export default function BaseLayout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{ title } | Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container">{ children }</div>
    </div>
  )
}
