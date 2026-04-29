export default async function Comment({
  params,
}: {
  params: { blogId: string; commentId: string };
}) {
  // This params can be single level only nested and we cannot have /text after it.
  const { blogId, commentId } = params;
  return (
    <>
      <h1>
        Comment {commentId} for blog {blogId}
      </h1>
    </>
  );
}
