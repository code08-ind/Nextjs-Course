import Link from "next/link";

type FileProps = {
  params: {
    filePath?: string[];
  };
};

// this will catch all the routes here. If we already have a static paths that we already defined inside the folder structure, so next.js will give priority to the static route and not the dynamic routes.
export default async function File({ params }: FileProps) {
  const { filePath } = params;
  return (
    <>
      <h1>File Path Component /{filePath?.join("/")}</h1>
    </>
  );
}
