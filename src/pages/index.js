import Head from 'next/head'
import Login from './login'
import Register from './register'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  );
}

