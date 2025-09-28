

import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to ALX Next.js Project!
        </h1>
      </main>
    </>
  );
}
