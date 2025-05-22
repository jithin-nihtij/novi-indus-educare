import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#8A1538] py-6">
      <div className="w-[90%] mx-auto grid grid-cols-1  lg:grid-cols-[30%_20%_20%_30%]  gap-14 lg:gap-6 text-white py-4">
        <div className="">
          <Image
            src={"/assets/nav/educareLogo.svg"}
            alt="edu care logo"
            width={0}
            height={0}
            unoptimized
            className="object-contain w-[200px] h-full"
          />
        </div>
        <div>
          <h1 className="font-semibold text-[24px]">Navigation</h1>
          <div className="flex flex-col space-y-4">
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Curriculum</Link>
            <Link href={"/"}>Career</Link>
            <Link href={"/"}>Blogs</Link>
            <Link href={"/"}>Contact Us</Link>
          </div>
        </div>

        <div>
          <h1 className="font-semibold text-[24px]">Contact Info</h1>
          <div className="flex flex-col space-y-4 underline ">
            <a href="mailto:educare@gmail.com">educare@gmail.com</a>
            <a href="https://www.info@educare.com">info@educare.com</a>
            <a href="tel:+974 4412 3456">+974 4412 3456</a>
            <a href="tel:+974 5534 7890">+974 5534 7890</a>
            <div className="flex space-x-4">
              <Instagram />
              <Facebook />
              <Linkedin />
              <Youtube />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            src={"/assets/footer/Frame.svg"}
            alt="map"
            width={100}
            height={100}
            className="object-contain"
          />
          <div className="space-y-4">
            <h1 className="font-semibold">Office Address</h1>
            <p className="text-left">
              EducareEducation Center Building 45, Al Sadd Street,Doha, Qatar
            </p>
            <a href="#" className="underline">
              View On Map
            </a>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 text-center h-16 text-white">
          <div className="flex justify-center items-center h-full">
            © 2024 educare
          </div>
          <div className="flex justify-center items-center h-full ">
            Designed By
            <span className="text-[#DCC196]"> Noviindus Technologies</span>
          </div>
          <div className="flex justify-center items-center h-full space-x-2 text-[#DCC196]">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
