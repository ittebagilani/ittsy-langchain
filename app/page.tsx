import { ChatWindow } from "@/components/ChatWindow";
import Navbar from "@/components/Header/Navbar"
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Promise from "@/components/Home/Promise";
import Talk from "@/components/Home/Talk";
import Footer from "@/components/Footer/Footer";
import ChatbotIcon from "@/components/ChatbotIcon";


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
      <ChatbotIcon />
    </main>
  );
}
