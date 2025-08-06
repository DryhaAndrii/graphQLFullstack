import { usePaths } from "@/endpointAndPaths";
import { GetSecretDataDocument } from "@/generated/graphql";
import { useQuery } from "@apollo/client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useAuthGuard() {
  const router = useRouter();
  const pathname = usePathname();
  const { authPath } = usePaths();

  const { data, loading, error } = useQuery(GetSecretDataDocument, {
    fetchPolicy: "network-only",
    errorPolicy: "all",
  });

  useEffect(() => {
    if (loading) return;

    const isUnauthorized =
      error?.graphQLErrors.some(
        (err) =>
          err.extensions?.code === "UNAUTHENTICATED" ||
          err.message.toLowerCase().includes("unauthorized")
      ) ?? false;

    if (isUnauthorized && pathname !== authPath) {
      router.push(authPath);
    }
  }, [loading, error, pathname, authPath, router]);
}
