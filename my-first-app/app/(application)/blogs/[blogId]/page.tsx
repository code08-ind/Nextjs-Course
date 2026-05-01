import Link from "next/link";
import { notFound } from "next/navigation";

// By default it is true and the pages are not provided here, so that page gets generated as and when the user visits the page and that will be generated on fly.
export const dynamicParams = false;

export const revalidate = 10;

// Generate Static Params
export async function generateStaticParams() {
  return [{ blogId: "1" }, { blogId: "2" }, { blogId: "3" }];
}

export default async function Blog({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  // This params can be single level only nested and we cannot have /text after it.'
  const { blogId } = await params;
  if (!/^\d+$/.test(blogId)) {
    // open the not found page when number is not entered here in blogId
    notFound();
  }

  return (
    <>
      <h1>Hello with blog {blogId}</h1>
    </>
  );
}
