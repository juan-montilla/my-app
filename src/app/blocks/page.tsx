import Block from '../../app/components/atoms/block';

export default function Blocks() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="
      flex min-h-screen w-1/2 max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <kbd> This is Blocks </kbd>
        <Block />
      </main>
    </div>
  );
}
