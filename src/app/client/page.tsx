"use client";

import { useMutation } from "@tanstack/react-query";
import { useCookies } from "next-client-cookies";
import { useCallback, useState } from "react";

import { AuthToken } from "../api/types";
import Box from "../server/component/box";

export default function ClientPage() {
  const [toggle, setToggle] = useState(false);
  const cookie = useCookies();

  const setCookie = useCallback(() => {
    cookie.set("accessToken", "abc");
    cookie.set("refreshToken", "def");
  }, [cookie]);

  const delCookie = useCallback(() => {
    cookie.remove("accessToken");
    cookie.remove("refreshToken");
  }, [cookie]);

  const { mutate: requestSetCookie, isLoading: requestSetCookieLoading } =
    useMutation({
      mutationKey: ["requestSetCookie"],
      mutationFn: reqPostCookie,
    });

  const { mutate: requestDeleteCookie, isLoading: requestDeleteCookieLoading } =
    useMutation({
      mutationKey: ["requestDeleteCookie"],
      mutationFn: reqDeleteCookie,
    });

  if (requestSetCookieLoading || requestDeleteCookieLoading)
    return <>Hold on a sec</>;

  return (
    <div className="flex flex-col">
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? <>{"hi"}</> : <Box />}
      </button>
      <button onClick={setCookie}>{"Set browser Cookie"}</button>
      <button onClick={() => requestSetCookie()}>
        {"Request server to set cookie"}
      </button>

      <button onClick={delCookie}>{"Reset Browser Cookie"}</button>
      <button onClick={() => requestDeleteCookie()}>
        {"Request Server to reset Cookie"}
      </button>
    </div>
  );
}

async function reqPostCookie() {
  const dummyToken: AuthToken = {
    accessToken: "qwer",
    refreshToken: "zxcv",
  };
  return await fetch("/api/cookie", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dummyToken),
  });
}

async function reqDeleteCookie() {
  return await fetch("/api/cookie", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
