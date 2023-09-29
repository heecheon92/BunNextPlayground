import { isServerSide } from "@/app/util";

export default function Box() {
  console.log("is server side: ", isServerSide());

  return <div className="h-[100px] w-[100px] bg-rose-500"></div>;
}
