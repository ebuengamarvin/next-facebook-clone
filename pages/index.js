import Head from 'next/head';
import Header from '../components/Header';
import { getSession } from 'next-auth/client';
import Login from '../components/Login';

export default function Home({ session }) {
  console.log({ session });
  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="Facebook CLone" content="Clone by Marvin Ebuenga" />
      </Head>

      <Header />

      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
