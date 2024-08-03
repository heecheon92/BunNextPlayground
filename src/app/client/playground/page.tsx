"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";

const data = Array.from({ length: 10 }, (_, i) => i);
export default function PlaygroundPage() {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="flex h-[100dvh] w-full flex-col bg-white text-black">
      <button
        className="mt-4 shrink rounded-full bg-blue-600 p-4 data-[toggle=true]:bg-green-400"
        data-toggle={toggle}
        onClick={() => setToggle(!toggle)}
      >
        Toggle
      </button>
      <LayoutGroup id="layout-group">
        <AnimatePresence>
          <div className="relative flex h-full w-full flex-row space-x-4 p-4">
            <div className="flex h-full w-full flex-row space-x-4 p-4">
              <>
                {data.map((i) => (
                  <>
                    {i === 0 ? (
                      <motion.div
                        key={i}
                        layout
                        layoutId={`item-${i}`}
                        className="flex h-24 w-24 flex-col items-center justify-center bg-black/30 text-white"
                      >
                        {`Item ${i}`}
                      </motion.div>
                    ) : (
                      <div className="flex h-24 w-24 flex-col items-center justify-center bg-black/30 text-white">
                        {`Item ${i}`}
                      </div>
                    )}
                  </>
                ))}
              </>
            </div>

            <div className="flex h-full w-full flex-row space-x-4 p-4">
              {toggle && (
                <motion.div
                  key={`toggled:${0}`}
                  layout
                  layoutId={`item-${0}`}
                  className="z-50 flex h-24 w-24 flex-col items-center justify-center bg-black/30 text-white"
                >
                  {`Item ${0}`}
                </motion.div>
              )}
            </div>
          </div>
        </AnimatePresence>
      </LayoutGroup>
    </section>
  );
}
