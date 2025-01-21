import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Technologies from './components/Technologies';

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 min-h-screen relative"> 
        {/* Background layers */}
        <div className="fixed top-0 left-0 -z-10 h-full w-full bg-black">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        </div>
        {/* Main content */}
        <div className="relative container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
        </div>
      </div>
    </>
  );
}

export default App;
