import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Blog({ params }: { params: Promise<{ blogId: string }> }) {
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
