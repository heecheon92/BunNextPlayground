export default function Box() {

    console.log("is client side: ", typeof window !== undefined)

    return <div className="w-[100px] h-[100px] bg-rose-500"></div>
}