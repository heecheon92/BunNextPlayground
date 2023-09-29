"use client";

import { useState } from "react";

import Box from "../server/component/box";

export default function ClientPage() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex flex-col">
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? <>{"hi"}</> : <Box />}
      </button>
    </div>
  );
}
