import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { TiltedButton } from "../TiltedButton";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { Header } from "../Header";

export const FourthLayer = () => {
  const offer = [
    {
      title: "English Grammar",
      description: "Master the building blocks of writing and communication.",
      image: "/assets/FourthLayer/kidOne.svg",
    },
    {
      title: "Craft Classes",
      description:
        "Unleash creativity with hands-on projects and artistic fun.",
      image: "/assets/FourthLayer/kidTwo.svg",
    },
    {
      title: "Art and Painting",
      description: "Express yourself through colors, sketches, and designs.",
      image: "/assets/FourthLayer/kidThree.svg",
    },
  ];

  return (
    <section className="py-10 w-[90%] mx-auto">
      <div className="grid col-span-2 lg:grid-cols-3 ">
        <div className="invisible lg:block"></div>
        <Header text="Programs we offer for" boldText="Kids" />

        <div className="flex justify-end">
          <div className="relative">
            <TiltedButton text="view all" />
          </div>
        </div>
      </div>
      <Carousel
        className="w-[80%] md:w-full max-w-full mx-auto overflow-visible py-10"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {offer.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 p-6"
            >
              <PinkCard
                description={item.description}
                title={item.title}
                image={item.image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export const PinkCard = ({
  description,
  image,
  title,
}: {
  title: string;
  image: string;
  description: string;
}) => {
  return (
    <div className="bg-[#FFF3E1] rounded-xl p-3 space-y-4 flex justify-between">
      <div className="w-[80%]">
        <p className="text-[#8A1538] font-bold">{title}</p>
        <p className="text-[#8A1538]">{description}</p>
        <div className="relative py-4">
          <Button className="rotate-[2deg] hover:rotate-0 w-[200px] bg-yellow-200 h-10 hover:bg-yellow-200"></Button>
          <Button className=" -rotate-6 hover:rotate-0 absolute top-4 -left-[1%] bg-[#8A1538] hover:bg-[#8A1538] w-[200px] h-10 cursor-pointer">
            <span>Read More</span>
            <span>
              <ArrowUpRight />
            </span>
          </Button>
        </div>
      </div>
      <div className="relative w-[20%]">
        <Image
          src={image}
          alt="image"
          width={200}
          height={200}
          className="object-cover absolute bottom-0 -top-8 right-0"
        />
      </div>
    </div>
  );
};
