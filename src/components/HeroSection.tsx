export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{
        backgroundImage: "url('/hero.svg')",
        backgroundPosition: '65% center',
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to Shay Compass
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
          Turning Concepts into Reality
        </p>
      </div>
    </section>
  );
}
