import { cookies } from "next/headers";
import { PropsWithChildren } from "react";

import { ClientCookiesProvider } from "./ClientCookiesProvider";

export default function BaseServerProvider({ children }: PropsWithChildren) {
  return (
    <ClientCookiesProvider value={cookies().getAll()}>
      {children}
    </ClientCookiesProvider>
  );
}
