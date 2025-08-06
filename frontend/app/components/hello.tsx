"use client";

import { useQuery } from "@apollo/client";
import { GetSecretDataDocument, HelloDocument } from "@/generated/graphql";

export default function Hello() {
  const { data, loading, error } = useQuery(HelloDocument);

  const {
    data: secretData,
    loading: secretLoading,
    error: secretError,
  } = useQuery(GetSecretDataDocument);
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="text-green-600 text-xl">
      Server says: <strong>{data?.hello}</strong>

      {secretLoading && <p>Loading secret data...</p>}
      {secretError && <p className="text-red-500">Error: {secretError.message}</p>}
      {secretData && <p>Protected data: {secretData?.getSecretData}</p>}
    </div>
  );
}
