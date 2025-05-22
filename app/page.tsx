import { BlogPosts } from "@/components/BlogPosts/BlogPosts";
import { Footer } from "@/components/Footer/Footer";
import { FourthLayer } from "@/components/FourthLayer/FourthLayer";
import Intro from "@/components/Intro/Intro";
import { SecondLayer } from "@/components/SecondLayer/SecondLayer";
import { ThirdLayer } from "@/components/ThirdLayer/ThirdLayer";
import { Navbar } from "@/components/ui/Nav/Navbar";
import { WhatsAppIconMain } from "@/components/WhatsAppIcon";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <SecondLayer />
      <ThirdLayer />
      <FourthLayer />
      <BlogPosts />
      <Footer />
      <WhatsAppIconMain />
    </div>
  );
}
