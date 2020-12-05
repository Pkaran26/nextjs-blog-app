import Head from 'next/head'

export default function BaseLayout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{ title } | Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { children }
    </div>
  )
}
