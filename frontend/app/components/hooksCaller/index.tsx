"use client";

import useAuthGuard from "@/app/hooks/useAuthGuard";

export default function HooksCaller() {
  useAuthGuard();
  return null;
}
