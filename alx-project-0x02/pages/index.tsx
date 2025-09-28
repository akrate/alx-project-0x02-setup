import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome | ALX Project</title>
      </Head>
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to ALX Next.js Project!
        </h1>
      </main>
    </>
  );
}
