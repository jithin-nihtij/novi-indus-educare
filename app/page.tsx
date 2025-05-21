import Intro from "@/components/Intro/Intro";
import { SecondLayer } from "@/components/SecondLayer/SecondLayer";
import { Navbar } from "@/components/ui/Nav/Navbar";
import { WhatsAppIconMain } from "@/components/WhatsAppIcon";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <SecondLayer />
      <WhatsAppIconMain />
    </div>
  );
}
