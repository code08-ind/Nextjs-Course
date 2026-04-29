import Link from "next/link";

export default async function Home({
  searchParams,
  params,
}: {
  searchParams: Record<string, string | string[] | undefined>;
  params: Record<string, string>;
}) {
  // searchParams will give us the params passed inside the url text.
  console.log(searchParams);
  return (
    <div>
      <h1>Technical Agency</h1>
      <Link href="/about">About</Link>
      <Link href="/files">Files</Link>
    </div>
  );
}
