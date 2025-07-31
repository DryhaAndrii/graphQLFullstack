"use client";

import { useQuery } from "@apollo/client";
import { HelloDocument } from "@/generated/graphql";

export default function Hello() {
  const { data, loading, error } = useQuery(HelloDocument);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="text-green-600 text-xl">
      Server says: <strong>{data?.hello}</strong>
    </div>
  );
}
