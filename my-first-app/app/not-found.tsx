// This will handle all the scenarios where we do not have the pages present itself, so will show the not found page. We can also add them inside the respective modules or folders to handle them properly.
"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  // We can then get the path that we are working on,
  const path = usePathname();
  return <div>Not Found Page</div>;
}
