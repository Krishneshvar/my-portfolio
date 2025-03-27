import NavBar from "../components/NavBar";

export default function Modern() {
  return (
    <div className="h-[100dvh] w-[100dvw] bg-[#222831] text-[#EEEEEE] p-4 flex justify-center items-center">
      <div
        className="relative flex flex-col items-center gap-6 h-full w-full border border-[#EEEEEE] text-[#00ADB5] rounded-lg overflow-hidden"
        style={{ fontFamily: "Zen Dots, sans-serif", fontWeight: 400, fontStyle: "normal", }}
      >
        <NavBar />
        <div className="flex flex-col justify-center items-center flex-1">
          <h1 className="text-4xl">Hi,</h1>
          <h1 className="text-4xl">I am Krishneshvar</h1>
        </div>
      </div>
    </div>
  );
}
