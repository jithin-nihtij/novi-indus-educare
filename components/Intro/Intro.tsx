import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { TextCarousal } from "./TextCarousal";
import { WhatsAppIcon } from "./WhatsAppIcon";
import Image from "next/image";
import { Marquee } from "../magicui/marquee";

const Intro = () => {
  const curriculum = [
    {
      img: "/assets/intro/MarqueeOne.svg",
    },
    {
      img: "/assets/intro/MarqueeTwo.svg",
    },
    {
      img: "/assets/intro/MarqueeThree.svg",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url('/assets/intro/introBg.png')`,
      }}
      className="w-full h-screen"
    >
      <TextCarousal />
      <div className="fixed  top-30 right-10">
        <div className="relative">
          <div className="w-[53px] h-[53px] bg-green-200 animate-ping rounded-full" />
          <div className="absolute -top-5 -right-5">
            <WhatsAppIcon />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-[30%_40%_30%] grid-cols-1">
        <div className="flex justify-center items-center">
          <Image
            src={"assets/intro/peopleOne.svg"}
            alt="people one"
            width={500}
            height={500}
            className="object-cover float"
          />
        </div>

        <div>
          <div className="flex justify-center">
            <div className="relative lg:pt-[150px] py-10 ">
              <Button className="rotate-[2deg] hover:rotate-0 w-[200px] bg-yellow-200 h-14 hover:bg-yellow-200">
                Book A Free Demo Class
              </Button>
              <Button className=" -rotate-6 hover:rotate-0 absolute -left-[1%] bg-[#8A1538] hover:bg-[#8A1538] w-[200px] h-14">
                <span>Book A Free Demo Class</span>
                <span>
                  <ArrowUpRight />
                </span>
              </Button>
            </div>
          </div>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <div className="text-[#8A1538] font-bold text-[24px]">
              Curriculums We Offer:
            </div>
            <Marquee className="[--duration:20s]">
              {curriculum.map((item) => (
                <Image
                  key={item.img}
                  src={item.img}
                  alt="curriculum"
                  width={300}
                  height={300}
                />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src={"assets/intro/peopleTwo.svg"}
            alt="people one"
            width={500}
            height={500}
            className="object-cover float"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
