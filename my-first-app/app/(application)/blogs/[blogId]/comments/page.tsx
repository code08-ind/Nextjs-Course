export default async function Comments({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  return (
    <>
      <h1>Welcome to Comments of blog {blogId} </h1>
    </>
  );
}
