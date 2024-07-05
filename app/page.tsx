import Navbar from "@/components/header/Navbar"
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Promise from "@/components/home/Promise";
import Talk from "@/components/home/Talk";
import Footer from "@/components/footer/Footer";



export default function Home() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        Ittsy Chatbot
      </h1>
      
    </div>
  );
  return (
    <main className="flex min-h-full flex-col items-center justify-between">
      {/* <GoogleAnalytics gaId="G-WMHLC4N3R2" /> */}
      <Navbar />
      <Hero />
      <Services />
      <Promise />
      <Talk />
      <Footer />

    </main>
  );
}
