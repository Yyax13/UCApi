"use client";

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const goTo = (link) => {
    router.push(link);
  };

  return (
    <div className="bg-zinc-800 min-h-screen flex flex-col items-center justify-center">
      <p className="text-zinc-100 font-semibold text-9xl text-center mb-8">API Abaixo</p>
      <button
        className="text-cyan-700 text-lg italic text-center mb-8 mt-12 bg-cyan-100 rounded-lg p-4"
        onClick={() => goTo("/APIGateway/UC-API")}
      >
        aaaaaaa
      </button>
    </div>
  );
}
