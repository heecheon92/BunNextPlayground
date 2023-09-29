"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

export default function BaseClientProvider({ children }: PropsWithChildren) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </RecoilRoot>
  );
}
