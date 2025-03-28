export default function HeroSection() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 lg:gap-12 text-gray-900 max-w-5xl">
        
        {/* Left - Text Content */}
        <div className="flex flex-col justify-center items-center md:items-start gap-4 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">Hi,</h1>
          <h1 className="text-4xl md:text-5xl font-bold text-[#537FE7]">I am Krishneshvar</h1>
          <p className="text-lg md:text-xl text-gray-700">I'm a software developer</p>
        </div>

        {/* Right - Profile Image */}
        <div className="flex justify-center">
          <img
            src="/krish.png"
            alt="Krishneshvar"
            className="h-auto w-[60%] max-w-[200px] md:max-w-[250px] lg:max-w-[300px] rounded-full shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
