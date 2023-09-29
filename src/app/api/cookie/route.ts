import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";

import { AuthToken, authTokenSchema } from "../types";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const res = await request.json();
  if (res) {
    const tokenResult = authTokenSchema.safeParse(res);
    if (tokenResult.success) {
      setAccessToken(cookieStore, tokenResult.data);
      console.log(
        `ROUTE TS parsed? ${tokenResult.success}: `,
        JSON.stringify(res, null, 2),
      );
      return new Response("Cookies set", {
        status: 200,
        headers: {
          "Set-Cookie": cookieStore.toString(),
        },
      });
    }

    return new Response("Invalid Token", {
      status: 401,
    });
  }

  return new Response("Unacceptable", {
    status: 402,
  });
}

export async function DELETE(request: Request) {
  const cookieStore = cookies();

  for (const each of cookieStore.getAll()) {
    cookieStore.delete(each);
  }

  return new Response("Cookies set", {
    status: 200,
    headers: {
      "Set-Cookie": "",
    },
  });
}

function setAccessToken(cookie: ReadonlyRequestCookies, token: AuthToken) {
  cookie.set("accessToken", token.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 60 * 60,
    path: "/",
  });
  cookie.set("refreshToken", token.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    path: "/",
  });
}
