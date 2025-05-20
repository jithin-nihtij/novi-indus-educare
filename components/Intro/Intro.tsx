import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { PeopleOne } from "./PeopleOne";
import { PeopleTwo } from "./PeopleTwo";
import { TextCarousal } from "./TextCarousal";
import { WhatsAppIcon } from "./WhatsAppIcon";

const Intro = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/assets/intro/introBg.png')`,
      }}
      className="w-full h-[600px]"
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
      <div className="grid grid-cols-[40%_20%_40%]">
        <div className="float">
          <PeopleTwo />
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <Button className="rotate-[2deg] hover:rotate-0 w-[200px] bg-yellow-200  ">
              Book A Free Demo Class
            </Button>
            <Button className=" -rotate-6 hover:rotate-0 absolute -left-[1%] bg-[#8A1538] hover:bg-[#8A1538] w-[200px]">
              <span>Book A Free Demo Class</span>
              <span>
                <ArrowUpRight />
              </span>
            </Button>
          </div>
        </div>
        <div className="float">
          <PeopleOne />
        </div>
      </div>
    </div>
  );
};

export default Intro;
