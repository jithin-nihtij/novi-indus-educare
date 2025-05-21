"use client";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Mail, Menu, Phone } from "lucide-react";
import { Button } from "../button";
import Link from "next/link";
import { SheetLayout } from "@/components/Layouts/SheetLayout";

const subjects = [
  {
    title: "Maths",
  },
  {
    title: "Physics",
  },
  {
    title: "Chemistry",
  },
  {
    title: "Biology",
  },
  {
    title: "English",
  },
  {
    title: "Arabic",
  },
];

export const Navbar = () => {
  return (
    <div className="bg-[#8A1538] w-full h-19 ">
      <div className="w-[90%] mx-auto py-2  justify-between hidden lg:flex">
        <Image
          src={"/assets/nav/educareLogo.svg"}
          alt="edu care logo"
          width={0}
          height={0}
          unoptimized
          className="object-cover w-[200px] h-full"
        />

        <NavElements />

        <Contacts />
      </div>
      <div className="lg:hidden flex items-center h-19 justify-end px-4 ">
        <SheetLayout
          className="p-0"
          trigger={
            <>
              <Button className="cursor-pointer">
                <Menu />
              </Button>
            </>
          }
          title={
            <>
              <Image
                src={"/assets/nav/educareLogo.svg"}
                alt="edu care logo"
                width={0}
                height={0}
                unoptimized
                className="object-cover w-[200px] h-full"
              />
            </>
          }
        >
          <MobileMenuContents />
        </SheetLayout>
      </div>
    </div>
  );
};

const MobileMenuContents = () => {
  return (
    <div className="flex flex-col text-[24px] font-semibold]">
      <Link href={"/"}>About</Link>
      <Link href={"/"}>Courses</Link>
      <Link href={"/"}>Career</Link>
      <Link href={"/"}>News & Blog</Link>
      <Link href={"/"}>Payments</Link>
    </div>
  );
};

const NavElements = () => {
  return (
    <div className="flex items-center">
      <Link href={"/"}>
        <Button className="bg-transparent hover:bg-transparent shadow-none">
          About Us
        </Button>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="bg-transparent hover:bg-transparent shadow-none">
            <span>Courses</span>
            <span>
              <ChevronDown />
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-[#FFF3E1] p-0">
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="hover:bg-[#8A1538] hover:text-white text-[#655945]">
                For School Students
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="bg-[#FFF3E1] p-0">
                  {subjects.map((item) => (
                    <DropdownMenuItem
                      className=" hover:bg-[#8A1538] text-[#655945] hover:text-white"
                      key={item.title}
                    >
                      {item.title}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem className="text-[#655945] hover:bg-[#8A1538] hover:text-white">
              For Kids
            </DropdownMenuItem>
            <DropdownMenuItem className="text-[#655945] hover:bg-[#8A1538] hover:text-white">
              Others
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link href={"/"}>
        <Button className="bg-transparent hover:bg-transparent shadow-none">
          Career
        </Button>
      </Link>
      <Link href={"/"}>
        <Button className="bg-transparent hover:bg-transparent shadow-none">
          News & Blog
        </Button>
      </Link>
      <Link href={"/"}>
        <Button className="bg-transparent hover:bg-transparent shadow-none">
          Payments
        </Button>
      </Link>
    </div>
  );
};

const Contacts = () => {
  return (
    <div className="flex justify-between text-white items-center space-x-3">
      <div>
        <div>
          <p className="flex space-x-2 text-[12px]">
            <span className="flex items-center justify-center ">
              <Phone size={15} />
            </span>
            <span>+974 55555 3456</span>
          </p>
        </div>
        <div>
          <p className="flex space-x-2 text-[12px]">
            <span className="flex items-center justify-center">
              <Mail size={15} />
            </span>
            <span>info@educare.qa</span>
          </p>
        </div>
      </div>
      <div>
        <Button className="bg-white text-[#8A1538]">Contact Us</Button>
      </div>
    </div>
  );
};
