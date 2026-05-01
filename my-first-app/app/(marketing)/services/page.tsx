import { cookies } from "next/headers";
import Link from "next/link";

// This will make the page generated dynamically. This will render dynamically again and again if we come to this page again and again.
export const dynamic = "force-dynamic";

export default async function Services({ searchParams }) {
  const search = await searchParams;
  console.log(search);

  const myCookies = await cookies();
  console.log(myCookies);

  return (
    <>
      <h1>Welcome to services page</h1>
      <Link href="/services/web-dev">Web Development</Link>
    </>
  );
}
