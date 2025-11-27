import { headers } from 'next/headers';

export default async function Headers() {
  const headersList = await headers();
  const headersArray = Array.from(headersList.entries());

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-start justify-start py-32 px-16 bg-white dark:bg-black">
        <kbd className="mb-8">HTTP Headers</kbd>
        <div className="w-full space-y-2">
          {headersArray.map(([key, value]) => (
            <div key={key} className="border-b border-zinc-200 dark:border-zinc-800 py-2">
              <div className="text-sm font-mono text-zinc-500 dark:text-zinc-400">{key}</div>
              <div className="text-sm font-mono break-all">{value}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
